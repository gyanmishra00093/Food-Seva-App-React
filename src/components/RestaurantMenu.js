import {useState} from "react";
import { useParams} from "react-router-dom"; 
import {resMenuList_img} from "../Constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {addItem} from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const restaurant=useRestaurant(resId);
    // console.log(restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    
    const dispatch=useDispatch();
    const addFoodItem=(item)=>{
        dispatch(addItem(item));
    }

    return !restaurant ? (
    <Shimmer />
    ):(
    <div className="flex">
        <div>
        <h1 className="font-bold">Restaurant Name: {restaurant?.cards[2]?.card?.card?.info?.name ?? 'No Name'}</h1>
        <img src={resMenuList_img + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt={restaurant?.name} />
        <h2 className="font-bold">Restaurant-Address: {restaurant?.cards[2]?.card?.card?.info?.slugs?.restaurant ?? 'unknown Area'}</h2>
        <h3 className="font-bold">City: {restaurant?.cards[2]?.card?.card?.info?.city ?? 'unknown City'}</h3>
        <h4 className="font-bold">Rating: {restaurant?.cards[2]?.card?.card?.info?.avgRating ?? 'unknown Rating'} Star</h4>
        <h5 className="font-bold">CostForTwoMessage: {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage ?? 'unknown Cost'}</h5>
        </div>
        <div className="p-5">
            <h1 className="font-bold border-solid:black">Menu</h1>
            <ul>
                {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) =>
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} + Price :
                {item?.card?.info?.defaultPrice!=null ? item?.card?.info?.defaultPrice/100:item?.card?.info?.price/100}
                <button className="p-1 m-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add</button>
                </li> )}
            </ul>
         </div>
    </div>
    );
};

export default RestaurantMenu;

