import { Route, Routes } from 'react-router-dom';

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

import AdminDashboard from '../../pages/admin_dashboard/AdminDashboard';
import HistoryPage from "../../pages/admin_dashboard/HistoryPage.jsx";
import OffersPage from "../../pages/admin_dashboard/OffersPage.jsx";
import Notifications from '../../pages/admin_dashboard/Notifications';
import Companies from '../../pages/admin_dashboard/Companies';
import ChatPage from '../../pages/admin_dashboard/ChatPage';

const routes = [
    {
        name: 'Dashboard',
        path: '/admin-dashboard',
        white_icon: dashboardWhiteIcon,
        green_icon: dashboardGreenIcon,
        id: "dashboard-deposit",
        component: AdminDashboard
    },
    {
        name: "Companies",
        path: '/admin-dashboard/companies',
        white_icon: companyWhiteIcon,
        green_icon: companyGreenIcon,
        id: 'dashboard-companies',
        component: Companies
    },
    {
        name: "Notifications",
        path: '/admin-dashboard/notifications',
        component: Notifications,
        white_icon: notificationWhiteIcon,
        green_icon: notificationGreenIcon,
        id: 'dashboard-notifications',
    },
 
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

const AdminDashboardRoutes = () => {
    return <Routes>{renderRoutes(routes)}</Routes>  
};

export { routes, AdminDashboardRoutes };