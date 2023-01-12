import './App.css';
import BannerName from './Components/BannerName';
import Header from './Components/Header';
import { useEffect } from 'react';
import { MenuItems, Items } from './Data/Data';
import { useState } from 'react';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import ItemCard from './Components/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuth } from './Store_Redux/Firebase/FirebaseConfi';
import { fetchUserData } from './Store_Redux/Action';

const Home = () => {
    const [search, setSearch] = useState()
    const [isMainData, setMainData] = useState(Items);

    useEffect(() => {
        const menuCard = document
            .querySelector(".mySwiper")
            .querySelectorAll(".rowMenuCard");
        function setMenuCardActive() {
            menuCard.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
    }, [])

    const setDataa = (itemId) => {
        setSearch(itemId)
        // console.log("callIF###")
        const filteredData = Items.filter((element) => {
            return Object.values(element).join('').toLowerCase().includes(search.toLowerCase())
        })
        setMainData(filteredData)
    }

    const setCategoryDataa = (itemId) => {
        setMainData(Items.filter((element) => element.itemId === itemId))
    }



    return (
        <>
            <div className='page'>
                <Header setData={setDataa} />
                {/* Page */}

                {
                    <main>
                        <div className='container'>
                            <div className='mainContainer'>
                                <div className='banner'>
                                    <BannerName name={"Rutvik"} discount={"10%"} more={"#"} />
                                    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-7ac80.appspot.com/o/delivery.png?alt=media&token=d4d4e079-5794-44d8-9167-593a22b5b95b"
                                        alt="dummy"
                                        className='deliveryPic' />
                                </div>
                                <div className='dishContainer'>
                                    <div className='menuCard'>
                                        <SubMenuContainer />
                                    </div>
                                    <Swiper

                                        slidesPerView={3}
                                        spaceBetween={100}
                                        slidesPerGroup={1}
                                        loop={true}
                                        loopFillGroupWithBlank={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        breakpoints={{
                                            // when window width is >= 640px
                                            100: {
                                                width: 375,
                                                slidesPerView: 1,
                                            },
                                            640: {
                                                // width: 640,
                                                slidesPerView: 1,
                                            },
                                            // when window width is >= 768px
                                            768: {
                                                // width: 768,
                                                slidesPerView: 2,
                                                // spaceBetween: 10
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 30
                                            },
                                            1440: {
                                                slidesPerView: 3,
                                                spaceBetween: 10
                                            }
                                        }}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <div className='rowContainer'>
                                            {
                                                MenuItems?.map((data) => {
                                                    return (
                                                        <SwiperSlide key={data.id} >
                                                            <div key={data.id}
                                                                onClick={() =>
                                                                    setCategoryDataa(data.itemId)}
                                                            >
                                                                <MenuCard imgSrc={data.imgSrc}
                                                                    name={data.name}
                                                                    isActive={data.id === "1" ? true : false}
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Swiper>

                                    <div className='dishItemContainer'>
                                        {
                                            isMainData?.map((el) => {
                                                return (
                                                    <div key={el.id}>
                                                        <ItemCard
                                                            favorite={el.favorite}
                                                            itemId={el.id}
                                                            imgSrc={el.imgSrc}
                                                            name={el.name}
                                                            price={el.price}
                                                            ratings={el.ratings}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                }
            </div>
        </>
    );
}

export default Home;
