import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layouts/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import ChefDetailsPage from './components/ChefDetailsPage/ChefDetailsPage';
import NotFound from './components/NotFound404/NotFound';
import PrivateRoute from './route/PrivateRoute';
import About from './About/About';
import ContactUs from './ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'chefdetails/:id',
        element:<PrivateRoute><ChefDetailsPage></ChefDetailsPage></PrivateRoute>,
        loader:({params})=>fetch('https://chef-recipe-hunting-server-nafiz-al-turabi.vercel.app/chefs')
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contactus',
        element:<ContactUs></ContactUs>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </>,
)
