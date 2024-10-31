import React from 'react';
import { Route, Routes } from 'react-router-dom';

import settingsWhiteIcon from '../../assets/settingsWhite.svg'
import settingsGreenIcon from '../../assets/settingsGreen.svg'
import companyWhiteIcon from '../../assets/companyWhite.svg'
import companyGreenIcon from '../../assets/companyGreen.svg'
import chatWhiteIcon from '../../assets/chatWhite.svg'
import chatGreenIcon from '../../assets/chatGreen.svg'
import offersWhiteIcon from '../../assets/offersWhite.svg'
import offersGreenIcon from '../../assets/offersGreen.svg'
import notificationWhiteIcon from "../../assets/notificationWhite.svg";
import notificationGreenIcon from "../../assets/notificationGreen.svg";
import historyWhiteIcon from '../../assets/historyWhite.svg'
import historyGreenIcon from '../../assets/historyGreen.svg'
import dashboardWhiteIcon from '../../assets/dashboardWhite.svg'
import dashboardGreenIcon from '../../assets/dashboardGreen.svg'

import CompanyDashboard from "../../pages/company_dashboard/CompanyDashboard.jsx";
import CompanyDashboardSettings from "../../pages/company_dashboard/DashboardCompanySettings.jsx";
import Notifications from '../../pages/company_dashboard/Notifications';
import HistoryPage from '../../pages/company_dashboard/HistoryPage';
import OffersPage from '../../pages/company_dashboard/OffersPage';
import ChatPage from '../../pages/company_dashboard/ChatPage';
import CompanyTransactionHistory from '../../pages/company_dashboard/CompanyTransactionHistory';

const routes = [
    {
        name: 'Dashboard',
        path: '/company-dashboard',
        white_icon: dashboardWhiteIcon,
        green_icon: dashboardGreenIcon,
        id: 'dashboard-companies',
        component: CompanyDashboard
    },
    {
        name: 'Transactions',
        path: '/company-dashboard/transactions',
        white_icon: companyWhiteIcon,
        green_icon: companyGreenIcon,
        id: 'dashboard-companies',
        component: CompanyTransactionHistory
    },
    {
        name: "Notifications",
        path: '/company-dashboard/notifications',
        component: Notifications,
        white_icon: notificationWhiteIcon,
        green_icon: notificationGreenIcon,
        id: 'dashboard-notifications',
    },
    {
        name: 'Settings',
        path: '/company-dashboard/settings',
        component: CompanyDashboardSettings,
        white_icon: settingsWhiteIcon,
        green_icon: settingsGreenIcon,
        id: "company-settings",
    },
    // {
    //     name: 'History',
    //     path: '/company-dashboard/history',
    //     component: HistoryPage,
    //     white_icon: historyWhiteIcon,
    //     green_icon: historyGreenIcon,
    //     id: "dashboard-history",
    // },
    // {
    //     name: 'Offers',
    //     path: '/company-dashboard/offers',
    //     component: OffersPage,
    //     white_icon: offersWhiteIcon,
    //     green_icon: offersGreenIcon,
    //     id: "dashboard-offers",
    // },
    // {
    //     name: "Chat",
    //     path: '/company-dashboard/chat',
    //     component: ChatPage,
    //     white_icon: chatWhiteIcon,
    //     green_icon: chatGreenIcon,
    //     id: 'dashboard-companies',
    // }, 
    
];

const renderRoutes = (routes, basePath = '') => {

    return routes.map((route, index) => {
        const { group, path, component: Component } = route;
        const fullPath = group ? `${basePath}${group}${path || ''}` : `${basePath}${path || ''}`;

        if (!Component) {
            return null; // Skip rendering if component is missing
        }

        return <Route key={index} path={fullPath} element={<Component />} />;
    });
};

const CompanyDashboardRoutes = () => {

    return <Routes>{renderRoutes(routes)}</Routes>
   
};

export { routes, CompanyDashboardRoutes };
