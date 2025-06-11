import React, { useEffect, useState } from "react";
import { SERVER } from "../App";
import OutVisionModal from "./OutVisionModal";

const OutVision = ({ isLogin, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    data: [],
  });

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const res = await SERVER.API?.get("/api/our-vision");
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
    <div id={id} className="lg:py-20 py-10 bg-[#f5f5f5]" onDoubleClick={onDoubleClick}>
      <div className="container m-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center">
          {data.title}
        </h2>
        <div data-aos="fade-up" className="text-center mt-6 text-gray-500" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4 bg-gray-100 lg:mt-10 mt-4">
          {data.data.map((item, index) => (
            <div data-aos="fade-up" key={index} className="bg-white lg:p-10 p-4 rounded-xl cursor-pointer hover:-translate-y-2" style={{ boxShadow: "0 10px 30px rgba(0,0,0,.06)" }}>
              <div>
                <img className="m-auto" src="./icondone1.png" alt="" />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold my-6">{item.title}</h2>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <OutVisionModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default OutVision;
