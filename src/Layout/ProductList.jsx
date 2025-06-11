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
    <div
      id={id}
      className="bg-[var(--primary-color)] lg:mt-20 mt-10 lg:py-20 py-10 bg-product-list"
      style={{
        backgroundImage: "linear-gradient(var(--primary-color), rgba(0, 0, 0, 0.4)), url('./background-produc-list.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container m-auto gap-10  px-4" onDoubleClick={onDoubleClick}>
        <div data-aos="fade-up" className="text-center text-white">
          <div className="text-3xl font-bold">{data.title}</div>
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {data.data.map((item, index) => (
            <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className=" bg-white p-8 rounded-3xl" key={index}>
              <div className="flex items-center gap-3" >
                <img src="./productdone.png" className="h-12" alt="" />
                <h3 className="text-xl font-bold my-4 border-b-4 border-[var(--primary-color)] w-fit pb-2 px-2">{item.title}</h3>
              </div>
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
