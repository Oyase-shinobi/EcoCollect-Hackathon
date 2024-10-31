import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdown
  , 
    WalletDropdownDisconnect, 
  } from '@coinbase/onchainkit/wallet'; 
  import {
    Address,
    Avatar,
    Name,
    Identity,
  } from '@coinbase/onchainkit/identity';

const ConnectWalletButton = () => {
  return (
<Wallet>
        <ConnectWallet className="bg-primary40 hover:bg-[#006D44] hover:scale-105  transition-all ">
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={"text-[#006D44]"}/>
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
  )
}

export default ConnectWalletButton