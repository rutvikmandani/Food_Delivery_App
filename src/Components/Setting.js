import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Store_Redux/Firebase/FirebaseConfi";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { CurrentUserID } from "../Store_Redux/Action";

const Setting = () => {
    const currentUser = useAuth();
    const dispatch = useDispatch()
    const [allUserDataArray, setAllUserDataArray] = useState([])
    const [allUserData, setAllUserData] = useState()
    const [allUserInsideData, setAllUserInsideData] = useState()
    const [updateData,setUpdateData] = useState()
    const [updateKey,setUpdateKey] = useState()
    const [dependency,setDependency] = useState(false)
    let userID = null
    let userName = null
    let userdetailID = null
    let detailObj = null
    let detail = null
    // const [detail,setDetail] = useState()
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"
    
    useEffect(() => {
        axios.get(`${baseURL}/user.json`).then((response) => {
            setAllUserData(response.data);
            console.log('response.data', response.data)
            setAllUserDataArray(Object.entries(response.data))
        });
        // axios.get(`${baseURL}/user/${userdetailID}/inSide.json`).then((response) => {
        //     setAllUserInsideData(response.data);
        // });
    }, [])

        if (allUserData) {
            detail = (Object?.entries(allUserData)).map((el) => {
                if (el[1].email === currentUser?.email) {
                    return userName = el[1]
                }
            })
            console.log('detail', detail)
            console.log('allUserData', allUserData)
        
            detailObj = detail[1]
            console.log('detailObj', detailObj)
            detail.map((el, index) => {
                if (el !== undefined) {
                    userID = index
                    console.log('userID', userID)
                }
            })
        }

        if (userID !== null) {
            allUserDataArray?.map((el, index) => {
                if (index === userID) {
                    return userdetailID = el[0]
                }
            })
            // console.log('allUserData', (Object.entries(allUserData).map((el) => console.log('el!!!', Object.entries(el[1])[3][1]))))
        }
        
        // dispatch(CurrentUserID(userdetailID))
        // console.log('userdetailIDSett', userdetailID)
    

    

    const updateHandler = () => {
        console.log('updateKey', updateKey)
        // const url = `${baseURL}/user/-N6HU8v5R4_NRmnQWRzX.json`;

        const url = `${baseURL}/user/${userdetailID}.json`;
        console.log('url', url)
        axios.put(url, {
            ...allUserData[userdetailID],
            // array: updateData,
            [updateKey]: updateData,
        })
        // const url2 = `${baseURL}/user/${userdetailID}/inSide.json`;
        // axios.put(url2, {
        //     // ...allUserInsideData[userdetailID],
        //     // ...allUserInsideData[userdetailID].inSide,
        //     // [updateKey]: updateData,
        //     // array: [1,2,3,4]
        //     fav: [1,2,3,4]
        // })
        setUpdateData("")
        setDependency(!dependency)
        console.log('dependency', dependency)
        // t()
    }


    useEffect(() => {
        console.log('called')
        axios.get(`${baseURL}/user.json`).then((response) => {
            console.log('response.data@@', response.data)
            setAllUserData(response.data);
            setAllUserDataArray(Object.entries(response.data))
        });
        axios.get(`${baseURL}/user/${userdetailID}/inSide.json`).then((response) => {
            setAllUserInsideData(response.data);
        });
    }, [dependency])

    const updateDataHandler = (object, value) => {
        setUpdateData(value)
        // console.log('detailObj', detailObj)
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                // console.log('object[key]', object[key])
                if (object[key] === value){
                    setUpdateKey(key)
                    // console.log('key', key)
                }
            }
        }
    }

    return (
        <>
            <div className="rightMenu">
                <h1 className="title"> User Data</h1>
                <hr></hr>
                
                <input type="text" value={updateData} 
                className="updateInput"
                onChange={(e) => setUpdateData(e.target.value)} placeholder="updata User Information"/>

                {/* <button onClick={data}>Click</button> */}
                {/* <button onClick={updateDataHandler}>Edit Information</button> */}

                {   detail ?
                    detail?.map((el) => {
                        return (
                            el !== undefined ?
                                <div className="userData">
                                    <table>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{el.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Username:</th>
                                            <td>{el.username}</td>
                                            <button className="edit" onClick={() => updateDataHandler(detailObj, el.username)}><EditIcon/></button>
                                        </tr>
                                        <tr>
                                            <th>MobileNo:</th>
                                            <td>{el.mobileNo}</td>
                                            {/* <button className="edit">Edit</button> */}
                                            <button className="edit" onClick={() => updateDataHandler(detailObj,el.mobileNo)}><EditIcon/></button>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td>{el.address}</td>
                                            <button className="edit" onClick={() => updateDataHandler(detailObj,el.address)}><EditIcon/></button>
                                        </tr>
                                        <tr>
                                            <th>Country:</th>
                                            <td>{el.country}</td>
                                            <button className="edit" onClick={() => updateDataHandler(detailObj,el.country)}><EditIcon/></button>
                                        </tr>
                                        <tr>
                                            <th>City:</th>
                                            <td>{el.city}</td>
                                            <button className="edit" onClick={() => updateDataHandler(detailObj,el.city)}><EditIcon/></button>
                                        </tr>
                                        <tr>
                                            <th>Pincode:</th>
                                            <td>{el.pincode}</td>
                                            <button className="edit" onClick={() => updateDataHandler(detailObj,el.pincode)}><EditIcon/></button>
                                        </tr>
                                    </table>
                                   
                                </div>
                                :
                                null
                        )
                    })
                    :
                    <h1 >Loading...</h1>
                }
                <button className="updateButton" onClick={updateHandler}>Update</button>

            </div>
        </>
    )
}

export default Setting