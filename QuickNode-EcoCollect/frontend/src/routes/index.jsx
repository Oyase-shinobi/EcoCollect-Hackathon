
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CompanyRegPage from '../pages/registration/CompanyRegPage';
import WhitePaper from '../pages/WhitePaper';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Test from '../pages/Test';
import Blog from '../pages/Blog';
import PrivacyPolicy from '../pages/Privacy';
import UserRegPage from '../pages/registration/UserRegPage';
import HowItWorks from '../pages/HowItWorks';
import ErrorPage from '../pages/ErrorPage';

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Register Company",
    path: "/register-company",
    component: CompanyRegPage,
  },
  {
    name: "Register User",
    path: "/register-user",
    component: UserRegPage,
  },
  // {
  //   name: "Authenticate",
  //   path: "/authenticate",
  //   component: EmailVerification,
  // },
  {
    name: "White Paper",
    path: "/white-paper",
    component: WhitePaper,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: Contact,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: AboutUs,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    name: "Test",
    path: "/test",
    component: Test,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "How It Works",
    path: "/how-it-works",
    component: HowItWorks,
  },
  // {
  //   name: "Error Page",
  //   path: "*",
  //   component: ErrorPage,
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

const MainRoutes = () => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export { routes, MainRoutes };
