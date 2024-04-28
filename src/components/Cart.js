//import Hello from "./Hello";
import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import {useDispatch} from "react-redux";
import {clearCart,removeItem} from "../utils/cartSlice"

const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
    const handleremoveItems=()=>{
        dispatch(removeItem());
    }
   
    return (
        <div>
            <h1 className="font-bold">Total Cart Items : {cartItems.length}</h1>
            <button className="p-1 m-2 bg-green-100" onClick={()=>handleClearCart()}>Clear-Cart</button>
            <button className="p-1 m-2 bg-green-100" onClick={()=>handleremoveItems()}>Remove-Items</button>
            <br />
            <div className="flex flex-wrap ml-10">
            {
            cartItems.map((item)=> <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
              )
            }   
            </div>
              
        </div>
    )
}
export default Cart;