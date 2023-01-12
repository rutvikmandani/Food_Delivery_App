import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mainslider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 1,
        },
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="bg-color1">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="https://static.wixstatic.com/media/2c0034_5916d66c114c4a3fb055fd0fff15f402~mv2.png"
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Valencia Orange</h1>
              <p className="paragraph mb-2">
                Valencia Orange is a juice which is really a wonderful and will give you a Orange taste and nothing else.
              </p>
              <a href="" className="btn btn-black align-self-md-start">
                Shop
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color2">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="https://static.wixstatic.com/media/2c0034_ecb14379435e405996be56ad460df8d0~mv2.png"
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Lean Green</h1>
              <p className="paragraph mb-2">
                Lean Green is a juice which is really a wonderful and will give you a Orange taste and nothing else.
              </p>
              <a href="" className="btn btn-black align-self-md-start">
                Shop
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color3">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="https://static.wixstatic.com/media/2c0034_efd3336ca11743f796271887c60c2dd1~mv2.png"
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Pomegranate</h1>
              <p className="paragraph mb-2">
                Pomegranate is a juice which is really a wonderful and will give you a Orange taste and nothing else.
              </p>
              <a href="" className="btn btn-black align-self-md-start">
                Shop
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;