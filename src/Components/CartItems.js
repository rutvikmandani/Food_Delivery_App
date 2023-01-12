import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, fetchUserData, RemoveCartItem, RemoveItem } from "../Store_Redux/Action";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import { useEffect, useState } from "react";
import axios from "axios";
import { async } from "@firebase/util";

const CartItems = ({ image, name, qty, price, id }) => {

    const itemPrice = price * qty
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.s_value?.cart)
    console.log('cartItems', cartItems)

    const [state, setState] = useState(false)



    const currentUser = useAuth();
    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const userinformation = useSelector((state) => state.s_value?.userinformation)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"

    const remove = async (id) => {
        const removeCart = cartItems?.filter((el) => el.id !== id)
        dispatch(RemoveCartItem(removeCart))
        // setState(!state)

        const url2 = `${baseURL}/user/${currentUserID}/cart/cart.json`;
        const y = await axios.get(url2)
        console.log('firsty', y)

        let a = null
        let z = null
        if (y) {
            let remove = (y.data).filter((el, index) => {
                if (el.id !== id) {
                    return a = el
                }
            })
            console.log('pId', remove)
            const url2 = `${baseURL}/user/${currentUserID}/cart.json`;
            await axios.put(url2, {
                cart: remove
            })
        }
    }

   

    const addQty = async (id) => {
        
        setState(!state)
        const url2 = `${baseURL}/user/${currentUserID}/cart/cart.json`;
        const y = await axios.get(url2)
        console.log('firsty', y)
        const t = y.data

        let a = null
        let z = null
        if (y) {
            let pId = (y.data).map((el, index) => {
                if (el.id === id) {
                    return a = index
                }
            })
            console.log('pId', pId)

        }
        const url3 = `${baseURL}/user/${currentUserID}/cart/cart/${a}.json`;
        z = await axios.get(url3)
        console.log('firstzzz', z.data.quantity)
        // let q = z.data.quantity
        
            await axios.put(url3, {
                ...t[a],
                quantity: z.data.quantity + 1
            })
        dispatch(AddItem(id))
    }

    const removeQty = async (id) => {
        dispatch(RemoveItem(id))
        // setState(!state)
        const url2 = `${baseURL}/user/${currentUserID}/cart/cart.json`;
        const y = await axios.get(url2)
        console.log('firsty', y)
        const t = y.data
        console.log('firstT', t[0])

        let a = null
        let z = null
        if (y) {
            let pId = (y.data).map((el, index) => {
                if (el.id === id) {
                    return a = index
                }
            })
            console.log('pId', pId)

        }

        const url3 = `${baseURL}/user/${currentUserID}/cart/cart/${a}.json`;
        z = await axios.get(url3)
        console.log('firstzzz', z.data.quantity)

        // z.data.quantity === 1 ? 1 : 
        if(z.data.quantity > 1){
            await axios.put(url3, { ...t[a], quantity: z.data.quantity - 1 })
        }else{
            console.log("called")
        }
    }

    return (
        <>
            <div className="cartItem">
                <div className="imgBox">
                    <img src={image} alt="" />
                </div>
                <div className="itemSection">
                    <h2 className="itemName">{name}</h2>
                    <div className="itemQuantity">
                        <span>x {qty}</span>
                        <div className="quantity">
                            <RemoveRounded className="itemRemove" onClick={() => removeQty(id)} />
                            <AddRounded className="itemAdd" onClick={() => addQty(id)} />
                        </div>
                    </div>
                </div>
                <p className="itemPrice">
                    <span className="dolorSign">$</span>
                    <span className="itemPriceValue">{itemPrice}</span>
                </p>
                <div className="remove" onClick={() => remove(id)}> <DeleteForeverIcon /> </div>
            </div>
        </>
    )
}

export default CartItems