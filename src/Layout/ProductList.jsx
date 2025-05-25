import { useEffect, useState } from "react";
import { SERVER } from "../App";
import ProductListModal from "./ProductListModal";

const ProductList = ({ isLogin, id }) => {
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
      const res = await SERVER.API?.get("/api/product-list");
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
    <div id={id} className="bg-[#07798b] mt-20 py-20">
      <div className="container m-auto gap-10" onDoubleClick={onDoubleClick}>
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold ">{data.title}</h2>
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {data.data.map((item, index) => (
            <div className="text-center bg-white p-8 rounded-3xl" key={index}>
              <img src="./productdone.png" className="m-auto w-14" />
              <h3 className="text-xl font-bold my-4">{item.title}</h3>
              <div className="whitespace-pre-line text-gray-600 text-[15px]" dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <ProductListModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default ProductList;
