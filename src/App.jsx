import './App.css'
import ProductsList from './Pages/Products.jsx'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import ProductsDetails from './Pages/ProductsDetails'
import Login from './Pages/Login'
import Layout from './Layout/Layout'
import CookiesService from './Services/CookiesService'
import AdminDashboard from './Pages/dashboard/AdminDashboard'
import DashboardLayout from './Pages/dashboard/DashboardLayout'
import DashBoardProduct from './Pages/dashboard/DashBoardProduct'

import SignupComponent from './Pages/Sinup'
function App() {
  const token =CookiesService.get('jwt')



  return (
    <>
   
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<ProductsList/>}/>
      <Route path='/products' element={<ProductsList/>}/>
      <Route path="/products/:id" element={<ProductsDetails />} />
      {/* <Route path='/dashboard' element='Dashboard'/> */}
      <Route path="/team" element='Team' />
      </Route>
      <Route path='/sinup' element={<SignupComponent/> }/>
      <Route path='/AdmianDashboard' element={<DashboardLayout/>}>
      <Route index element={<AdminDashboard/>}/>
      <Route path='/AdmianDashboard/products' element={<DashBoardProduct/>}/>
      </Route>

      <Route path='/Login' element={<Login isAuthenticated={token} />}/>
    </Routes>


    </>
  )
}

export default App
