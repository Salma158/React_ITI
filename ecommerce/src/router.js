import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import ProductDetails from "./components/product-details/product-details";
import ProductList from "./components/products-list/products-list";
import Navbar from './navbar';
import ErrorPage from './errorPage';
import Form from './components/form/form';
import UserInfo from './components/form/UserInfo';

const router = createBrowserRouter([
  {
    path : '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Form/>
      },
      {
          path: "/userInfo",
          element: <UserInfo/>
      }
    ],
  }

]);

export default router;
