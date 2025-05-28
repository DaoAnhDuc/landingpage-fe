import React, { useEffect, useState } from "react";
import { getLinkImage, SERVER } from "../App";
import AboutUsModal from "./AboutUsModal";

const AboutUs = ({isLogin, id}) => {
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
    setIsOpen(true)
  };

  return (
    <div  id={id} className="bg-[var(--primary-color)] mt-0 py-20" onDoubleClick={onDoubleClick}>
      <div className="container m-auto flex gap-10">
        <div className="w-1/2 text-white">
          <h4 className="font-bold text-xl">{data?.title}</h4>
          <div className="w-10 h-1 bg-[#19b8cf] mt-2"></div>
          <div className="mt-6" dangerouslySetInnerHTML={{ __html: data?.description }}></div>
        </div>
        <div className="w-1/2">
          <img src={getLinkImage(data?.image)} className="w-full rounded-2xl" alt="" />
        </div>
      </div>
      {data && isOpen && <AboutUsModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default AboutUs;
