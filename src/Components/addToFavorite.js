import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../Data/Data";
import { AddFavorite } from "../Store_Redux/Action";
import FavoriteItems from "./favoriteItems";
import Header from "./Header";

const AddToFavoirte = () => {
    const [filterData, setFilterData] = useState()
    const [iid, setId] = useState()
    const dispatch = useDispatch()
    const favoriteIDs = useSelector((state) => state.s_value?.favorite)
    const currentUserID = useSelector((state) => state.s_value?.currentUserID)
    const baseURL = "https://food-delivery-app-7ac80-default-rtdb.firebaseio.com"

    const removeItem = (id) => {
        setId(id)
        if (id) {
            if (favoriteIDs?.some((el) => el === id)) {
                for (let i = 0; i <= favoriteIDs?.length; i++) {
                    if (favoriteIDs[i] === id) {
                        favoriteIDs.splice(i, 1)
                    }
                }
            }
        }
        dispatch(AddFavorite(favoriteIDs))
        const url2 = `${baseURL}/user/${currentUserID}/favourite.json`;
        axios.put(url2, {
            favourite: favoriteIDs
        })
    }

    useEffect(() => {
        const favouriteItems = Items.filter((el) => favoriteIDs?.includes(el.id))
        setFilterData(favouriteItems)
    }, [favoriteIDs, iid])

    return (
        <>
            <Header />
            <div className="rightMenu">
                <h1 className="title">Favourite Items</h1>
                <div>
                    {
                        filterData?.map((el) => {
                            return (
                                <div key={el.id}>
                                    <FavoriteItems
                                        id={el.id}
                                        image={el.imgSrc}
                                        name={el.name}
                                        price={el.price}
                                        removeFav={removeItem}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
                <hr></hr>
                <button className="checkOut" onClick={() => dispatch(AddFavorite([]))}> Clear </button>
            </div>
        </>
    )
}

export default AddToFavoirte;