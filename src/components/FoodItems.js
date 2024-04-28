import {IMG_CDN_URL} from "../Constant";

const FoodItems=({name,price,imageId}) =>{
   
    return (
        <div className="w-56 h-60 p-2 m-2 shadow-lg bg-pink-50">
            <img className="w-28 h-28" src={IMG_CDN_URL + imageId} />
            <h2 className="font-bold">{name ?? "name"}</h2>
            <h3 className="font-bold">{price/100 ?? "price"}</h3>
        </div>
    );
};

export default FoodItems;