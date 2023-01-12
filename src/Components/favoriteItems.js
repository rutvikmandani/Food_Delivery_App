import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from "react-redux";

const FavoriteItems = ({ id, image, name, price, removeFav }) => {
    const favoriteIDs = useSelector((state) => state.s_value?.favorite)
    // debugger
    return (
        <>
            <div className="favouriteItems">
                <div className="imgBox">
                    <img src={image} alt="" />
                </div>
                <div className="favItemSection">
                    <h2 className="favItemName">{name}</h2>
                </div>
                <p className="favItemPrice">
                    <span className="favDolorSign">$</span>
                    <span className="favItemPriceValue">{price}</span>
                </p>
                <div className="favRemove" onClick={() => removeFav(id)} > <DeleteForeverIcon /> </div>
            </div>
        </>
    )
}
export default FavoriteItems;