import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import {FETCH_RESTAURANT_DATA} from "../Constant";

const Body = () =>{
    const [searchText,setSearchText]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    useEffect(()=>{
        getRestaurants();
    }, []);

    async function getRestaurants(){
        try{
        const data = await fetch(FETCH_RESTAURANT_DATA);
        const json=await data.json();
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.
            infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.
            infoWithStyle.restaurants);
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.
        // infoWithStyle.restaurants)
        }catch(error){
            console.log("async function Error",error)
        }
   }
        
    if(!allRestaurants)   return <h1>!allRestaurants</h1>;

    return allRestaurants?.length === 0 ? (
    <Shimmer />
    ):(
        <>
       <div className="p-5 bg-pink-50 my-5">
        <input type="text" className="focus:bg-green-100 p-2 m-2" placeholder="Search" 
        value={searchText}
        onChange={(e) =>{
            setSearchText(e.target.value);
        }}
        />
       
       <button className="p-2 m-2 bg-slate-700 hover:bg-grey-500 text-white rounded-md"
       onClick={() =>{
        const data=filterData(searchText,allRestaurants);
        setFilteredRestaurants(data);
        }}
       >Search</button>

       </div> 
        <div className="flex flex-wrap ml-16">
            {filteredRestaurants?.map((restaurant) =>{
                return  (
                <Link 
                to={"/restaurant/" + restaurant.info.id}  
                key={restaurant.info.id}
                >
                <RestaurantCard {...restaurant.info}/>
                </Link>
            )    
            })} 
        </div>
         </>
    );
};

export default Body;
