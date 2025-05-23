import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselModal from "./CarouselModal";
import { useState } from "react";
const images = [
  {
    id: 1,
    background: "https://cangroup.com.sg/upload/images/Em%20Hop/slide24.png",
    text1: "1 Welcome to INFINITELTDGROUP",
    text2: "1 10 Years of Experience",
    text3: "1 We commit to bringing great benefits to our partners for a desirable win-win solution by offering our best quality, competitive price, and superior services",
  },
  {
    id: 2,
    background: "https://cangroup.com.sg/upload/images/Em%20Hop/thu1.png",
    text1: "2 Welcome to INFINITELTDGROUP",
    text2: "2 10 Years of Experience",
    text3: "2 We commit to bringing great benefits to our partners for a desirable win-win solution by offering our best quality, competitive price, and superior services",
  },
];

export default function Carousel({ isLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const onEditCarousel = async (value) => {
    if (!isLogin) return;
    await setData(value);
    setIsOpen(true);
  };
  return (
    <div className="relative w-full">
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} navigation={true} autoplay={{ delay: 3000 }} loop={true} className="overflow-hidden">
        {images.map((item, idx) => (
          <SwiperSlide key={idx} className="relative" onClick={() => onEditCarousel(item)}>
            <img src={item.background} alt={`Slide ${idx + 1}`} className="w-full object-cover select-none" />
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="container mx-auto px-3 text-center">
                <div className="w-full text-banner">
                  <h4 className="text-3xl text-white font-bold">{item.text1}</h4>
                  <div className="w-16 h-1 bg-[#07798b] m-auto mt-4 mb-10"></div>
                  <h2 className="text-6xl mb-10 uppercase font-bold bg-gradient-to-r from-[#07798b] to-[#00c4cc] text-transparent bg-clip-text animate-fade-in">{item.text2}</h2>
                  <p className="text-white">{item.text3}</p>{" "}
                  <a href="">
                    <button className="bg-[#07798b] cursor-pointer text-white mt-[10px] lg:mt-7 px-[25px] py-[10px]  rounded-[5px] uppercase hover:text-[#07798b] hover:bg-white transition-all">
                      Xem thêm<i className="fa-solid fa-angles-right text-f12 ml-[5px]"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
    </div>
  );
}
