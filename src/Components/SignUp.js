import React, { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, signup, useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import SignUp from "./SignUp";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { login } from "../Store_Redux/Firebase/FirebaseConfi";
import Button from '@mui/material/Button';
import axios from "axios";

const SignUpModel = ({handleSignUpClose, setSignUp}) => {

    const [post, setPost] = useState()
    const [userOtherDetail,setUserOtherDetail] = useState({
        mobileNo: "",
        address: "",
        country: "",
        city: "",
        pincode: "",

    })
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com/user.json"

    const handleSignup = async () => {
        try {
            axios.post(baseURL, {
                username: userName,
                email: userEmail,
                mobileNo: userOtherDetail.mobileNo,
                address: userOtherDetail.address,
                country: userOtherDetail.country,
                city: userOtherDetail.city,
                pincode: userOtherDetail.pincode,
            }).then((response) => {
                setPost(response.data);
                console.log("userName",response.data)
            })

            await signup(userEmail, userPassword);
        } catch(error) {
            console.log("error",error)
        }
        logout();
        setSignUp(false)
        // handleSignUpClose={handleSignUpClose}
    }

    // const setOtherDetail = (e) => {
    //     const {name,value} = e.target;
    //     setUserOtherDetail((oldDetail) => {
    //         return{
    //         ...oldDetail,
    //         [name]: value,
    //     }
    //     })
    //     console.log('userOtherDetail', userOtherDetail)
    // }

    const setOtherDetail = (event) => {
        console.log("called",event.target.value)
        const { name, value } = event.target;
        console.log("name",name,value,"value")
        setUserOtherDetail((oldDetail) => {
          return {
            ...oldDetail,
            [name]: value,
          }
        })
      }    
    return(
        <>
              <DialogContent
              onClose={handleSignUpClose}
              >
                    <DialogContentText id="alert-dialog-description">
                        <body className="body">
                            <div className="center">
                                <h1>Sign Up Page</h1>

                                <div className="s_txt_field">
                                    <label className="s_label">Username :</label>
                                    <input type="text"
                                    className="s_input"
                                    value={userName} 
                                    onChange={(event) => setUserName(event.target.value)}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Email Id :</label>
                                    <input type="text"
                                    className="s_input"
                                     value={userEmail}
                                     onChange={(event) => setUserEmail(event.target.value)}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Mobile No :</label>
                                    <input type="text"
                                    className="s_input"
                                    name="mobileNo"
                                    value={userOtherDetail.mobileNo}
                                    onChange={setOtherDetail}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Address :</label>
                                    <input type="text"
                                    className="s_input"
                                    name="address"
                                    value={userOtherDetail.address}
                                    onChange={setOtherDetail}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Country :</label>
                                    <input type="text"
                                    className="s_input"
                                    name="country"
                                    value={userOtherDetail.country}
                                    onChange={setOtherDetail}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">City :</label>
                                    <input type="text"
                                    className="s_input"
                                    name="city"
                                    value={userOtherDetail.city}
                                    onChange={setOtherDetail}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Pin-Code :</label>
                                    <input type="number"
                                    className="s_input"
                                    name="pincode"
                                    value={userOtherDetail.pincode}
                                    onChange={setOtherDetail}
                                    />
                                </div>

                                <div className="s_txt_field">
                                    <label className="s_label">Password :</label>
                                    <input type="password"
                                    className="s_input"
                                    value={userPassword}
                                    onChange={(event) => setUserPassword(event.target.value)}
                                    />
                                </div>

                                <Button className="submit" onClick={handleSignup}>Submit</Button>
                            </div>
                        </body>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>
        </>
    )
}

export default SignUpModel