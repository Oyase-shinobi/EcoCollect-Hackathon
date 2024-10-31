// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import token smart contract from same directory.
import "./EcoToken.sol";

/**
 * @title EcoCollect
 * @dev Implementation of the EcoCollect contract.
 * It facilites the exchange between recycling companies and plastic pickers.
 */

contract EcoCollect {

    address immutable ecoTokenAddress;
    address[] public companyAddresses;
    address[] public pickerAddresses;
    mapping(address => Company) public companies;
    mapping(address => Picker) public pickers;
    uint256 public totalTransactions;
    mapping(uint256 => Transaction) public transactions;
    bool private locked; // Boolean variable to track the reentrancy status of the contract.

    constructor(address _ecoTokenAddress) {
        require(
            _ecoTokenAddress != address(0),
            "EcoCollect: Can't assign a zero address"
        );
        totalTransactions = 0;
        ecoTokenAddress = _ecoTokenAddress;
    }

    struct Company {
        address companyAddress;
        string name;
        uint256 minWeightRequirement;
        uint256 maxPricePerKg;
        bool active;
    }

    struct Picker {
        address pickerAddress;
        string name;
        string email;
        uint256 weightDeposited;
        uint256[] transactions;
    }

    struct Transaction {
        uint256 id;
        address companyAddress;
        address pickerAddress;
        uint256 weight;
        uint256 price;
        bool isApproved;
    }

    // ================================================== MODIFIERS ================================================== //

    /**
     * @dev Modifier that allows only registered companies to perform an action.
     */
    modifier onlyCompany() {
        // TODO: Improve function modularity and reduce dependencies for enhanced decoupling.
        require(
            companies[msg.sender].maxPricePerKg != 0,
            "EcoCollect: Only a registered company can perform this action"
        );
        _;
    }

    /**
     * @dev Modifier that allows only active companies to perform an action.
     */
    modifier onlyActiveCompany() {
        require(
            companies[msg.sender].active,
            "EcoCollect: Only active companies can perform this action"
        );
        _;
    }

    /**
     * @dev Modifier that allows only registered pickers to perform an action.
     */
    modifier onlyPicker() {
        // TODO: Improve function modularity and reduce dependencies for enhanced decoupling.
        require(
            bytes(pickers[msg.sender].name).length > 0,
            "EcoCollect: Only a registered pickers can perform this action"
        );
        _;
    }

    /**
     * @dev Modifier that checks if a transaction with the given ID exists.
     * @param _transactionId The ID of the transaction.
     */
    modifier transactionExists(uint256 _transactionId) {
        // TODO: Improve function modularity and reduce dependencies for enhanced decoupling.
        require(
            transactions[_transactionId].price != 0,
            "EcoCollect: Transaction does not exist"
        );
        _;
    }

    /**
     * @dev Modifier that checks if a transaction with the given ID is approved.
     * @param _transactionId The ID of the transaction.
     */
    modifier transactionApproved(uint256 _transactionId) {
        // TODO: Improve function modularity and reduce dependencies for enhanced decoupling.
        require(
            transactions[_transactionId].isApproved == true,
            "EcoCollect: Transaction does not exist"
        );
        _;
    }

    /**
     * @dev Modifier to prevent reentrancy attacks by allowing a function to be called only when not already in progress.
     */
    modifier noReentrancy() {
        require(!locked, "EcoCollect: Reentrant call");
        locked = true;
        _;
        locked = false;
    }

    // ================================================== EVENTS ================================================== //

    /**
     * @dev Emitted when a company's information is successfully registered on the EcoCollect platform.
     */
    event CompanyRegistered(
        address indexed companyAddress,
        string name,
        uint256 minWeightRequirement,
        uint256 maxPricePerKg,
        bool active
    );

    /**
     * @dev Emitted when a company's information is successfully edited on the EcoCollect platform.
     */
    event CompanyEdited(
        address indexed companyAddress,
        string name,
        uint256 minWeightRequirement,
        uint256 maxPricePerKg,
        bool active
    );

    /**
     * @dev Emitted when a company's name is successfully updated on the EcoCollect platform.
     */
    event CompanyNameUpdated(address indexed companyAddress, string newName);

    /**
     * @dev Emitted when a company's minimum weight requirement is successfully updated on the EcoCollect platform.
     */
    event CompanyMinWeightRequirementUpdated(
        address indexed companyAddress,
        uint256 newMinWeightRequirement
    );

    /**
     * @dev Emitted when a company's maximum price per kilogram is successfully updated on the EcoCollect platform.
     */
    event CompanyMaxPricePerKgUpdated(
        address indexed companyAddress,
        uint256 newMaxPricePerKg
    );

    /**
     * @dev Emitted when a company's active status is successfully updated on the EcoCollect platform.
     */
    event CompanyActiveStatusUpdated(
        address indexed companyAddress,
        bool newActiveStatus
    );

    /**
     * @dev Emitted when a picker is successfully registered on the EcoCollect platform.
     */
    event PickerRegistered(
        address indexed pickerAddress,
        string name,
        string email
    );

    /**
     * @dev Emitted when a picker's information is successfully edited on the EcoCollect platform.
     */
    event PickerEdited(
        address indexed pickerAddress,
        string name,
        string email
    );

    /**
     * @dev Emitted when a picker's name is successfully updated on the EcoCollect platform.
     */
    event PickerNameUpdated(address indexed pickerAddress, string newName);

    /**
     * @dev Emitted when a picker's email is successfully updated on the EcoCollect platform.
     */
    event PickerEmailUpdated(address indexed pickerAddress, string newEmail);

    /**
     * @dev Emitted when plastic is successfully deposited by a picker to a company on the EcoCollect platform
     */
    event PlasticDeposited(
        address indexed pickerAddress,
        address indexed companyAddress,
        uint256 weight
    );

    /**
     * @dev Emitted when plastic is successfully validated by a company on the EcoCollect platform.
     */
    event PlasticValidated(
        address indexed companyAddress,
        uint256 transactionId
    );

    /**
     * @dev Emitted when a payment is made to a picker on the EcoCollect platform.
     */
    event PickerPaid(address sender, address recipient, uint256 amount);

    // ================================================== FUNCTIONS ================================================== //

    /**
     * @dev Track the balanceOf of token holders
     */
    function balanceOf() public view returns (uint256) {
        return EcoToken(ecoTokenAddress).balanceOf(msg.sender);
    }

    /**
     * @dev Registers a new company.
     * @param _name The name of the company.
     * @param _minWeightRequirement The minimum weight requirement for the company.
     * @param _maxPricePerKg The maximum price per kilogram set by the company.
     * @param _active The activity status of the company.
     * @return success A boolean indicating if the registration was successful.
     */

    function registerCompany(
        string memory _name,
        uint256 _minWeightRequirement,
        uint256 _maxPricePerKg,
        bool _active
    ) public returns (bool success) {
        bytes memory nameInBytes = bytes(_name);
        uint256 nameLength = nameInBytes.length;
        require(
            companies[msg.sender].minWeightRequirement == 0,
            "EcoCollect: Sorry you can't register twice edit your info if you wish to"
        );
        require(nameLength != 0, "EcoCollect: Please enter a company name");
        require(
            _maxPricePerKg > 0,
            "EcoCollect: set price must be greater than zero"
        );
        require(
            _minWeightRequirement > 0,
            "EcoCollect: Invalid minimum weight requirement"
        );
        Company memory newCompany = Company(
            msg.sender,
            _name,
            _minWeightRequirement,
            _maxPricePerKg,
            _active
        );
        companies[msg.sender] = newCompany;
        companyAddresses.push(msg.sender);
        emit CompanyRegistered(
            msg.sender,
            _name,
            _minWeightRequirement,
            _maxPricePerKg,
            _active
        );
        return true;
    }

    /**
     * @dev Gets the count of registered companies.
     * @return count The count of registered companies.
     */

    function getRegisteredCompanyCount() public view returns (uint256 count) {
        return companyAddresses.length;
    }

    /**
     * @dev Edits an existing company.
     * @param _name The new name of the company.
     * @param _minWeightRequirement The new minimum weight requirement for the company.
     * @param _maxPricePerKg The new maximum price per kilogram set by the company.
     * @param _active The new activity status of the company.
     * @return success A boolean indicating if the edit was successful.
     */

    function editCompany(
        string memory _name,
        uint256 _minWeightRequirement,
        uint256 _maxPricePerKg,
        bool _active
    ) public onlyCompany returns (bool success) {
        bytes memory nameInBytes = bytes(_name);
        uint256 nameLength = nameInBytes.length;
        require(nameLength != 0, "EcoCollect: Please enter a company name");
        require(
            _maxPricePerKg > 0,
            "EcoCollect: Set price must be greater than zero"
        );
        require(
            _minWeightRequirement > 0,
            "EcoCollect: Invalid minimum weight requirement"
        );
        Company storage company = companies[msg.sender];
        company.name = _name;
        company.minWeightRequirement = _minWeightRequirement;
        company.maxPricePerKg = _maxPricePerKg;
        company.active = _active;
        emit CompanyEdited(
            msg.sender,
            _name,
            _minWeightRequirement,
            _maxPricePerKg,
            _active
        );
        return true;
    }

    /**
     * @dev Updates the name of the company for the calling address.
     * @param _name The new name to be set for the company.
     */

    function updateCompanyName(string memory _name) public onlyCompany {
        require(
            bytes(_name).length != 0,
            "EcoCollect: Please enter a company name"
        );
        Company storage company = companies[msg.sender];
        company.name = _name;
        emit CompanyNameUpdated(msg.sender, _name);
    }

    /**
     * @dev Updates the minimum weight requirement of the company for the calling address.
     * @param _minWeightRequirement The new minimum weight requirement to be set for the company.
     */

    function updateCompanyMinWeightRequirement(
        uint256 _minWeightRequirement
    ) public onlyCompany {
        require(
            _minWeightRequirement > 0,
            "EcoCollect: Invalid minimum weight requirement"
        );
        Company storage company = companies[msg.sender];
        company.minWeightRequirement = _minWeightRequirement;
        emit CompanyMinWeightRequirementUpdated(
            msg.sender,
            _minWeightRequirement
        );
    }

    /**
     * @dev Updates the maximum price per kilogram of the company for the calling address.
     * @param _maxPricePerKg The new maximum price per kilogram to be set for the company.
     */

    function updateCompanyMaxPricePerKg(
        uint256 _maxPricePerKg
    ) public onlyCompany {
        require(
            _maxPricePerKg > 0,
            "EcoCollect: Set price must be greater than zero"
        );
        Company storage company = companies[msg.sender];
        company.maxPricePerKg = _maxPricePerKg;
        emit CompanyMaxPricePerKgUpdated(msg.sender, _maxPricePerKg);
    }

    /**
     * @dev Updates the active status of the company for the calling address.
     * @param _active The new active status to be set for the company.
     */

    function updateCompanyActiveStatus(bool _active) public onlyCompany {
        Company storage company = companies[msg.sender];
        company.active = _active;
        emit CompanyActiveStatusUpdated(msg.sender, _active);
    }

    /**
     * @dev Registers a new picker.
     * @param _name The name of the picker.
     * @param _email The email address of the picker.
     * @return success A boolean indicating if the registration was successful.
     */

    function registerPicker(
        string memory _name,
        string memory _email
    ) public returns (bool success) {
        require(
            bytes(_name).length > 0,
            "EcoCollect: Please provide a valid picker name."
        );
        require(
            bytes(_email).length > 0,
            "EcoCollect: Please provide a valid email address."
        );
        require(
            bytes(pickers[msg.sender].name).length == 0,
            "EcoCollect: Picker already registered"
        );
        Picker memory newPicker = Picker(msg.sender,_name, _email, 0, new uint256[](0));
        pickers[msg.sender] = newPicker;
        pickerAddresses.push(msg.sender);
        emit PickerRegistered(msg.sender, _name, _email);
        return true;
    }

    /**
     * @dev Gets content of the Picker struct since Solidity does not return arrays from structs inside mappings.
     * @return picker The struct containing the information about registered pickers.
     */

    function getPicker(address _address) public view returns (Picker memory) {
        return pickers[_address];
    }

    /**
     * @dev Gets content of the Picker struct since Solidity does not return arrays from structs inside mappings.
     * @return picker The struct containing the information about registered pickers.
     */

     function getCompany(address _address) public view returns (Company memory) {
        return companies[_address];
    }

    /**
     * @dev Gets the count of registered pickers.
     * @return count The count of registered pickers.
     */

    function getRegisteredPickerCount() public view returns (uint256 count) {
        return pickerAddresses.length;
    }

    /**
     * @dev Edits an existing picker.
     * @param _name The new name of the picker.
     * @param _email The new email address of the picker.
     * @return success A boolean indicating if the edit was successful.
     */

    function editPicker(
        string memory _name,
        string memory _email
    ) public onlyPicker returns (bool success) {
        require(
            bytes(_name).length > 0,
            "EcoCollect: Please provide a valid picker name."
        );
        require(
            bytes(_email).length > 0,
            "EcoCollect: Please provide a valid email address."
        );
        Picker storage existingPicker = pickers[msg.sender];
        existingPicker.name = _name;
        existingPicker.email = _email;
        emit PickerEdited(msg.sender, _name, _email);
        return true;
    }

    /**
     * @dev Updates the name of a specific picker.
     * @param _name The new name to be set for the picker.
     */

    function updatePickerName(string memory _name) public onlyPicker {
        require(
            bytes(_name).length != 0,
            "EcoCollect: Please enter a picker name"
        );
        Picker storage picker = pickers[msg.sender];
        picker.name = _name;
        emit PickerNameUpdated(msg.sender, _name);
    }

    /**
     * @dev Updates the email of a specific picker.
     * @param _email The new email to be set for the picker.
     */

    function updatePickerEmail(string memory _email) public onlyPicker {
        require(
            bytes(_email).length != 0,
            "EcoCollect: Please enter a picker email"
        );
        Picker storage picker = pickers[msg.sender];
        picker.email = _email;
        emit PickerEmailUpdated(msg.sender, _email);
    }

    /**
     * @dev Deposits plastic from a picker to the contract.
     * @param _companyAddress The address of the company receiving the plastic deposition.
     * @param _weight The weight of the deposited plastic.
     * @return transactionId The ID of the transaction.
     */

    function depositPlastic(
        address _companyAddress,
        uint256 _weight
    ) public onlyPicker returns (uint256 transactionId) {
        require(_weight > 0, "EcoCollect: Weight must be greater than zero");
        require(
            companies[_companyAddress].active,
            "EcoCollect: This company is no longer active"
        );
        require(
            _weight >= companies[_companyAddress].minWeightRequirement,
            "EcoCollect: Weight is below company's minimum requirement"
        );

        Transaction memory newTransaction = Transaction(
            totalTransactions,
            _companyAddress,
            msg.sender,
            _weight,
            companies[_companyAddress].maxPricePerKg,
            false
        );
        transactions[totalTransactions] = newTransaction;
        
        Picker storage existingPicker = pickers[msg.sender];
        existingPicker.weightDeposited = existingPicker.weightDeposited + _weight;
        existingPicker.transactions.push(totalTransactions);
        
        totalTransactions++;
        emit PlasticDeposited(msg.sender, _companyAddress, _weight);
        return newTransaction.id;
    }

    /**
     * @dev Validates a plastic transaction.
     * @param _transactionId The ID of the transaction to be validated.
     * @return success A boolean indicating if the validation was successful.
     */

    function validatePlastic(
        uint256 _transactionId
    ) public onlyActiveCompany transactionExists(_transactionId) returns (bool success) {
        require(
            transactions[_transactionId].companyAddress == msg.sender,
            "EcoCollect: This transaction belongs to another company"
        );
        require(
            !transactions[_transactionId].isApproved,
            "EcoCollect: Transaction has already been approved"
        );
        
        transactions[_transactionId].isApproved = true;
        emit PlasticValidated(msg.sender, _transactionId);
        return true;
    }

    /**
     * @dev Pays a picker for a completed transaction.
     * @param _transactionId The ID of the completed transaction.
     * @return success A boolean indicating if the payment was successful.
     */

    function payPicker(
        uint256 _transactionId
    ) public transactionApproved(_transactionId) noReentrancy returns (bool success) {
        Transaction storage transaction = transactions[_transactionId];
        require(
            transaction.companyAddress == msg.sender,
            "EcoCollect: Only the assigned company can pay for this transaction"
        );
        require(
            transaction.isApproved,
            "EcoCollect: Transaction must be approved before payment"
        );

        uint256 amount = transaction.weight * transaction.price;

        EcoToken ecoToken = EcoToken(ecoTokenAddress);
        
        uint256 allowance = ecoToken.allowance(msg.sender, address(this));
        require(allowance >= amount, "EcoCollect: Insufficient allowance");

        uint256 balance = ecoToken.balanceOf(msg.sender);
        require(balance >= amount, "EcoCollect: Insufficient balance");

        // Mark transaction as processed before transfer to prevent reentrancy
        transaction.isApproved = false;

        bool transferSuccess = ecoToken.transferFrom(
            msg.sender,
            transaction.pickerAddress,
            amount
        );

        require(transferSuccess, "EcoCollect: Transfer failed");

        emit PickerPaid(msg.sender, transaction.pickerAddress, amount);
        return true;
    }

    /**
     * @dev Gets all company addresses.
     * @return Array of company addresses.
     */
    function getAllCompanyAddresses() public view returns (address[] memory) {
        return companyAddresses;
    }

    /**
     * @dev Gets all companies and their details.
     * @return Array of Company structs.
     */
    function getAllCompanies() public view returns (Company[] memory) {
        uint256 length = companyAddresses.length;
        Company[] memory allCompanies = new Company[](length);

        for (uint256 i = 0; i < length; i++) {
            address companyAddress = companyAddresses[i];
            allCompanies[i] = companies[companyAddress];
        }

        return allCompanies;
    }

    /**
     * @dev Gets all picker addresses.
     * @return Array of picker addresses.
     */
    function getAllPickerAddresses() public view returns (address[] memory) {
        return pickerAddresses;
    }

    /**
     * @dev Gets transactions for a specific picker.
     * @param _pickerAddress The address of the picker.
     * @return Array of Transaction structs.
     */
    function getPickerTransactions(address _pickerAddress) public view returns (Transaction[] memory) {
        Picker storage picker = pickers[_pickerAddress];
        uint256 length = picker.transactions.length;
        Transaction[] memory pickerTransactions = new Transaction[](length);

        for (uint256 i = 0; i < length; i++) {
            pickerTransactions[i] = transactions[picker.transactions[i]];
        }

        return pickerTransactions;
    }
}