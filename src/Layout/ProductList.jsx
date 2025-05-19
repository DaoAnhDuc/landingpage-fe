import React from "react";

const ProductList = () => {
  const data = [
    {
      title: "Cosmestic ingredients",
      content:
        "Essential oil generally becomes more popular in health care and beauty care. We are providing many kinds of essential oil that are applied in large fields: Pharmaceutical, Nutraceutical, and Cosmetic. We are honored to be a representative of hundreds of suppliers from many different backgrounds all over the world as China, India, Korea, and Japan,... INFINITELTDGROUP provide all essential oil which is applied in soft-capsule, syrup, cream, lotion,...",
    },
    {
      title: "Active Pharmaceutical ingredients",
      content:
        "INFINITELTDGROUP is operating in the pharmaceutical industry by providing hundreds of Active Pharmaceutical Ingredients/Excipients/Phytochemicals & Herbs/Agrochemicals/Medical Equipment to all customers in the Southeast Asia. With almost 10 years of experience, INFINITELTDGROUP, as a company founded on trust and reliability, does not compromise on its services and thus, meets the needs of its customers. row. Currently, we are cooperating with reputable pharmaceutical companies and authorized commercial distributors with major manufacturers from India and China. ",
    },
    {
      title: "Packaging",
      content:
        "Packaging is a really indispensable part of any cosmetic product. A good package not only attracts consumers' eyes but also stabilizes products and maintains their effect. Comprehending that, we provide a variety of models and colors for packaging. Besides, we also support customized services. In INFINITELTDGROUP, we have thousands of different packaging models which come from China, and India. We have the capability to receive a big requirement from cosmetic producers. Type of packaging that we are providing: \n - Tubes (plastic,  glass...)\n - Bottles (airless bottle, aluminum bottle, plastic bottle...)\n - Jars (different shapes: cycle, square,...)",
    },
    {
      title: "Nutraceutical",
      content:
        "Nutraceutical is becoming one of the most integral parts of the Pharmacy Field. Nowadays, Nutraceutical is present in more than 90 percent of drugstores in Vietnam (Report 2017). Therefore, to satisfy these increasing demands of manufacture as well as supplement needs, we provide dietary supplement ingredients from many different backgrounds all over the world: Europe, Japan, China, Korea, and India...",
    },
  ];
  return (
    <div className="bg-[#07798b] mt-20 py-20">
      <div className="container m-auto gap-10">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold ">PRODUCT LIST</h2>
          <p className="mt-8">
            Nowadays, with the advantage of experienced staffs as well as wide network of prestigious pharmaceutical companies, <b>INFINITELTDGROUP</b> is working in pharmaceutical industry by providing Active Pharmaceutical ingredients/
            Excipients/ Phytochemicals & Herbals/Agro Chemicals/ Medical equipment to all customers
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {data.map((item, index) => (
            <div className="text-center bg-white p-8 rounded-3xl" key={index}>
              <img src="./productdone.png" className="m-auto w-14" />
              <h3 className="text-xl font-bold my-4">{item.title}</h3>
              <p className="whitespace-pre-line text-gray-600 text-[15px]">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
