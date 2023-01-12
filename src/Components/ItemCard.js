import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../Data/Data";
import { AddFavorite, FavItems, fetchUserData, SetCart } from "../Store_Redux/Action";
import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";

const ItemCard = ({ itemId, imgSrc, name, price, ratings }) => {
    const dispatch = useDispatch()
    const [isCart, setIsCart] = useState(null)
    const cartID = useSelector((state) => state.s_value?.cart)
    const favoriteIDs = useSelector((state) => state.s_value?.favorite)
    const [fav, setFav] = useState(favoriteIDs?.includes(itemId))

    const currentUser = useAuth();
    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const userinformation = useSelector((state) => state.s_value?.userinformation)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"

    
    // const setCartHandler = (id) => {
    //     // (Items.find((el) => el.id === itemId))
    // }

    
    useEffect(() => {
        // dispatch(fetchUserData(currentUser?.email))
        if (isCart) {
            cartID?.push(isCart);
            dispatch(SetCart(cartID));
            const url2 = `${baseURL}/user/${currentUserID}/cart.json`;
            axios.put(url2, {
                // ...userinformation,
                cart: cartID
            })
        }
    }, [isCart])




    const setFavorite = (id) => {
        // debugger
        setFav(!fav)
        if (id) {
            favoriteIDs?.some((el) => console.log("first", el, id))
            if (favoriteIDs?.some((el) => el === id)) {
                console.log("called")
                for (let i = 0; i <= favoriteIDs?.length; i++) {
                    if (favoriteIDs[i] === id) {
                        favoriteIDs.splice(i, 1)
                    }
                }
            } else {
                favoriteIDs.push(id);
            }
        }
        const url2 = `${baseURL}/user/${currentUserID}/favourite.json`;
        // const y = axios.get(url2)
        // console.log('firstyyy', y)
        axios.put(url2, {
            favourite: favoriteIDs
        })
        dispatch(AddFavorite(favoriteIDs))
    }


    return (
        <>
            <div className="itemCard">
                {/* {console.log("Condi", (favoriteIDs?.some((el) => el === itemId)))} */}
                <div className={`isFavourite ${fav === true ? "active" : ""}`}
                    onClick={() => currentUser ? setFavorite(itemId) : null}>
                    <Favorite />
                </div>
                <div className="imgBox">
                    <img src={imgSrc} alt="" className="itemImg" />
                </div>
                <div className="itemContent">
                    <h3 className="itemName"> {name}</h3>
                    <div className="bottom">
                        <div className="rating">
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <h3 className="price"><span>$</span>{price} </h3>
                        </div>
                        {/* <i className="addToCart" onClick={() => currentUser ? setCartHandler : null}></i> */}
                        <i className="addToCart" onClick={() => currentUser ? setIsCart(Items.find((el) => el.id === itemId)) : null}>
                            <AddRounded />
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard