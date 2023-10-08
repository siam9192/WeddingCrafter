import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Form/SignUp/SignUp";
import Login from "../Pages/Form/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/profile";
import Planner from "../Pages/Planner/Planner.JSX";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute2 from "../PrivateRoute/PrivateRoute2";
import Blogs from "../Pages/Blogs/Blogs";
const Router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>,
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path:'/sign-up',
        element:<PrivateRoute2></PrivateRoute2>
    },
    {
        path:'/login',
        element: <PrivateRoute2><Login></Login></PrivateRoute2>
    },
    {
        path: '/service/details/:id',
        loader: ()=> fetch('/events.json'),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
path: '/blogs',
element: <Blogs></Blogs>
    },
    {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },{
        path:'/planner',
        loader: ()=> fetch('/planner.json'),
        element:<PrivateRoute><Planner></Planner></PrivateRoute>
    }
])

export default Router;
