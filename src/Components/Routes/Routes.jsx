import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Form/SignUp/SignUp";
import Login from "../Pages/Form/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>
        
        
    },
    {
        path:'/sign-up',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path: '/service/details/:id',
        loader: ()=> fetch('/events.json'),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
    }
])

export default Router;
