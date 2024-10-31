import settingsWhiteIcon from '../assets/settingsWhite.svg'
import settingsGreenIcon from '../assets/settingsGreen.svg'
// import depositIcon from '../assets/deposit-ic.svg'
import companyIcon from '../assets/companyWhite.svg'
import chatWhiteIcon from '../assets/chatWhite.svg'
import chatGreenIcon from '../assets/chatGreen.svg'
import offersWhiteIcon from '../assets/offersWhite.svg'
import offersGreenIcon from '../assets/offersGreen.svg'
import notificationWhiteIcon from "../assets/notificationWhite.svg";
import notificationGreenIcon from "../assets/notificationGreen.svg";
import historyWhiteIcon from '../assets/historyWhite.svg'
import historyGreenIcon from '../assets/historyGreen.svg'
import dashboardWhiteIcon from '../assets/dashboardWhite.svg'
import dashboardGreenIcon from '../assets/dashboardGreen.svg'

export const UserDashboardNavData = [
    {
        'title': "Dashboard",
        'white_icon': dashboardWhiteIcon,
        'green_icon': dashboardGreenIcon,
        'id': "dashboard-deposit",
        'link': '/user-dashboard'

    },
    {
        'white_icon': companyIcon,
        'green_icon': companyIcon,
        'title': "Companies",
        'id': 'dashboard-companies',
        'link': ''
    },
    {
        'white_icon': notificationWhiteIcon,
        'green_icon': notificationGreenIcon,
        'title': "Notifications",
        'id': 'dashboard-notifications',
        'link': ''   
    },
    {
        'white_icon': settingsWhiteIcon,
        'green_icon': settingsGreenIcon,
        'title': "Settings",
        'id': 'dashboard-settings',
        'link': '/user-dashboard/settings',
    },
    {
        'white_icon': historyWhiteIcon,
        'green_icon': historyGreenIcon,
        'title': "History",
        'id': 'dashboard-history',
        'link': '/user-dashboard/history',
        
    },
    {
        'white_icon': offersWhiteIcon,
        'green_icon': offersGreenIcon,
        'title': "Offers and Contest",
        'id': 'dashboard-offers',
        'link': '/user-dashboard/offers',
    },
    {
        'white_icon': chatWhiteIcon,
        'green_icon': chatGreenIcon,
        'title': "Chat",
        'id': 'dashboard-chat',
        'link': '',
    }
]

export const CompanyDashboardNavData = [
    {
        'title': "Dashboard",
        'white_icon': dashboardWhiteIcon,
        'green_icon': dashboardGreenIcon,
        'id': "dashboard-deposit",
        'link': '/company-dashboard'
    },
    {
        'icon': companyIcon,
        'title': "Transactions",
        'id': 'dashboard-transactions',
        'link': ''
    },
    {
        'white_icon': notificationWhiteIcon,
        'green_icon': notificationGreenIcon,
        'title': "Notifications",
        'id': 'dashboard-notifications',
        'link': ''
        
    },
    {
        'white_icon': settingsWhiteIcon,
        'green_icon': settingsGreenIcon,
        'title': "Settings",
        'id': 'dashboard-settings',
        'link': '/company-dashboard/settings',
    },
    {
        'white_icon': historyWhiteIcon,
        'green_icon': historyGreenIcon,
        'title': "Hstory",
        'id': 'dashboard-history',
        'link': '/company-dashboard/history',  
    },
    {
        'white_icon': offersWhiteIcon,
        'green_icon': offersGreenIcon,
        'title': "Offers and Contest",
        'id': 'dashboard-offers',
        'link': '/company-dashboard/offers',
    },
    {
        'white_icon': chatWhiteIcon,
        'green_icon': chatGreenIcon,
        'title': "Chat",
        'id': 'dashboard-chat',
        'link': '',
    }

]




