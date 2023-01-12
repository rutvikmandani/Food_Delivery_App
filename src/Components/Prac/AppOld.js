// // import './App.css';
// import BannerName from '../BannerName';
// import Header from '../Header';
// import MenuContainer from '../MenuContainer';
// import { useEffect } from 'react';
// import { MenuItems, Items } from '../../Data/Data';
// import { useState } from 'react';
// import {
//     AccountBalanceWalletRounded,
//     Chat,
//     Favorite,
//     Home,
//     Settings,
//     SummarizeRounded,
// } from "@mui/icons-material";
// import SubMenuContainer from '../SubMenuContainer';
// import MenuCard from '../MenuCard';
// import ItemCard from '../ItemCard';
// import DebitCard from '../DebitCard';
// import { useSelector } from 'react-redux';
// import CartItems from '../CartItems';
// import { Pagination, Navigation } from "swiper";
// import "swiper/css/bundle";
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';

// const AppOld = () => {

//     const searchValue = useSelector((state) => state.s_value)
//     console.log("searchValue", searchValue?.cart[0])

    
//     const [cartPage, setCartPage] = useState(true)

//     const [isMainData, setMainData] = useState(
//         Items
//         // Items.filter((element) => element.itemId === "rise01")
//     );
//     console.log("isMainData", isMainData)

//     const cartID = useSelector((state) => state.s_value?.cart)
//     // { console.log("CARTID@", cartID) }

//     const total = cartID?.map((price) => Number(price.price * price.quantity))
//     let cTotal = total.length && total?.reduce((total, price) => total + price)

//     useEffect(() => {

//         const menuLi = document.querySelectorAll("#menu li");
//         function setMenuActive() {
//             menuLi.forEach((n) => n.classList.remove("active"));
//             this.classList.add("active");
//         }
//         menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

//         /// category 
//         const menuCard = document
//             .querySelector(".mySwiper")
//             .querySelectorAll(".rowMenuCard");
//         function setMenuCardActive() {
//             menuCard.forEach((n) => n.classList.remove("active"));
//             this.classList.add("active");
//         }
//         menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));

//         ///sideMenu
//         // const sideMenu = document.querySelectorAll(".rightMenu")
//         // const toggleMenu = document.querySelectorAll(".toggleMenu")
//         // const mainContainer = document.querySelectorAll(".mainContainer")

//         // function setMenubarActive() {
//         //     console.log("clickToggle@@")
//         //     sideMenu.forEach((n) => n.classList.add("active"));
//         //     // this.classList.remove("active");
//         // }

//         // function setMainContainerActive() {
//         //     // console.log("clickRemoveToggle@@")
//         //     sideMenu.forEach((n) => n.classList.remove("active"));
//         //     // this.classList.remove("active");
//         // }

//         // toggleMenu.forEach((n) => n.addEventListener("click", setMenubarActive));
//         // mainContainer.forEach((n) => n.addEventListener("click", setMainContainerActive));
//     }, [])

//     const [search, setSearch] = useState()

//     const setDataa = (itemId) => {
//         setSearch(itemId)
//         console.log("callIF###")
//         const filteredData = Items.filter((element) => {
//             return Object.values(element).join('').toLowerCase().includes(search.toLowerCase())
//         })
//         setMainData(filteredData)
//     }

//     const setDataa2 = (itemId) => {
//         console.log("call####")
//         setMainData(Items.filter((element) => element.itemId === itemId))
//     }

//     return (
//         <>
//             {/* Header Section */}
//             <div className='page'>
//                 <Header
//                     setData={setDataa}
//                 // setCartPage={setCartPage(false)}
//                 />

//                 {/* Page */}
//                 {
//                     cartPage ?
//                         <main>
//                             <div className='container'>
//                                 {/* <div className="rightMenu">
//                             <div className="debitCardContainer">
//                                 <div className="debitCard">
//                                     <DebitCard />
//                                 </div>
//                             </div>
//                             {
//                                 (cartID === undefined) ? console.log("false") :
//                                     cartID?.map((el) => {
//                                         return (
//                                         <div key={el.id}>
//                                             <p>{el.id}</p>
//                                             <img src={el.imgSrc} />
//                                             <p>{el.name}</p>
//                                             <p>{el.price}</p>
//                                         </div>)
//                                     })
//                             }
//                         </div> */}

