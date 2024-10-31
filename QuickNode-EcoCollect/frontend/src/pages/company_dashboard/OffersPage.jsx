import CompanyDashboardLayout from "../../components/dashboard_components/CompanyDashboardLayout";

const OffersPage = () => {
  return (
    <CompanyDashboardLayout active_link={'Offers'}
      dashboard_content={
        <div className="w-3/4 bg-white h-full flex border-2 border-blue-200">
          <div className=" p-4">
            <h1 className=" text-3xl font-black text-primary40 py-4 ml-4">
              Offers and Contest
            </h1>
            <div className="m-4">
              <div className="mb-5 bg-[#006D44C2] px-6 py-3 rounded-xl">
                <h2 className="text-base font-bold font-montserrat text-white text-[28px] italic leading-5 pt-3 ">
                  OFFER
                </h2>
                <p className="text-sm text-white font-montserrat pt-2 pb-10">
                  Bring 5kg of plastic and get 10 Recylox. This offer last for 7
                  days and when you refer someone that does the same you get 2
                  extra Recylox.
                </p>
              </div>
              <div className=" bg-[#006D44C2] px-6 py-3 rounded-xl relative">
                <h2 className=" text-base font-bold font-montserrat text-white text-[28px] italic leading-5 pt-3">
                  CONTEST
                </h2>
                <p className=" text-sm text-white font-montserrat pt-2 pb-10 ">
                  We are having a 2% shares, that will make you also a co-owner
                  of the company. to be qualified for such an opportunity, be
                  among the first 5 to bring 1000Kg of plastic waste
                </p>
                <button className="border-2 border-white bg-transparent px-7 text-white py-1 font-montserrat absolute right-10 bottom-2">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default OffersPage;
