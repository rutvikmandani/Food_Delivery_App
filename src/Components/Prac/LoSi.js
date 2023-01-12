// import React, { useState } from "react";
// import {
//     Google,
//     SearchRounded,
//     ShoppingCartRounded,
// } from "@mui/icons-material";
// import BarChartIcon from '@mui/icons-material/BarChart';
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// // login
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import Login from "./Login"

// //logout
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";

// const Header = ({ setData, setCartPage }) => {
//     const cartID = useSelector((state) => state.s_value?.cart)
//     const [userEmail, setUserEmail] = useState("");
//     const [userPassword, setUserPassword] = useState("");

//     const currentUser = useAuth();
//     console.log("currentUser",currentUser?.email)

//     useEffect(() => {
//         const toggleIcon = document.querySelector(".toggleMenu");
//         toggleIcon.addEventListener("click", () => {
//             document.querySelector(".rightMenu").classList.toggle("active");
//         });
//     }, []);

//     const searchHandler = (event) => {
//         setData(event.target.value)
//     }

//     const [login, setLogin] = React.useState(false);

//     const handleClickLoginOpen = () => {
//         setLogin(true);
//     };

//     const handleLoginClose = () => {
//         setLogin(false);
//     };

//     const [signUp, setSignUp] = React.useState(false);

//     const handleClickSignUpOpen = () => {
//         setSignUp(true);
//         setLogin(false);
//     };

//     const handleSignUpClose = () => {
//         setSignUp(false);
//     };
    
    

//     return (
//         <>
//             <header>
//                 <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/i1.png?alt=media&token=f277f93e-ffbd-46c8-8366-8bd87080c210"
//                     alt="Logo"
//                     className="logo" />

//                 <div className="inputBox">
//                     <SearchRounded className="searchIcon" />
//                     <input type="text" placeholder="Search" onChange={searchHandler} />
//                     {/* <button onClick={s_ClickHandler}><SearchRounded className="searchIcon" /></button> */}
//                 </div>

//                 <div className="shoppingCart">
//                     <ShoppingCartRounded className="cart" />
//                     <div className="cart_content" >
//                         <p className="cart" >{cartID ? cartID.length : 0}</p>
//                     </div>
//                 </div>
//                 <button className="login" variant="outlined" onClick={handleClickLoginOpen} >
//                     <div className="profileContainer">
//                         <div className="imgBox">
//                             <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Admin.jpeg?alt=media&token=3601eedf-b4a0-4112-a447-107243813434"
//                                 alt="UserPhoto" />
//                         </div>
//                         {/* <h2 className="username">{currentUser ? currentUser?.email : "userName"}</h2> */}
//                         <h2 className="username">{currentUser?.email}</h2>
//                     </div>
//                 </button>
//                 <div className="logout" >
//                     <LogoutIcon />
//                 </div>

//                 <div className="toggleMenu">
//                     <BarChartIcon className="toggleIcon" onClick={() => setCartPage()} />
//                 </div>
//             </header>



//             {/* Login Page */}
//             <Dialog
//                 open={login}
//                 onClose={handleLoginClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <Login />
//                 {/* <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         <body className="body">
//                             <div class="center">
//                                 <h1>Login</h1>

//                                 <div class="txt_field">
//                                     <input type="text"
//                                         name="email"
//                                         value={userEmail}
//                                         onChange={(event) => setUserEmail(event.target.value)}
//                                     />
//                                     <span></span>
//                                     <label>Email Id</label>
//                                 </div>
//                                 <div class="txt_field">
//                                     <input type="password"
//                                         name="password"
//                                         value={userPassword}
//                                         onChange={(event) => setUserPassword(event.target.value)}
//                                     />
//                                     <span></span>
//                                     <label>Password</label>
//                                 </div>

//                                 <Button className="submit" onClick={handleLoginClose}>Submit</Button>
                                
//                                 <Button className="register" onClick={handleClickSignUpOpen} autoFocus>
//                                     Register Your Self
//                                 </Button>
//                             </div>
//                         </body>
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                 </DialogActions> */}
//             </Dialog>



//             {/* SignUp */}

//             <Dialog
//                 open={signUp}
//                 onClose={handleSignUpClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         <body className="body">
//                             <div class="center">
//                                 <h1>Sign Up Page</h1>



//                                 <div class="txt_field">
//                                     <input type="text" />
//                                     <span></span>
//                                     <label>Username</label>
//                                 </div>

//                                 <div class="txt_field">
//                                     <input type="text" />
//                                     <span></span>
//                                     <label>Email Id</label>
//                                 </div>

//                                 <div class="txt_field">
//                                     <input type="password" />
//                                     <span></span>
//                                     <label>Password</label>
//                                 </div>

//                                 <Button className="submit" onClick={handleSignUpClose}>Submit</Button>
//                             </div>
//                         </body>
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                 </DialogActions>
//             </Dialog>


//         </>
//     )
// }

// export default Header;