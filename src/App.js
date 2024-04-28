import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Profile from "./components/profile";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Hello from "./components/Hello";
//import Instamart from "./components/instamart";
import {Provider} from "react-redux";
import store from "./utils/store";

const Instamart=lazy(()=> import("./components/instamart"));

const About=lazy(()=> import("./components/About"));
// upon on demand loading -> upon render ->suspend Loading

const AppLayout=() =>{
     return (
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        </Provider>
     );
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout />,
      errorElement:<Error />,
      children:[
      {
         path:"/",
         element:<Body />
      },   
      {
         path:"/about",
         element:(
            <Suspense fallback={<h1>Loading.......</h1>}>
               <About />
            </Suspense>
         ),
         children:[
         {
         path:"profile",
         element:<Profile />
         },  
         ]
      },
      {
         path:"/contact",
         element:<Contact />
      },
      {
         path:"/cart",
         element:<Cart />,
         children:[
            {
            path:"hello",
            element:<Hello />
            },  
            ],
      },
      {
         path:"/restaurant/:resId",
         element:<RestaurantMenu />
      },
      {
         path:"/instamart",
         element:(
         <Suspense fallback={<Shimmer />}>
           <Instamart /> 
         </Suspense>
         ),  
      },
      ],
   }, 
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

