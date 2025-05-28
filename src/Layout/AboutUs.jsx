import React, { useEffect, useState } from "react";
import { getLinkImage, SERVER } from "../App";
import AboutUsModal from "./AboutUsModal";

const AboutUs = ({ isLogin, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const res = await SERVER.API?.get("/api/about-us");
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
    <div id={id} className="bg-[var(--primary-color)] mt-0 lg:py-20 py-10" onDoubleClick={onDoubleClick}>
      <div className="container m-auto grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div data-aos="fade-right" className=" text-white px-3">
          <div className="font-bold text-xl bg-white w-fit text-[var(--primary-color)] pl-2 pr-12 py-2" style={{clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)'}}>{data?.title}</div>
          {/* <div className="w-14 h-1 bg-white mt-2"></div> */}
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: data?.description }}></div>
        </div>
        <div data-aos="fade-left" className="px-3">
          <img src={getLinkImage(data?.image)} className="w-full" alt="" />
        </div>
      </div>
      {data && isOpen && <AboutUsModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default AboutUs;
