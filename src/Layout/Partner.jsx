import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getLinkImage, SERVER } from "../App";
import PartnerModal from "./PartnerModal";

const Partner = ({ isLogin, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const res = await SERVER.API?.get("/api/partner");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDoubleClick = () => {
    if (!isLogin) return;
    setIsOpen(true);
  };

  return (
    <div id={id} className="lg:pt-30 pt-10 lg:pb-10 pb-0  bg-[#f5f5f5]" onDoubleClick={onDoubleClick}>
      <div data-aos="fade-down" className="container m-auto select-none lg:block hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          grabCursor={true}
          freeMode={true} // cho phép kéo tự do
          className="flex w-full overflow-x-auto whitespace-nowrap gap-3"
        >
          {data.map((src, index) => (
            <SwiperSlide  key={index} className="rounded overflow-hidden w-fit max-w-60 h-20 border border-[var(--primary-color)] p-2 box-border">
              <img src={getLinkImage(src)} alt={`Image ${index}`} className="w-full h-16 object-contain mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden grid grid-cols-2 px-4 gap-4">
        {data.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden w-full max-h-16 border border-[var(--primary-color)]">
            <img src={getLinkImage(src)} alt={`Image ${index}`} className="w-full h-16 object-contain mx-auto" />
          </div>
        ))}
      </div>
      {isOpen && <PartnerModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default Partner;
