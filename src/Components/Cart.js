import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckOutData } from "../Store_Redux/Action";

// import DebitCard from "./DebitCard";
import CartItems from "./CartItems";
import Header from "./Header";

const Cart = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartID = useSelector((state) => state.s_value?.cart)
    const total = cartID?.map((price) => Number(price.price * price.quantity))
    const data = useSelector((state) => state.s_value?.userinformation)
    console.log('data@@', data?.cart?.cart)
    const y = data?.cart?.cart
    // const total = y?.map((price) => Number(price.price * price.quantity))
    const cTotal = total?.length && total?.reduce((total, price) => total + price)
    console.log('cartID', cartID)

    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"


    const checkOut = () => {
        // const url2 = `${baseURL}/user/${currentUserID}/checkout.json`;
        //     axios.put(url2, {
        //         // ...userinformation,
        //         checkout: cartID
        //     })
        dispatch(CheckOutData(cartID))
        // navigate("/checkout")
    }

    return (
        <>
            <Header />
            <div className="rightMenu">
                {/* <div className="debitCardContainer">
                    <div className="debitCard">
                        <DebitCard />
                    </div>
                </div> */}
                <h1 className="title">Cart Page</h1>
                <div>
                        {/* data?.cart?.cart ?
                        (y).map((el) => { */}
                    {
                        cartID ?
                        cartID.map((el) => {
                                return (
                                    <div key={el.id}>
                                        <CartItems
                                            id={el.id}
                                            image={el.imgSrc}
                                            name={el.name}
                                            price={el.price}
                                            qty={el.quantity}
                                        />
                                    </div>)
                            })
                            : <div>{console.log("false")}</div>
                    }
                </div>

                <hr></hr>
                <div className="cartCheckOutContainer">
                    <h1 className="h1">Total</h1>
                    <h1> $ {cTotal} </h1>
                </div>
                <button className="checkOut" onClick={checkOut}> Check Out </button>
            </div>
        </>
    )
}

export default Cart;