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
    <div id={id} className="pt-30 pb-10  bg-[#f5f5f5]" onDoubleClick={onDoubleClick}>
      <div className="container m-auto select-none">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          grabCursor={true}
          freeMode={true} // cho phép kéo tự do
          className="flex w-full overflow-x-auto whitespace-nowrap gap-3"
        >
          {data.map((src, index) => (
            <SwiperSlide key={index} className="rounded-lg overflow-hidden max-w-60 max-h-20 w-fit">
              <img src={getLinkImage(src)} alt={`Image ${index}`} className="max-w-60 max-h-20 object-contain mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isOpen && <PartnerModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default Partner;
