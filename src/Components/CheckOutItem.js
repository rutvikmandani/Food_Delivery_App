import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, fetchUserData, RemoveCartItem, RemoveItem } from "../Store_Redux/Action";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import { useEffect, useState } from "react";
import axios from "axios";

const CheckOutItem = ({ image, name, qty, price, id }) => {

    const itemPrice = price * qty
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.s_value?.cart)
    console.log('cartItems', cartItems)

    const [state, setState] = useState(false)



    const currentUser = useAuth();
    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"


    return (
        <>
            <div className="checkoutItem">
                <div className="imgBox">
                    <img src={image} alt="" />
                </div>
                <div className="iremBetween">
                    <div className="itemSection">
                        <h2 className="checkOutItemName">{name}</h2>
                    </div>
                    <div className="priceQtyCheckout">
                    <p className="itemPrice">
                        <span className="dolorSign">$</span>
                        <span className="itemPriceValue">{itemPrice}</span>
                    </p>
                    <p className="itemPrice">
                        <span className="dolorSign">x</span>
                        <span className="itemPriceValue">{qty}</span>
                    </p>
                    </div>
                </div>
            </div>
            {/* <hr></hr> */}
        </>
    )
}

export default CheckOutItem