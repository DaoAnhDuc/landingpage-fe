import { faEnvelope, faLocationDot, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SERVER } from "../App";
import FooterModal from "./FooterModal";

const Footer = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    address: [],
    email: "",
    phone: "",
    title1: "",
    description1: "",
    title2: "",
    description2: "",
    copyright: ''
  });

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      const res = await SERVER.API?.get("/api/footer");
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
    <>
      <div
        onDoubleClick={onDoubleClick}
        className="text-white bg-center"
        style={{ backgroundImage: 'linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("./footer.png")' }}
      >
        <div className="container m-auto py-10 flex gap-5">
          <div className="flex-1/3 flex flex-col gap-3">
            {data.address.map((i, index) => (
              <div className="flex items-center gap-4" key={index}>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#08798b] mb-6" />
                <span>{i}</span>
              </div>
            ))}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#08798b]" />
              <span> {data.email}</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <FontAwesomeIcon icon={faPhoneSquare} className="text-[#08798b] text-5xl" />
              <span className="text-xl font-bold">{data.phone}</span>
            </div>
          </div>
          <div className="flex-1/3">
            <div className="font-bold text-lg uppercase">{data.title1}</div>
            <div className="mt-3 text-justify" dangerouslySetInnerHTML={{ __html: data.description1 }}></div>
          </div>
          <div className="flex-1/3">
            <div className="font-bold text-lg uppercase">{data.title2}</div>
            <div className="mt-3 text-justify" dangerouslySetInnerHTML={{ __html: data.description2 }}></div>
            <div className="text-4xl flex gap-5 mt-4">
              <FontAwesomeIcon icon={faFacebook} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faTwitter} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faInstagram} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faPinterest} className="text-[#08798b]" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <FooterModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} fetchData={fetchData} />}
      <div className="bg-black text-white text-center p-2">{data.copyright}</div>
    </>
  );
};

export default Footer;
