import { useEffect, useState } from "react";
import "swiper/css";
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
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
    <div className="relative w-full lg:mb-20 md:mb-6 mb-2">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // continues autoplay after interaction
        }}
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
              minHeight: 240,
            }}
          >
            <img src={getLinkImage(item.background)} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover select-none" />
            <div className="absolute inset-0 flex justify-center items-center z-10" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
              <div className="container mx-auto px-3 text-center">
                <div className="w-full text-banner">
                  <h4
                    data-aos="fade-up"
                    className="lg:text-3xl md:text-xl text-base text-white font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7);" }}
                  >
                    {item.text1}
                  </h4>
                  <div className="md:block hidden w-16 h-1 bg-[var(--primary-color)] m-auto lg:mt-4 lg:mb-10 mt-2 mb-6 "></div>
                  <h2
                    data-aos="fade-up"
                    className="lg:text-6xl md:text-4xl text-base lg:mb-10 md:mb-5 uppercase font-bold animate-gradient bg-gradient-to-r from-orange-500 via-[var(--primary-color)] to-blue-500 bg-clip-text text-transparent"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7);" }}
                  >
                    {item.text2}
                  </h2>
                  <div data-aos="fade-up" className="text-white md:text-base text-xs" dangerouslySetInnerHTML={{ __html: item.text3 }}></div>{" "}
                  <button
                    data-aos="fade-up"
                    className="bg-[var(--primary-color)] text-white md:px-4 md:py-2 px-2 py-1 md:mt-6 mt-2 rounded transition-all md:text-base text-sm"
                  >
                    Xem thêm
                  </button>
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
