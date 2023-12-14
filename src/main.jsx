import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import HomePage from './Components/Home/HomePage/HomePage.jsx';
import Services from './Components/Services/Services.jsx';

import Admin from './Components/Admin/Admin.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import AdminAddService from './Components/Admin/AdminAddService/AdminAddService.jsx';
import AdminAddBlog from './Components/Admin/AdminAddBlog/AdminAddBlog.jsx';
import AdminServiceList from './Components/Admin/AdminServiceList/AdminServiceList.jsx';
import AdminBlogList from './Components/Admin/AdminBlogList/AdminBlogList.jsx';
import Login from './Components/Login/Login.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'service',
        element: <Services />,
        loader: () => fetch('http://localhost:5000/service')
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>,
        loader: () => fetch('http://localhost:5000/blog')
      },
      {
        path: '/admin',
        element: <Login></Login>
      }

    ]
  },
  {
    path: '/myadmin',
    element: <Admin></Admin>,
    children: [
      {
        path: '/myadmin',
        element: <AdminAddService ></AdminAddService>
      },
      {
        path: '/myadmin/addblog',
        element: <AdminAddBlog></AdminAddBlog>
      },
      {
        path: '/myadmin/servicelist',
        element: <AdminServiceList></AdminServiceList>,
        loader: () => fetch('http://localhost:5000/service')
      },
      {
        path: '/myadmin/bloglist',
        element: <AdminBlogList></AdminBlogList>,
        loader: () => fetch('http://localhost:5000/blog')
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
