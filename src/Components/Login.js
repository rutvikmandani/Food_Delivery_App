import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { login } from "../Store_Redux/Firebase/FirebaseConfi";
import SignUpModel from "./SignUp";
import { toast, ToastContainer } from "react-toastify";

const Login = ({setLogin, handleLogn}) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLogin = async () => {
        try {
          await login(userEmail, userPassword);
        } catch {
          toast.error("please Fill correct information",{position: toast.POSITION.TOP_CENTER, autoClose:1000})

        }
        toast.success('Login Successfully',{position: toast.POSITION.TOP_CENTER, autoClose:1000})
        handleLogn(false)
      }

    //   const handle = () => {
    //   }

      const [signUp, setSignUp] = React.useState(false);

          const handleClickSignUpOpen = () => {
              setSignUp(true);
            //   setLogin(false);
          };
      
          const handleSignUpClose = () => {
              setSignUp(false);
          };
      

    return(
        <>
               <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <body className="body">
                            <div className="center">
                                <h1>Login</h1>

                                <div className="s_txt_field">
                                    <label className="s_label">Email Id:</label>
                                    <input type="text"
                                    className="s_input"
                                        name="email"
                                        value={userEmail}
                                        onChange={(event) => setUserEmail(event.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="s_txt_field">
                                    <label className="s_label">Password:</label>
                                    <input type="password"
                                    className="s_input"
                                        name="password"
                                        value={userPassword}
                                        onChange={(event) => setUserPassword(event.target.value)}
                                    />
                                </div>

                                <Button className="submit" onClick={handleLogin} >Submit</Button>
                                <Button className="register" onClick={handleClickSignUpOpen} autoFocus>
                                    Register Your Self
                                </Button>
                            </div>
                        </body>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>


                <Dialog
                open={signUp}
                onClose={handleSignUpClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
              <SignUpModel handleSignUpClose={handleSignUpClose}
                  setSignUp={setSignUp}
              />
            </Dialog>
            <ToastContainer autoClose="1000" />
        </>
    )
}

export default Login