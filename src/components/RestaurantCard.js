import {IMG_CDN_URL} from "../Constant";

const RestaurantCard=({
    name,
    cuisines,
    cloudinaryImageId,
    sla,
}) =>{
    return (
        <div className="w-56 h-[450px] p-2 m-2 shadow-lg bg-pink-50">
            <img className="w-56 h-60" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines && cuisines.join(", ")}</h3>
            <h4>{sla.lastMileTravelString ?? " " }</h4>
            <h5>{sla.slaString}</h5>
        </div>
    );
};

export default RestaurantCard;