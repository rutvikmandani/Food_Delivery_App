import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../../Data/Data";
import { FavItems, SetCart } from "../../Store_Redux/Action";

const ItemCard = ({ itemId, imgSrc, name, price, ratings }) => {
    const dispatch = useDispatch()
    const [isCart, setIsCart] = useState(null)
    const cartID = useSelector((state) => state.s_value?.cart)
    const favoriteIDs = useSelector((state) => state.s_value?.favorite)
    const [fav,setFav] = useState(false)
    const favoriteItems = useSelector((state) => state.s_value?.fItems)
    console.log("favItems", favoriteItems)
    console.log("favoriteIDs@@", favoriteIDs)

    // useEffect(() => {
    //     // debugger
    //     if (isCart) {
    //         cartID?.push(isCart);
    //         dispatch(SetCart(cartID));
    //     }
    // }, [isCart])


    const cartPage = (t) => {
        if(t){
            cartID?.push(t);
            dispatch(SetCart(cartID));
        }
    }





    // const [favorites, setFavorites] = useState(null);

    // useEffect(() => {
    //     console.log("called")
    //     // setFavorites(Items)
    //     dispatch(FavItems(Items))
    // }, [])

    // useEffect(() => {
    //     console.log("fav@@", favorites);
    //     //   }, [favorites]);

    //     // const menuCard = document
    //     //     .querySelector(".itemCard")
    //     //     .querySelectorAll(".isFavourite");
    //     // function setMenuCardActive() {
    //     //     menuCard.forEach((n) => n.classList.remove("active"));
    //     //     this.classList.add("active");
    //     // }
    //     // menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));


    //     favoriteItems?.map((el)=> { 
    //         return  el.Favorite === true ?
    //         console.log("NotFav",el) : ""
    //     })
    // }, [handleFavorite])



    // const handleFavorite = (id) => {
    //     console.log('id', id)
    //     const newFavorites = favoriteItems.map(item => {
    //         // favorites.map((el) => console.log("first",el.id ,id, "id"))  
    //         return item.id === id ? { ...item, favorite: !item.favorite } : item;
    //     });
    //     dispatch(FavItems(newFavorites))
    //     // setFavorites(newFavorites);
    // }

    // useEffect(() => {
    //     favoriteItems?.map((el)=> el.favorite === true ?
    //         console.log("NotFav",el) : ""
    //     )
    // }, [handleFavorite])


    const setFavorite = (id) => {
        setFav(!fav)
        if (id) {
            console.log(id)
            favoriteIDs?.some((el) => console.log("first", el, id))
            if (favoriteIDs?.some((el) => el === id)) {
                console.log("called")
                for (let i = 0; i <= favoriteIDs?.length; i++) {
                    // console.log("first",addFavorite[i],isFavourite,"isFavourite")
                    if (favoriteIDs[i] === id) {
                        favoriteIDs.splice(i, 1)
                    }
                }
            } else {
                favoriteIDs.push(id);
            }
        }
        console.log("addFavorite", favoriteIDs)
    }

    // const isFavourite = (id) => {
    //     console.log("called")
    //     // Items?.map((el) => console.log("el.id",el.id,id,"id"))
    //     Items?.map((el) => el.id === id
    //     ?
    //     {
    //         ...el,
    //         favourite: (!el.favourite)
    //     }
    //     // console.log("@!true")
    //     :
    //     el
    //     )
    //     console.log("items",Items)
    // }


    // const setCartHandler = (id) => {
    //     if(setCart.some((el) => el === id)){
    //         console.log("same")
    //         for(var i = 0; i < setCart.length; i++){
    //             if(setCart[i] === id ){
    //                 setCart.splice(i,1)
    //             }
    //         }

    //         }else{
    //             setCart.push(id)
    //             dispatch(SetCart(setCart))
    //         }
    //     console.log("id ",id)
    //     console.log("cart",setCart)
    //     console.log("removeCart",setCart)
    // }

    return (
        <>
            <div className="itemCard">
                {/* <div className="isFavourite" */}
                {/* onClick={() =>setIsFavourite(!isFavourite)} */}
                {/* <div className={`isFavourite ${(addFavorite.some((el) => el === itemId)) ? (console.log("same")) : (console.log("!same"))}`} */}
                {/* <div className={`isFavourite ${(favoriteIDs?.some((el) => el === itemId)) ? "active" : ""}`} */}
                {/* <div className={`isFavourite ${(favorites?.map((el) => el.favorite === true)) ? "active" : ""}`} */}
                {/* <div className="isFavourite" */}
                {/* <div className={`isFavourite ${favoriteItems?.map((el) => el.favorite === true) ? console.log("@@") : console.log("!@@") }`}   */}
                {/* <div className={`isFavourite ${(favoriteItems?.map((el) => console.log("el.favorite",el.favorite,true,"true",el.favorite === false)))}`} */}
                {/* {console.log("@@", `isFavourite ${(favoriteItems?.map((el) => {
                    console.log("el", el.favorite); if (el.favorite === true) {
                        console.log("if called", el.favorite)
                        return ""
                    } else {
                        console.log("else called", el.favorite)
                        return ""
                    }
                }))}`)} */}
                {/* <div className={`isFavourite ${(favoriteItems?.map((el) => el.favorite === true)) ? "active" : ""}`} */}
                {/* <div className={`isFavourite ${(favoriteItems?.map((el) => {
                    if (el.favorite === true) {
                        console.log("@@if")
                        return "active"
                    } else {
                        console.log("@@else")
                        return ""
                    }
                }))}`} */}
                {/* onClick={() => handleFavorite(itemId)}
                // onClick={() => setFavorite(itemId)}
                > */}

                {/* {useEffect(()=>{
                    <div className={`isFavourite ${(favoriteIDs?.some((el) => el === itemId)) ? "active" : ""}`}
                    onClick={() => setFavorite(itemId)}>
                            <Favorite />
                </div>
                },[favoriteIDs])
                } */}
                <div className={`isFavourite ${(favoriteIDs?.some((el) => el === itemId) || fav === true) ? "active" : ""}`}
                    onClick={() => setFavorite(itemId)}>
                            <Favorite />
                </div>
                <div className="imgBox">
                    <img src={imgSrc} alt="" className="itemImg" />
                </div>
                <div className="itemContent">
                    <h3 className="itemName"> {name}</h3>
                    <div className="bottom">
                        <div className="rating">
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <i><StarRounded /></i>
                            <h3 className="price"><span>$</span>{price} </h3>
                        </div>
                        {/* <i className="addToCart" onClick={()=>setCartHandler(itemId) }> */}
                        {/* <i className="addToCart" onClick={() => setIsCart(Items.find((el) => el.id === itemId))}> */}
                        <i className="addToCart" onClick={() => cartPage((Items.find((el) => el.id === itemId)))}>
                            <AddRounded />
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard