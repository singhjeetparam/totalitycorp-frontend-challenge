import React from 'react'
import * as ReactDOM from "react-dom/client";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';


const Layout = () =>{
  return(
    <div className='app'>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}


//creating router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App