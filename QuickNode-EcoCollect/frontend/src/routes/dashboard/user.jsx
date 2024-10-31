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

import UserDashboard from '../../pages/user_dashboard/UserDashboard';
import DashboardUserSettings from "../../pages/user_dashboard/Settings.jsx";
import HistoryPage from "../../pages/user_dashboard/HistoryPage.jsx";
import OffersPage from "../../pages/user_dashboard/OffersPage.jsx";
import Notifications from '../../pages/user_dashboard/Notifications';
import Companies from '../../pages/user_dashboard/Companies';
import ChatPage from '../../pages/user_dashboard/ChatPage';

const routes = [
    {
        name: 'Dashboard',
        path: '/user-dashboard',
        white_icon: dashboardWhiteIcon,
        green_icon: dashboardGreenIcon,
        id: "dashboard-deposit",
        component: UserDashboard
    },
    {
        name: "Companies",
        path: '/user-dashboard/companies',
        white_icon: companyWhiteIcon,
        green_icon: companyGreenIcon,
        id: 'dashboard-companies',
        component: Companies
    },
    {
        name: 'History',
        path: '/user-dashboard/history',
        component: HistoryPage,
        white_icon: historyWhiteIcon,
        green_icon: historyGreenIcon,
        id: "dashboard-history",
    },
    {
        name: "Notifications",
        path: '/user-dashboard/notifications',
        component: Notifications,
        white_icon: notificationWhiteIcon,
        green_icon: notificationGreenIcon,
        id: 'dashboard-notifications',
    },
    {
        name: 'Settings',
        path: '/user-dashboard/settings',
        component: DashboardUserSettings,
        white_icon: settingsWhiteIcon,
        green_icon: settingsGreenIcon,
        id: "dashboard-settings",
    },

    // {
    //     name: 'Offers',
    //     path: '/user-dashboard/offers',
    //     component: OffersPage,
    //     white_icon: offersWhiteIcon,
    //     green_icon: offersGreenIcon,
    //     id: "dashboard-offers",
    // },
    // {
    //     name: "Chat",
    //     path: '/user-dashboard/chat',
    //     white_icon: chatWhiteIcon,
    //     green_icon: chatGreenIcon,
    //     id: 'dashboard-chat',
    //     component: ChatPage
    // }
];

const renderRoutes = (routes, basePath = '') => {
    return routes.map((route, index) => {
        const { group, path, component: Component } = route;
        const prefixedPath = group ? `${group}${path || ''}` : path || '';

        const fullPath = `${basePath}/${prefixedPath}`;

        if (!Component) {
            return null; // Skip rendering if component is missing
        }

        return <Route key={index} path={fullPath} element={<Component />} />;
    });
};

const UserDashboardRoutes = () => {

     return <Routes>{renderRoutes(routes)}</Routes>;
   
};

export { routes, UserDashboardRoutes };
