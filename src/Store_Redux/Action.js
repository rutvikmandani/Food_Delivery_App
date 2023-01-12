import axios from "axios";
import { SEARCH_DATA, SET_CART, REMOVE_CART_ITEM, ADD_ITEM, REMOVE_ITEM, FAVORITE, F_ITEMS, CURRENTUSER_ID, CURRENTUSER_EMAIL, CHECKOUT } from "./ActionType";
import { useAuth } from "./Firebase/FirebaseConfi";

export const SetCart = (payload) => {
    console.log("payloadcart",payload)
    return{
        type: SET_CART,
        payload
    }
}

export const RemoveCartItem = (payload) => {
    console.log("action",payload)
    return{
        type: REMOVE_CART_ITEM,
        payload
    }
}

export const AddItem = (payload) => {
    console.log("addAction",payload)
    return{
        type: ADD_ITEM,
        payload
    }
}

export const RemoveItem = (payload) => {
    console.log("RemoveAction",payload)
    return{
        type: REMOVE_ITEM,
        payload
    }
}

export const AddFavorite = (payload) => {
    
    console.log("payloadFav",payload)
    return{
        type: FAVORITE,
        payload
    }
}

export const CurrentUserID = (payload) => {
    console.log("CurrentUserID",payload)
    return{
        type: CURRENTUSER_ID,
        payload
    }
}

export const CurrentUserEmail = (payload) => {
    console.log('payload@@', payload)
    return{
        type: CURRENTUSER_EMAIL,
        payload
    }
}

export const CheckOutData = (payload) => {
    console.log('payload@@', payload)
    return{
        type: CHECKOUT,
        payload
    }
}

const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"





export const fetchUserData = (payload) => {
    console.log('payload@@', payload)
    // axios.get(`${baseURL}/user.json`).then((response)
    // let currentUser = useAuth();
    let userID 
    let userdetailID
    return async (dispatch) => {
        const response = await axios.get(`${baseURL}/user.json`);
        const allUserData = (response.data)
        console.log('allUserData', allUserData)
        const allUserDataArray = (Object.entries(response.data))
        // console.log('allUserData', allUserData)
        const userData = (Object?.entries(allUserData)).map((el) => {
            console.log('el@@', el)
            if(el[1].email === payload){
                // console.log('payload@@', payload)
                // console.log('emailllll', el[1].email)
                return el[1]
            }
        })
        userData.map((el, index) => {
            if (el !== undefined) {
                userID = index
            }
        })

        if (userID !== null) {
            allUserDataArray?.map((el, index) => {
                if (index === userID) {
                    return userdetailID = el[0]
                }
            })
        }
        // console.log('userData', userdetailID)
        const userResponse = await axios.get(`${baseURL}/user/${userdetailID}.json`);
        // console.log('userResponse', userResponse.data)
        if(userResponse.data?.cart?.cart){
            dispatch({type: "SET_CART",payload: userResponse.data?.cart?.cart})
        }
        if(userResponse.data?.favourite?.favourite){
            dispatch({type: "FAVORITE",payload: userResponse.data?.favourite?.favourite})
        }
        dispatch({type: "CURRENTUSER_ID",payload: userdetailID})
        dispatch({type: "FETCH_USER_DATA",payload: userResponse.data})
    } 
};