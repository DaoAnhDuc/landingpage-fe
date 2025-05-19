import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#07798b] mt-20 p-10">
      <div className="container m-auto flex gap-10">
        <div className="w-1/2">
          <img src="https://cangroup.com.sg/upload/images/about.jpg" className="w-full rounded-2xl" alt="" />
        </div>
        <div className="w-1/2 text-white">
          <h4 className="font-bold text-xl">WHO ARE WE?</h4>
          <div className="w-10 h-1 bg-[#19b8cf] mt-2 mb-20"></div>
          <p>
            <b>INFINITELTDGROUP</b>. (also known as INFINITELTDGROUP) was established in 2015 when <b>Mr. Michael Chang</b> founded the company in Hongkong. Since its foundation, INFINITELTDGROUP has been involved in trading and
            distributing Active Pharmaceutical Ingredients (APIs), Herbal, Nutraceutical, and Cosmetic Ingredients. The company made the best use of its resources and workforce to strengthen its network with some of the finest API
            manufacturers in the world.
          </p>
          <br />
          <p>
            Today, INFINITELTDGROUP actively distributes materials to Vietnam, Laos... INFINITELTDGROUP ’s biggest strengths lie in its vast network of clients, terrific rapport with manufacturers in India, China, Korean and flexibility
            to customize and meet the complex needs of its customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
