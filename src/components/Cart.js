//import Hello from "./Hello";
import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice"

const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
   
    return (
        <div>
            <h1 className="font-bold">Total Cart Items : {cartItems.length}</h1>
            <br />
            <button className="p-1 m-2 bg-green-100" onClick={()=>handleClearCart()}>Clear-Cart</button>
            <br />
            {/* <h2 className="font-bold">Cart Items{cartItems[0]?.card?.info?.id}</h2>  */}
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