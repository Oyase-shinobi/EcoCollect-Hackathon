// import { useState } from 'react'
import { MainRoutes } from './routes/index';
import { UserDashboardRoutes } from './routes/dashboard/user.jsx';
import { CompanyDashboardRoutes } from './routes/dashboard/company.jsx';
import { AdminDashboardRoutes } from "./routes/dashboard/admin.jsx";


function App() {
  
  return (
   <>
      <MainRoutes />
      <UserDashboardRoutes />
      <CompanyDashboardRoutes />
      <AdminDashboardRoutes />
  </>
  )
}



export default App;
