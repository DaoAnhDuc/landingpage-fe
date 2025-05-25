import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const ContactUs = ({id}) => {
  const [activeAddress, setActiveAddress] = useState(0);
  const data = [
    {
      name: "Singapore Office",
      address: "141 Middle Road# 05-06, GSM Building, Singapore (188976).",
      email: "ceo@cangroup.com.sg",
      hotline: "+65 316 58 048",
      fax: "+65 316 58 048",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300.4166069432495!2d103.84981441085574!3d1.299470198682721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bb3d92a31b%3A0xd725e0a4a17bb90a!2sGSM%20Building!5e1!3m2!1svi!2s!4v1747664095627!5m2!1svi!2s",
    },
    {
      name: "HongKong Office",
      address: "3308A, 33/F., Hopewell Centre, 183 Queen's Road East, Wanchai, Hong Kong",
      email: "ceo@cangroup.com.sg",
      hotline: "+65 316 58 048",
      fax: "+65 316 58 048",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.5328742983065!2d114.1691450111589!3d22.27463857962042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404004336e3a62d%3A0xd0266f05995e24a7!2sHopewell%20Centre!5e1!3m2!1svi!2s!4v1747664131899!5m2!1svi!2s",
    },
  ];

  return (
    <div  id={id} className="py-20 bg-[#f5f5f5]">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold text-center">CONTACT US</h2>
        <p className="text-center mt-6 text-gray-500">Have question? Get in touch with us NOW</p>
        <div className="grid grid-cols-2 gap-6 mt-10">
          {data.map((item, index) => (
            <div
              className="p-10 rounded-xl flex flex-col gap-3"
              key={item.name}
              onClick={() => setActiveAddress(index)}
              style={{ boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", border: "1px solid rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#08798b]" /> Address: {item.address}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="text-[#08798b]" /> Email: {item.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="text-[#08798b]" /> Hotline: {item.hotline} - Fax: {item.fax}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-10">
          <div className="flex-2/3">
            <iframe src={data[activeAddress]?.link} width="100%" height="100%" allowfullscreen={""} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex-1/3">
            <div className=" flex flex-col gap-2">
              <input type="text" placeholder="Your name" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <input type="text" placeholder="Your Numbers" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <input type="text" placeholder="Your email address" className="border border-gray-400 h-10 rounded-xs pl-3 focus:border-gray-950" />
              <textarea className="border border-gray-400 p-3" rows={6}></textarea>
              <div className="">
                <button className="h-10 bg-[#07798b] text-white font-bold px-6 rounded">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
