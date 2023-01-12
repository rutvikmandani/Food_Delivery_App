// import './App.css';
// import BannerName from './Components/BannerName';
// import Header from './Components/Header';
// import MenuContainer from './Components/ManuContainer';
// import { useEffect } from 'react';
// import { MenuItems, Items } from './Data/Data';
// import { useState } from 'react';
// import {
//   AccountBalanceWalletRounded,
//   Chat,
//   CleaningServices,
//   EightMpSharp,
//   Favorite,
//   Home,
//   HomeRounded,
//   Settings,
//   SummarizeRounded,
// } from "@mui/icons-material";
// import SubMenuContainer from './Components/SubMenuContainer';
// import MenuCard from './Components/MenuCard';
// import ItemCard from './Components/ItemCard';

// const Main = () => {

//   const [isMainData, setMainData] = useState(
//     Items.filter((element) => element.itemId === "rise01")
//   );

//   useEffect(() => {
//     const menuLi = document.querySelectorAll("#menu li");

//     function setMenuActive() {
//       menuLi.forEach((n) => n.classList.remove("active"));
//       this.classList.add("active");
//     }

//     menuLi.forEach((n) => n.addEventListener("click", setMenuActive));


//     /// category 
//     const menuCard = document
//       .querySelector(".rowContainer")
//       .querySelectorAll(".rowMenuCard");

//     function setMenuCardActive() {
//       menuCard.forEach((n) => n.classList.remove("active"));
//       this.classList.add("active");
//     }

//     menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
//   }, [])

//   const setData = (itemId) => {
//     setMainData(Items.filter((element) => element.itemId === itemId));
//   };

//   console.log("menuItem", MenuItems?.map((el) => el.imgSrc))
//   return (
//     <>
//       {/* Header Section */}
//       <div className='page'>
//         <Header />

//         {/* Page */}
//         <main>


//           <div className='container'>
//             <div className='mainContainer'>
//               <div className='banner'>
//                 <BannerName name={"Rutvik"} discount={"10%"} more={"#"} />
//                 <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/delivery.png?alt=media&token=d4d4e079-5794-44d8-9167-593a22b5b95b"
//                   alt="dummy"
//                   className='deliveryPic' />
//               </div>
//               <div className='dishContainer'>
//                 <div className='menuCard'>
//                   <SubMenuContainer />
//                 </div>

//                 <div className='rowContainer'>
//                   {
//                     MenuItems?.map((data) => {
//                       return (
//                         <div key={data.id} onClick={()=>setData(data.itemId)}>
//                       <MenuCard imgSrc={data.imgSrc}
//                         name={data.name}
//                         isActive={data.id === "1" ? true : false}
//                          />
//                          </div>
//                       )
//                     })
//                   }
//                 </div> 
//                 <div className='dishItemContainer'>
//                 {
//                   isMainData?.map((el) => {
//                     return (
//                       <div key={el.id}>
//                       <ItemCard 
//                         itemId={el.id}
//                         imgSrc={el.imgSrc}
//                         name={el.name}
//                         price={el.price}
//                         ratings={el.ratings}
//                       />    
//                       </div>
//                     )
//                   })
//                 }
//                   {/* <ItemCard 
//                     itemId=""
//                     imgSrc="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Fruits.png?alt=media&token=1c014449-6457-472d-a32c-28de1cae2815"
//                     name="Cherry"
//                     price="45"
//                     ratings="5"
//                   />
//                   <ItemCard 
//                     itemId=""
//                     imgSrc="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Fruits.png?alt=media&token=1c014449-6457-472d-a32c-28de1cae2815"
//                     name="Cherry"
//                     price="45"
//                     ratings="5"
//                   /><ItemCard 
//                     itemId=""
//                     imgSrc="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Fruits.png?alt=media&token=1c014449-6457-472d-a32c-28de1cae2815"
//                     name="Cherry"
//                     price="45"
//                     ratings="5"
//                   /><ItemCard 
//                     itemId=""
//                     imgSrc="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/Fruits.png?alt=media&token=1c014449-6457-472d-a32c-28de1cae2815"
//                     name="Cherry"
//                     price="45"
//                     ratings="5"
//                   /> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>



//         {/* Nav Menu */}
//         {/* <div className='menu'> */}
//         <div className='leftMenu'>
//           <ul className='navbar' id='menu'>
//             <MenuContainer link={"#"} icon={<Home />} isHome />
//             <MenuContainer link={"#"} icon={<Chat />} />
//             <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
//             <MenuContainer link={"#"} icon={<Favorite />} />
//             <MenuContainer link={"#"} icon={<SummarizeRounded />} />
//             <MenuContainer link={"#"} icon={<Settings />} />
//             <div className='indicator'></div>
//           </ul>
//         </div>
//       </div>

//     </>
//   );
// }

// export default Main;