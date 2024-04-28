import {useState} from "react";
import logo from "../assets/img/foodvila.png";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector  } from "react-redux";

const Title = () =>(
    <Link to="/">
    <img className="h-28 p-2" alt="logo" src={logo}  />
    </Link>
);
const Header= () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const isOnline=useOnline();
 
    const cartItems=useSelector(store=>store.cart.items);
   // console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-400 md:bg-pink-50">
        <Title />
        <div>
            <ul className="flex flex-nowrapp-10">
                <li className="px-5 py-8">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-5 py-8">
                <Link to="/about">About</Link>
                </li>
                <li className="px-5 py-8">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-5 py-8">
                    <Link to="/instamart">Instamart</Link>
                </li>
                <li className="px-5 py-8">
                    <Link to="/cart">Cart-{cartItems.length}-items</Link>
                </li>
            </ul>
        </div>
        <h1 className="py-7">{isOnline?"✔":"😡"}</h1>
        {
            isLoggedIn?(
            <button className="mr-7" onClick={()=>setIsLoggedIn(false)}>Logout</button >
            ):(
            <button className="mr-7" onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
        }
        
        </div>
    );
    
};  
export default Header;
