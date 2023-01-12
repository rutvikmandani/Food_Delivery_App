import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import CheckOutItem from "./CheckOutItem";
import DebitCard from "./DebitCard";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useElements, CardElement, PaymentElement, useStripe, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import axios from "axios";
import { CheckOutData, fetchUserData } from "../Store_Redux/Action";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressChange from "./AddressChange";
import Dialog from '@mui/material/Dialog';
import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
// toast.configure()

const CheckOutPage = () => {

    const checkoutData = useSelector((state) => state.s_value?.checkout)
    console.log('checkoutData', checkoutData)
    const userinformation = useSelector((state) => state.s_value?.userinformation)
    console.log('userinformation', userinformation)
    const cartID = useSelector((state) => state.s_value?.cart)
    const total = cartID?.map((price) => Number(price.price * price.quantity))
    const TotalBillAmount = total?.length && total?.reduce((total, price) => total + price)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useAuth();
    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"

    const stripe = useStripe();
    const elements = useElements();

    // const handleSubmit = (stripe, elements) => async () => {
    const paySubmit = (stripe, elements) => async () => {
        const cardElement = elements.getElement(CardNumberElement);
        console.log('cardElement', cardElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
       
            
        if (error) {
            console.log('[error]', error);
            toast.error(error.message,{position: toast.POSITION.TOP_CENTER, autoClose:1000})
            
        } else {
            console.log('[PaymentMethod]', paymentMethod);

            const url2 = `${baseURL}/user/${currentUserID}/checkout.json`;
            let y = await axios.get(url2)
            // console.log('y', y.data.checkout)
            if (y.data !== null) {
                console.log("called")
                axios.put(url2, {
                    checkout: [...y.data.checkout,{ checkoutData, paymentMethod, TotalBillAmount }]
                })
            }
            else {
                axios.put(url2, {
                    // ...userinformation,
                    checkout: [{ checkoutData, paymentMethod, TotalBillAmount }]
                })
            }
            toast.success('Order places Successfully',{position: toast.POSITION.TOP_CENTER, autoClose:1000})
            setInterval(() => {
                dispatch(CheckOutData([]))
                navigate("/")
            }, 5000);

        }
    };

    const [login, setLogin] = React.useState(false);
    // 
    const handleClickLoginOpen = (value) => {
        if(value === "false") return
        setLogin(true);
    };

    const handleLoginClose = () => {
        setLogin(false);
        dispatch(fetchUserData(currentUser?.email))
    };

    return (
        <>
            <div className="rightMenu">
                <h1 className="title">Shopping Cart</h1>
                {/*    <div className="debitCardContainer">
                    <div className="debitCard">
                        <DebitCard />
                    </div>
                </div>

                <div>
                    <h3>{userinformation.username}</h3>
                </div>
                 */}

                <div className="checkoutContainer">
                    <div className="checkOutDeatil">


                        <div className="boxContainer">
                            <div className="loginBox">
                                <h1><VpnKeyIcon /></h1>
                                <h2 className="loginTitle"> Username </h2>
                            </div>
                            <div className="loginBox1">
                                <h4 >name: {userinformation.username}</h4>
                            </div>
                            <button className="editData"  onClick={() => handleClickLoginOpen("false")} >Change</button>
                        </div>

                        <div className="boxContainer">
                            <div className="loginBox">
                                <h1><AddLocationAltIcon /></h1>
                                <h3 className="address"> Shipping Address </h3>
                            </div>
                            <div className="loginBox">
                                <h4 className="h4">{userinformation.address} {userinformation.city} {userinformation.country} {userinformation.pincode} </h4>
                            </div>
                            <button className="editAddress"  onClick={handleClickLoginOpen} >Change</button>
                        </div>

                        <div className="paymentTitle">
                            <h2>Payment Mode</h2>
                        </div>
                        <div className="cardTitle">
                            <h1><CreditCardIcon /></h1>
                            <h3> Debit/Credit Card</h3>
                        </div>
                        <div className="cardDetail">
                            <div className="cardNumber">
                                <label> Enter Card Number *</label>
                                <CardNumberElement className="input" />
                                {/* <CardElement className="input" /> */}
                                {/* <PaymentElement className="input"/> */}
                                {/* <input type="number" /> */}
                            </div>
                            <div className="cardother1">
                                <div className="cardother">
                                    <lable>Valid Date</lable>
                                    <CardExpiryElement className="input" />
                                    {/* <input type="date" /> */}
                                </div>
                                <div className="cardother">
                                    <lable>CVV</lable>
                                    <CardCvcElement className="input" />
                                    {/* <input type="number" /> */}
                                </div>
                                <div>
                                { checkoutData.length > 0 &&
                                    <button className="pay" onClick={paySubmit(stripe, elements)}>Pay ${TotalBillAmount} </button>
                                }
                                </div>
                            </div>
                            <p> Your card detail would securely saved for faster payment*</p>
                        </div>
                    </div>
                    <div className="order">
                        <h2>Your Order</h2>
                        <hr className="hr"></hr>
                        {
                            checkoutData && checkoutData.map((el) => {
                                return (
                                    <div key={el.id}>
                                        <CheckOutItem
                                            id={el.id}
                                            image={el.imgSrc}
                                            name={el.name}
                                            price={el.price}
                                            qty={el.quantity}
                                        />
                                    </div>

                                )
                            })
                        }
                        <hr className="hr"></hr>
                        {
                            checkoutData.length > 0 &&
                        <h3 className="totalpay" onClick={paySubmit(stripe, elements)}>Total ${TotalBillAmount} </h3>
                        }
                        {/* <h1>bhbh bjbn</h1> */}
                    </div>
                </div>

                <Dialog
                open={login}
                onClose={handleLoginClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <AddressChange
                    handleClose={handleLoginClose}
                />
            </Dialog>

            </div>
            <ToastContainer autoClose="1000" />
        </>
    )
}

export default CheckOutPage;