import React, { useState } from "react";
import {
    SearchRounded,
    ShoppingCartRounded,
} from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// login
import Dialog from '@mui/material/Dialog';
import Login from "./Login"

//logout
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import axios from "axios";
import { CurrentUserEmail, fetchUserData } from "../Store_Redux/Action";

const Header = ({ setData, setCartPage }) => {
    const cartID = useSelector((state) => state.s_value?.cart)
    const [userData, setUserData] = useState([])
    const [dispatchh, setDispatchh] = useState(true)
    const [dropDown, setDropDown] = useState(false)
    let userID = null
    let userName
    const currentUser = useAuth();
    // console.log("currentUser",currentUser?.email)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.s_value?.userinformation)
    console.log('data', data)

    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com/user.json"

    if (currentUser?.email) {
        if (dispatchh) {
            dispatch(fetchUserData(currentUser?.email))
            dispatch(CurrentUserEmail(currentUser?.email))
            setDispatchh(false)
        }
    }

    // console.log('payload@@', currentUser?.email)
    useEffect(() => {

        axios.get(baseURL).then((response) => {
            // console.log('response.data', response)
            setUserData(response.data)
            // console.log("url", Object.entries(response.data))
        });
    }, []);
    // console.log('userData', userData)

    if (userData) {
        const detail = (Object?.entries(userData))
        // console.log('detail@@', detail)
        detail?.map((el) => {
            // console.log('el[1].email', el[1].email)
            if (el[1].email === currentUser?.email) {
                // console.log("el[1]", el[1].username = "Rutvik1")
                // console.log("el[2]", el[1].username )
                return userName = el[1]
            }
        })
    }

    // useEffect(() => {
    //     const toggleIcon = document.querySelector(".toggleMenu");
    //     toggleIcon.addEventListener("click", () => {
    //         document.querySelector(".rightMenu").classList.toggle("active");
    //     });
    // }, []);

    const searchHandler = (event) => {
        setData(event.target.value)
    }

    const [login, setLogin] = React.useState(false);
    // 
    const handleClickLoginOpen = () => {
        setLogin(true);
    };

    const handleLoginClose = () => {
        setLogin(false);
    };

    const [signUp, setSignUp] = React.useState(false);


    const handleLogout = async () => {
        console.log("click")
        try {
            await logout();
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <header>
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/i1.png?alt=media&token=f277f93e-ffbd-46c8-8366-8bd87080c210"
                    alt="Logo"
                    className="logo" />

                <div className="inputBox">
                    <SearchRounded className="searchIcon" />
                    <input type="text" placeholder="Search" onChange={searchHandler} />
                    {/* <button onClick={s_ClickHandler}><SearchRounded className="searchIcon" /></button> */}
                </div>

                <div className="shoppingCart">
                    <ShoppingCartRounded className="cart" />
                    <div className="cart_content" >
                        <p className="cart" >{cartID ? cartID.length : 0}</p>
                    </div>
                </div>

                {
                    userName?.username ?

                        <div className="profileContainer" onClick={() => setDropDown(!dropDown)}>
                            <div className="imgBox">
                                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Admin.jpeg?alt=media&token=3601eedf-b4a0-4112-a447-107243813434"
                                    alt="UserPhoto" />
                            </div>
                            <h2 className="username">{userName?.username}</h2>
                            {dropDown ?
                                <a className="dropDown" onClick={handleLogout}> <LogoutIcon />Logout</a> : null}
                            {/* <div class="dropdown">
                                <button class="dropbtn">Dropdown</button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div> */}

                            {/* <h2 className="username">{currentUser ? currentUser?.email : "userName"}</h2> */}
                            {/* <h2 className="username">{currentUser?.email}</h2> */}
                        </div>
                        :
                        <button className="login" variant="outlined" onClick={handleClickLoginOpen} >
                            <div className="profileContainer">
                                <h2 className="username">Login here</h2>
                            </div>
                        </button>
                }

                {/* {
                    userName?.username ?
                        <div className="logout" >
                            <LogoutIcon onClick={handleLogout} />
                        </div>
                        :
                        null
                } */}

                {/* <div className="toggleMenu">
                    <BarChartIcon className="toggleIcon" onClick={() => setCartPage()} />
                </div> */}
            </header>



            {/* Login Page */}
            <Dialog
                open={login}
                onClose={handleLoginClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Login setLogin={handleLoginClose}
                    handleLogn={handleLoginClose}
                />
            </Dialog>

            {/* SignUp */}

        </>
    )
}

export default Header;