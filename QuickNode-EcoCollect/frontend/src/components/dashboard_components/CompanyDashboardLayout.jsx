import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import menuIcon from "../../assets/menu-ic.svg";
import searchIcon from "../../assets/search.svg";
import { useRecycleContract } from "../../context/RecycleContractProvider";
import { DashboardFooterData } from "../../data/DashboardFooterData";
import { routes } from "../../routes/dashboard/company";
import Logo from "../logo";
import Header from "../navigation/Header";

const CompanyDashboardLayout = ({ dashboard_content, active_link }) => {
  const connectedAccount = useAccount().address;
  const { account_category } = useRecycleContract();

  if (account_category === "company") {
    return (
      <div className=" relative h-[1025px] min-w-[968px] container mx-auto ">
        {/* toggle menu button */}
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <img src={menuIcon} alt="" />
        </button>
  
        {/* left sidebar */}
        <aside id="default-sidebar" className="absolute w-[20%] h-full left-0 z-40 bg-[#0D4D00] items-center border-2 border-[#0D4D00]  overflow-y-scroll transition-transform -translate-x-full sm:translate-x-0 mb-20" aria-label="Sidebar">
          <div className="p-4 absolute left-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
  
            <figcaption className="mt-1 text-white">Welcome  <br />
            {
              connectedAccount ?
              `${connectedAccount.slice(0,5)}...${connectedAccount.slice(connectedAccount.length-5, connectedAccount.length)}`
              :
              ""
            }
            </figcaption>
          </div>
  
          {/*  menu items*/}
          <div className="h-full  absolute top-40 w-full py-4 dark:bg-gray-800">
            {/* hamburger menu */}
            <div className='flex flex-row px-4 py-2 items-center'>
            <img src={menuIcon} alt="menu-icon" className='mr-4 w-[18px] h-[12px]'/>
            <h1 className='font-montserrat font-[700] text-[1.6rem] text-white'>MENU</h1>
            </div>
            <ul className="text-white font-medium ">
              {routes.map((route, index) => (
                <Link to={route.path} key={index} 
                  className={`w-full h-[4rem] flex flex-row px-4 py-2 justify-left items-center bg-${route.name === active_link ? "white" : ""} transition duration-500 transform hover:scale-90 sca`}>
                  <img src={`${route.name === active_link ? route.green_icon : route.white_icon}`} alt={`${route.name} logo`} className="mr-4 w-[0.81rem] h-[0.81rem]" />
                  <h4 className={`text-[1rem] font-[600] font-montserrat ${route.name === active_link ? "text-primary40":"text-white"}`}>{route.name}</h4>
                </Link>
              ))}
            </ul>
            {/* <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
                <span className='ml-3 text-white'>MENU</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3'
                  />
                </svg>
                <span className='ml-3 text-white'>Deposit Plastic</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25'
                  />
                </svg>
  
                <span className='flex-1 ml-3 text-white whitespace-nowrap'>
                  Companies
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
                  />
                </svg>
  
                <span className='flex-1 ml-3 text-white whitespace-nowrap'>
                  Notification
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
  
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
  
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>
                  History
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                  />
                </svg>
  
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>
                  Offer & Contest
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                  />
                </svg>
  
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>
                  Chat
                </span>
              </a>
            </li>
          </ul> */}
          </div>
        </aside>
  
        {/* card component: header and content of dashboard4 */}
        <main className="absolute w-[80%] h-full right-0 bottom-4 px-16 bg-[#F8F9FB]">
          {/* dash board header */}
          <header className="my-4 border-black-700 flex flex-row justify-between items-center">
            <div className="w-12 h-12 items-center ">
              <Link to={'/'}><Logo /></Link>
            </div>
            <div>
              <h1 className="text-[1rem] md:text-[1rem] lg:text-[1.2rem] text-[#0D4D00] font-bold">COMPANY DASHBOARD</h1>
            </div>
            {/* search box */}
            <div className="mt-4 flex flex-row border border-primary60 rounded-r-[20px] bg-white overflow-hidden ">
              <img src={searchIcon} alt="search-icon" className="border-r border-primary60 p-2" />
              <input type="text" placeholder="Companies, Offers & Contest" className="p-2 w-100 italic text-primary60 focus:outline-none" />
            </div>
          </header>
  
          {/* dashboard content */}
          <div className="container md:mx-auto ">{dashboard_content}</div>
        </main>
  
          {/* dashboard footer */}
          <footer className=" absolute w-[80%] right-0 bottom-0 px-4 py-2 bg-gray-200 text-black ">
            <div className=" flex flex-row item-center italic ">
              <div className="flex flex-col">
                {/* enter to earn a reccoin */}
                <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] mt-1 w-[24rem] text-[#000000] mb-2">Enter to Earn a Recylox</p>
                {/* learn more button*/}
                <Link className="rounded-[26px] w-40 py-2 px-6 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-medium text-[#fff] bg-[#71B453]">LEARN MORE</Link>
              </div>
  
              {/* other links */}
              <div className="flex flex-row justify-between items-center">
                {DashboardFooterData.map((footeritem, footerindex) => (
                  <Link key={footerindex} className="flex flex-col p-4 mr-4 justify-center items-center">
                    <img src={footeritem.icon} alt={`${footeritem.title} icon`} className="h-8 w-8" />
                    <h4 className="font-bold text-primary60">{footeritem.title}</h4>
                  </Link>
                ))}
              </div>
              {/* <div className='w-[16rem] md:w-[22rem] lg:w-[70rem] h-[4rem] border-black-400 bg-[#0D4D00]'></div> */}
            </div>
        </footer>
      </div>
    );
  }
  else {
    return <div className="container mx-auto">
      <Header/>
      <div className=" w-[90%] md:w-[500px] mx-auto p-4 mt-32 border-[#ddd] border shadow-light font-montserrat">
          <h1 className="text-red-700 text-center font-[700] text-2rem my-8 p-4 ">Unauthorized access!</h1>
          <p className="text-center text-primary40 mb-12 py-4">
            Only registered users are allowed access to this page. Register 
            <Link to={'/register-company'} className=" italic font-[600]"> here</Link> to continue. 
          </p>
      </div>
    </div>
  }
 
};

export default CompanyDashboardLayout;
