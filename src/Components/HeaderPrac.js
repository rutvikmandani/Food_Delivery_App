import React, { useState } from "react";
import {
    Google,
    SearchRounded,
    ShoppingCartRounded,
} from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';
import { useEffect } from "react";
import { useSelector } from "react-redux";

// login
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Login from "./Login"

//logout
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import SignUp from "./SignUp";
import SignUpModel from "./SignUp";
import axios from "axios";

const Header = ({ setData, setCartPage }) => {
    const cartID = useSelector((state) => state.s_value?.cart)
    const [allUserData, setAllUserData] = useState([])
    // const [userId,setUserId] = useState()
    let userID = null
    let userName
    const currentUser = useAuth();
    console.log("currentUser",currentUser)

    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com/user.json"

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log('response.data', response)
            setAllUserData(Object.entries(response.data));
            console.log("url", Object.entries(response.data))
        });
        console.log("allUserData4@", allUserData)
    }, []);
    console.log("allUserData:", allUserData)

    if (allUserData) {
        const detail = (Object?.entries(allUserData)).map((el) => {
            if (el[1].email === currentUser?.email) {
                // console.log("el[1]", el[1].username = "Rutvik1")
                console.log("el[2]", el[1].username )
                return userName = el[1]
            }
        })
        console.log("detail", detail)
        const id = detail.map((el,index)=> {
            if(el !== undefined){
                userID = index
                console.log('el@@@', index)
                console.log('index', el)
            }
        })
        console.log("detailIDS",Object?.entries(allUserData))
    }

    if(userID !== null){
        console.log('index', userID)
        console.log("index@", allUserData.map((el,index) => {
            if(index === userID){
                console.log('index@@', el[0])
            }
        }))

    }

    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active");
        });
    }, []);

    const searchHandler = (event) => {
        setData(event.target.value)
    }

    const [login, setLogin] = React.useState(false);

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
        } catch(error) {
            console.log("error",error);
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

                    <div className="profileContainer">
                        <div className="imgBox">
                            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Admin.jpeg?alt=media&token=3601eedf-b4a0-4112-a447-107243813434"
                                alt="UserPhoto" />
                        </div>
                        {/* <h2 className="username">{currentUser ? currentUser?.email : "userName"}</h2> */}
                        {/* <h2 className="username">{currentUser?.email}</h2> */}
                        <h2 className="username">{userName?.username}</h2>
                    </div>
                :
                <button className="login" variant="outlined" onClick={handleClickLoginOpen} >
                    <div className="profileContainer">
                        <h2 className="username">Login here</h2>
                    </div>
                </button>
                }

                {
                    userName?.username ? 
                <div className="logout" >
                    <LogoutIcon onClick={handleLogout}/>
                </div>
                :
                null
                }

                <div className="toggleMenu">
                    <BarChartIcon className="toggleIcon" onClick={() => setCartPage()} />
                </div>
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