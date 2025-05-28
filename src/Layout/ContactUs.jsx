import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ContactUsModal from "./ContactUsModal";
import { SERVER } from "../App";
const ContactUs = ({ isLogin, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAddress, setActiveAddress] = useState(0);
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
      const res = await SERVER.API?.get("/api/contact-us");
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
      <div className="container m-auto">
        <h2 data-aos="fade-down" className="text-3xl font-bold text-center">
          {data.title}
        </h2>
        <div data-aos="fade-down" className="text-center mt-6 text-gray-500" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div data-aos="fade-down" className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10 p-4">
          {data.data.map((item, index) => (
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="p-10 rounded-xl flex flex-col gap-3"
              key={item.name}
              onClick={() => setActiveAddress(index)}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#BA0000]" /> Address: {item.address}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="text-[#BA0000]" /> Email: {item.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="text-[#BA0000]" /> Hotline: {item.hotline} - Fax: {item.fax}
              </p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10 p-4">
          <div data-aos="fade-right" className="lg:col-span-2 col-span-1">
            <iframe
              src={data.data[activeAddress]?.link}
              width="100%"
              height="100%"
              allowfullscreen={""}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div data-aos="fade-left" className="w-full">
            <div className=" flex flex-col gap-2">
              <input type="text" placeholder="Your name" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <input type="text" placeholder="Your Numbers" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <input type="text" placeholder="Your email address" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <textarea className="border border-gray-400 p-3" rows={6}></textarea>
              <div className="">
                <button className="h-10 bg-[var(--primary-color)] text-white font-bold px-6 rounded">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ContactUsModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
    </div>
  );
};

export default ContactUs;
