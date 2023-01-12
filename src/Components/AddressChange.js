import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { login } from "../Store_Redux/Firebase/FirebaseConfi";
import SignUpModel from "./SignUp";
    import axios from "axios";
import { useSelector } from "react-redux";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddressChange = ({handleClose}) => {

    const [userAddress, setUserAddress] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userPincode, setUserPincode] = useState("");

    const [allUserData, setAllUserData] = useState()
    const [dependency,setDependency] = useState(false)
    const userdetailID = useSelector((state) => state.s_value?.currentUserID)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"

    useEffect(() => {
        axios.get(`${baseURL}/user.json`).then((response) => {
            setAllUserData(response.data);
        });
        const url = `${baseURL}/user/${userdetailID}.json`;
        axios.get(url).then((response) => {
            // setAllUserData(response.data);
            console.log('response', response.data.address)
            setUserAddress(response.data.address)
            setUserCountry(response.data.country)
            setUserCity(response.data.city)
            setUserPincode(response.data.pincode)
        });
    }, [])

    const hanldeChange = async () => {
            // const url = `${baseURL}/user/-N6HU8v5R4_NRmnQWRzX.json`;
    
            const url = `${baseURL}/user/${userdetailID}.json`;
            console.log('url', url)
            axios.put(url, {
                ...allUserData[userdetailID],
                // array: updateData,
                // [updateKey]: updateData,
                address: userAddress,
                country: userCountry,
                city: userCity,
                pincode: userPincode,
            })
            toast.success('Address update Successfully',{position: toast.POSITION.TOP_CENTER, autoClose:1000})
            handleClose(false)
      }


    return(
        <>
               <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <body className="body">
                            <div className="center">
                                <h1>Address Change</h1>

                                <div className="s_txt_field">
                                    <label className="s_label">Address:</label>
                                    <input type="text"
                                    className="s_input"
                                        name="email"
                                        value={userAddress}
                                        onChange={(event) => setUserAddress(event.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="s_txt_field">
                                    <label className="s_label">Country:</label>
                                    <input type="text"
                                    className="s_input"
                                        name="password"
                                        value={userCountry}
                                        onChange={(event) => setUserCountry(event.target.value)}
                                    />
                                </div>
                                <div className="s_txt_field">
                                    <label className="s_label">City:</label>
                                    <input type="text"
                                    className="s_input"
                                        name="password"
                                        value={userCity}
                                        onChange={(event) => setUserCity(event.target.value)}
                                    />
                                </div>
                                <div className="s_txt_field">
                                    <label className="s_label">Pincode:</label>
                                    <input type="number"
                                    className="s_input"
                                        name="password"
                                        value={userPincode}
                                        onChange={(event) => setUserPincode(event.target.value)}
                                    />
                                </div>

                                <Button className="submit" onClick={hanldeChange} >Submit</Button>
                                
                            </div>
                        </body>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>


               
            <ToastContainer autoClose="1000" />
        </>
    )
}

export default AddressChange