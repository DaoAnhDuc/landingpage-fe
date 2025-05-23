import { faEnvelope, faLocationDot, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-center" style={{ backgroundImage: 'linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("./footer.png")' }}>
        <div className="container m-auto py-10 flex gap-5">
          <div className="flex-1/3 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#08798b] mb-6" />
              <span>3308A, 33/F, Hopewell Centre, 183 Queen's Road East, Wanchai, Hong Kong</span>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#08798b] mb-6" />
              <span>3308A, 33/F, Hopewell Centre, 183 Queen's Road East, Wanchai, Hong Kong</span>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#08798b]" />
              <span>ceo@cangroup.com.sg</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <FontAwesomeIcon icon={faPhoneSquare} className="text-[#08798b] text-5xl" />
              <span className="text-xl font-bold">+65 316 58 048</span>
            </div>
          </div>
          <div className="flex-1/3">
            <div className="font-bold text-lg uppercase">Information</div>
            <p className="mt-3 text-justify">
              This site contains information on products and services that target a wide range of audiences. Please note that we are not responsible for the access to information that may not comply with any legal process, regulations in
              your country of origin
            </p>
          </div>
          <div className="flex-1/3">
            <div className="font-bold text-lg uppercase">contact us</div>
            <p className="mt-3 text-justify">Connect with us on social media</p>
            <div className="text-4xl flex gap-5 mt-4">
              <FontAwesomeIcon icon={faFacebook} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faTwitter} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faInstagram} className="text-[#08798b]" />
              <FontAwesomeIcon icon={faPinterest} className="text-[#08798b]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center p-2">Copyright © 2017 - CAN ALLIANCE GROUP - All Rights Reserved</div>
    </>
  );
};

export default Footer;
