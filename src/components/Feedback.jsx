// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import img1 from "../../public/image-1.jpg";
import img2 from "../../public/image-2.jpg";
import img3 from "../../public/image-3.jpg";
import img4 from "../../public/image-4.jpg";
import img5 from "../../public/image-5.jpg";
import img6 from "../../public/image-6.jpg";
import { useState } from "react";

function Feedback() {
    const [swiper, setSwiper] = useState()
    const [activeSlide, setActiveSlide] = useState(1)
  const imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ];


  const CustomNextArrow = () => (
    <button className="swiper-button-next">
        <FaArrowRight/>
    </button>
  )
  const CustomPrevArrow = () => (
    <button className="swiper-button-prev">
        <FaArrowLeft/>
    </button>
  )

  const handlePrev = ()=>{
    swiper?.slidePrev()
  }
  const handleNext = ()=>{
    swiper?.slideNext()
  }

  return (
    <section className="p-7 py-10 lg:p-20 overflow-hidden">
      <div className="flex items-center justify-around mb-10">
        <h1 className="text-2xl lg:text-4xl font-bold">Binhoff gallery</h1>
        <div className="custom-navigation text-lg lg:text-2xl">
          <div onClick={handlePrev}>
            <CustomPrevArrow/>
          </div>
          <span>{activeSlide} / {imgs.length}</span>
          <div onClick={handleNext}>
            <CustomNextArrow/>
          </div>
        </div>
      </div>
      <div className="swiper-container-wrapper">
        <Swiper
          className="h-[500px] px-20 ml-40"
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
        >
          {imgs.map(({ id, img }) => (
            <div key={id}>
              <SwiperSlide key={id}>
                <img
                  className="h-full w-full lg:w-[90%] rounded-xl object-cover"
                  src={img}
                  alt="img"
                />
              </SwiperSlide>
            </div>
          ))}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Feedback;
