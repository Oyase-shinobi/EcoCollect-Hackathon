
import Layout from "../../components/dashboard_components/UserDashboardLayout";
import UserDashboardLayout from "../../components/dashboard_components/UserDashboardLayout";
import stateGreen from "../../assets/stateGreen.svg";
import stateRed from "../../assets/stateRed.svg";
import { useRecycleContract } from "../../context/RecycleContractProvider";
import { ethers } from "ethers";

const HistoryPage = () => {
  const data = [
    {
      value: 78,
      _weight: "150 KG",
      id: "XXXX....XXX.....",
      _address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 89,
      _weight: "98 KG",
      id: "XXXX....XXX.....",
      _address: "001f....",
      date: "5TH June 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: "45",
      _weight: "123 KG",
      id: "XXXX....XXX.....",
      _address: "021A....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: "CREDIT",
      id: "XXXX....XXX.....",
      _address: "021f....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },

    {
      value: 97,
      _weight: "123 KG",
      id: "XXXX....XXX.....",
      _address: "001f....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 55,
      _weight: "TOTAL WEIGHT",
      id: "XXXX....XXX.....",
      _address: "0047....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 82,
      _weight: "650 KG",
      id: "XXXX....XXX.....",
      _address: "09B6....",
      date: "5TH MAY 2020, 12:23",
      status: "APPROVED",
    },
    {
      value: 53,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "046f....",
      date: "5TH MAY 2020, 12:23",
      status: "DECLINED",
    },
    {
      value: 32,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "031f....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: 75,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "001h....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
    {
      value: "CREDIT",
      id: "XXXX....XXX.....",
      _address: "0013f...",
      date: "5TH MAY 2020, 12:23",
      status: "CREDIT",
    },
    {
      value: 75,
      _weight: "100 KG",
      id: "XXXX....XXX.....",
      _address: "001h....",
      date: "5TH MAY 2020, 12:23",
      status: "DEPOSITED",
    },
  ];

  const {pickerTransactionHistory} = useRecycleContract();
  console.log("pickerTransactionHistory =>", pickerTransactionHistory);
  return (
    <UserDashboardLayout
      active_link={"History"}
      dashboard_content={
        <div className=" bg-white h-full">
          {/* Transactions title */}
          <div className="font-black text-primary40 p-2">
            <h1 className="text-4xl font-bold text-primary40">History</h1>
            <h3 className="text-2xl font-bold text-primary40 py-2">
              Transactions
            </h3>
          </div>

          <div>
            {pickerTransactionHistory.map((transaction, index) => (
              <div
                key={index}>
                <table className="-m-2 min-w-full table-fixed border-2 border-black bg-gradient-to-r from-green-400 via-green-200 to-white">
                  <thead>
                    <tr className=" ">
                      <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL VALUE</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">TOTAL WEIGHT</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">TRANSACTION ID</span>
                      </th>
                      <th className="px-2 py-1">
                        <span className="font-semibold">ADDRESS</span>
                      </th>
                      <th className="px-2 py-1">
                        <div className="flex justify-end">
                          <img
                            className={`h-7 w-7 p-2 ${!transaction[5]  ? "bg-red-700" : "bg-green-700"}`}
                            src={!transaction[5]  ? stateRed : stateGreen}
                            alt="State Icon Green"
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-primary40 text-xs md:text-lg font-extrabold">
                      <td className="px-2 py-1 text-center ">{ethers.utils.formatEther(transaction[4])}</td>
                      <td className="px-2 py-1 text-center ">{parseInt(transaction[3])} KG</td>
                      <td className="px-2 py-1 text-center ">{parseInt(transaction[0])}</td>
                      <td className="px-2 py-1 text-center ">{transaction[1]}</td>
                      <td className="px-2 py-1 items-end text-right">
                        <ul>
                          <li className="text-xs font-bold text-gray-500">{transaction.date}</li>
                          <li
                            className={`font-extrabold ${!transaction[5]  ? "text-red-700" : "text-green-700"
                              }`}
                          >
                            {transaction[5]? "APPROVED" : "DECLINED"}
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            ))}
            <div className="h-2 w-full"></div>
          </div>

        </div>
      }
    />

  );
};
export default HistoryPage;