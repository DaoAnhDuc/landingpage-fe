import React from "react";

const OutVision = () => {
  const data = [
    {
      title: "Core Values",
      content: "We compare prices and qualities offered by all our suppliers and provide the best option for the client.",
    },
    {
      title: "Our Mission",
      content: "We are dedicated to provide value added services and solutions to our customers. Integrity. Reliability. Respect. Responsibility. Loyalty.",
    },
    {
      title: "Our Vision",
      content: "Our vision is to be the most preferred pharmaceutical services provider for local and global markets through superior service and timely delivery",
    },
  ];
  return (
    <div className="py-20 bg-[#f5f5f5]">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold text-center">OUR VISION</h2>
        <p className="text-center mt-6 text-gray-500">
          <b>INFINITELTDGROUP</b> is confident to bring best services to every customer. <b>INFINITELTDGROUP</b> cooperated and supplied product from China, India, European manufactures in the Pharmaceutical/Chemical sector. Each manufacturer always guarantees their facilities with approvals such as WHO-GMP, KFDA, PMDA, EU-GMP, USFDA, ISO, etc. The offered products and services certainy meet customer's requirements width the best effort.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 bg-gray-100 mt-10">
          {data.map((item, index) => (
            <div key={index} className="bg-white  p-10 rounded-xl" style={{ boxShadow: "0 10px 30px rgba(0,0,0,.06)" }}>
              <div>
                <img className="m-auto" src="https://cangroup.com.sg/upload/images/slider/icondone1.png" alt="" />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold my-6">{item.title}</h2>
                <p className="mt-4">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutVision;
