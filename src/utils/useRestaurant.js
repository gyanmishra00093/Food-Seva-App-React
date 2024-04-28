import {useState,useEffect} from "react";
import {FETCH_MENU_URL} from "../Constant"; 

const useRestaurant=(resId) =>{
    const[restaurant,setRestaurant]=useState(null);

    useEffect(() =>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        try{
        const data=await fetch(FETCH_MENU_URL+resId);
        const json=await data.json();
        setRestaurant(json.data);

        //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        //setRestaurant(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
        }catch(error){
            console.error("Error fetching restaurant data:", error);
        }
    }
    return restaurant;
}
export default useRestaurant;