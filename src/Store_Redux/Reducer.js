import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "./Firebase/FirebaseConfi";

const initialState = {
    userinformation: [],
    cart: [],
    favorite: [],
    currentUserID: [],
    currentUserEmail: [],
    checkout: [],
}



export const Reducer = (state = initialState, {payload, type}) => {



    switch(type){
        case "SET_CART" :
            return{
                ...state,
                cart: payload
            }
        case "ADD_ITEM" :
            // debugger
            console.log('actionpayload', payload)
            return{
                ...state.cart,
                cart: state.cart?.map((el) => el.id === payload
                ? 
                {       
                    ...el,
                    quantity: el.quantity + 1,
                }
                 : el
                ),
            }
        case "REMOVE_ITEM" :
            return{
                ...state.cart,
                cart: state.cart?.map((el) => el.id === payload
                ? 
                {       
                    ...el,
                    quantity: el.quantity === 1 ? 1 : el.quantity - 1,}
                 : el
                ),
            }
    
        case "REMOVE_CART_ITEM" :
            return{
                cart: payload
            }

        case "FAVORITE" : 
            return{
                ...state,
                favorite: payload
            }

        case "CURRENTUSER_EMAIL" :
            console.log('payload@@', payload)
            return{
                ...state,
                currentUserEmail: payload
            }

        case "FETCH_USER_DATA" :
            return{
            ...state,
            userinformation: payload
        }
        case "CURRENTUSER_ID" :
            return{
                ...state,
                currentUserID: payload
            }
        case "CHECKOUT" :
            console.log('payload@@', payload)
            return{
                ...state,
                checkout: payload
            } 
        default:
            return state
    }
}
