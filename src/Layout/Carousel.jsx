import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getLinkImage, SERVER } from "../App";
import CarouselModal from "./CarouselModal";
import useWindowSize from "../../hooks/useWindowSize";

export default function Carousel({ isLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBanner, setselectedBanner] = useState(null);
  const [data, setData] = useState([]);
  const { width } = useWindowSize();
  const height = width / (1900 / 700);
  console.log(width, height);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const res = await SERVER.API?.get("/api/banner");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditCarousel = async (value) => {
    if (!isLogin) return;
    await setselectedBanner(value);
    setIsOpen(true);
  };
  if (data.length === 0) return null;
  return (
    <div className="relative w-full mb-20">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="overflow-hidden"
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="relative"
            onDoubleClick={() => onEditCarousel(item)}
            style={{
              backgroundImage: "",
              width: "100%",
              height,
            }}
          >
            <img src={getLinkImage(item.background)} alt={`Slide ${idx + 1}`} className="w-full object-cover select-none" />
            <div className="absolute inset-0 flex justify-center items-center z-10" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
              <div className="container mx-auto px-3 text-center">
                <div className="w-full text-banner">
                  <h4 className="text-3xl text-white font-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7);" }}>
                    {item.text1}
                  </h4>
                  <div className="w-16 h-1 bg-[var(--primary-color)] m-auto mt-4 mb-10"></div>
                  <h2
                    className="text-6xl mb-10 uppercase font-bold bg-gradient-to-r from-[#BA0000] to-[#BA000080] text-transparent bg-clip-text animate-fade-in"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7);" }}
                  >
                    {item.text2}
                  </h2>
                  <div className="text-white" dangerouslySetInnerHTML={{ __html: item.text3 }}></div>{" "}
                  <a href="">
                    <button className="bg-[var(--primary-color)] cursor-pointer text-white mt-[10px] lg:mt-7 px-[25px] py-[10px]  rounded-[5px] uppercase hover:text-[var(--primary-color)] hover:bg-white transition-all">
                      Xem thêm<i className="fa-solid fa-angles-right text-f12 ml-[5px]"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedBanner && isOpen && <CarouselModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={selectedBanner} fetchData={fetchData} />}
    </div>
  );
}