//                                 <div className='mainContainer'>
//                                     <div className='banner'>
//                                         <BannerName name={"Rutvik"} discount={"10%"} more={"#"} />
//                                         <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/delivery.png?alt=media&token=d4d4e079-5794-44d8-9167-593a22b5b95b"
//                                             alt="dummy"
//                                             className='deliveryPic' />
//                                     </div>
//                                     <div className='dishContainer'>
//                                         <div className='menuCard'>
//                                             <SubMenuContainer />
//                                         </div>
//                                         <Swiper
//                                             slidesPerView={3}
//                                             spaceBetween={30}
//                                             slidesPerGroup={3}
//                                             loop={true}
//                                             loopFillGroupWithBlank={true}
//                                             pagination={{
//                                                 clickable: true,
//                                             }}
//                                             navigation={true}
//                                             modules={[Pagination, Navigation]}
//                                             className="mySwiper"
//                                         >
//                                             <div className='rowContainer'>
//                                                 {
//                                                     MenuItems?.map((data) => {
//                                                         return (
//                                                             <SwiperSlide >
//                                                                 <div key={data.id}
//                                                                     onClick={() =>
//                                                                         setDataa2(data.itemId)}
//                                                                 >
//                                                                     <MenuCard imgSrc={data.imgSrc}
//                                                                         name={data.name}
//                                                                         isActive={data.id === "1" ? true : false}
//                                                                     />
//                                                                 </div>
//                                                             </SwiperSlide>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         </Swiper>

//                                         <div className='dishItemContainer'>
//                                             {
//                                                 isMainData?.map((el) => {
//                                                     return (
//                                                         <div key={el.id}>
//                                                             <ItemCard
//                                                                 itemId={el.id}
//                                                                 imgSrc={el.imgSrc}
//                                                                 name={el.name}
//                                                                 price={el.price}
//                                                                 ratings={el.ratings}
//                                                             />
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>
//                         :
//                         <div className="rightMenu">
//                             <div className="debitCardContainer">
//                                 <div className="debitCard">
//                                     <DebitCard />
//                                 </div>
//                             </div>
//                             <div>
//                                 {
//                                     cartID?.map((el) => {
//                                         return (
//                                             <div key={el.id}>
//                                                 <CartItems
//                                                     id={el.id}
//                                                     image={el.imgSrc}
//                                                     name={el.name}
//                                                     price={el.price}
//                                                     qty={el.quantity}
//                                                 />
//                                             </div>)
//                                     })
//                                 }
//                             </div>

//                             <hr></hr>
//                             <div className="cartCheckOutContainer">
//                                 <h1 className="h1">Total</h1>
//                                 {/* <p className='cTotal'>{cTotal = }</p> */}
//                                 <h1> $ {cTotal ? cTotal : 0} </h1>
//                             </div>

//                             <button className="checkOut"> Check Out </button>

//                         </div>
//                 }


//                 {/* Nav Menu */}
//                 {/* <div className='menu'> */}
//                 <div className='leftMenu'>
//                     <ul className='navbar' id='menu'>
//                         <MenuContainer icon={<Home onClick={() => setCartPage(true)} />} isHome />
//                         {/* <MenuContainer icon={<Home />} onClick={() => Navigate("/")} isHome /> */}
//                         <MenuContainer icon={<Chat onClick={() => setCartPage(false)} />} />
//                         {/* <MenuContainer icon={<Chat onClick={() => Navigate("/Cart")}/>} /> */}
//                         <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
//                         <MenuContainer link={"#"} icon={<Favorite />} />
//                         <MenuContainer link={"#"} icon={<SummarizeRounded />} />
//                         <MenuContainer link={"#"} icon={<Settings />} />
//                         <div className='indicator'></div>
//                     </ul>
//                 </div>
//             </div>

//             {/* Right Menu */}

//             {/* LOGIN MENU */}

//         </>
//     );
// }

// export default AppOld;
