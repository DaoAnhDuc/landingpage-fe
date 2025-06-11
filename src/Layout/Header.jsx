import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = ({ isLogin }) => {
  const [open, setOpen] = useState(false);
  function scrollToSection(id) {
    setOpen(false)
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="sticky top-0 bg-white z-10 left-0">
      <div className="container flex items-center justify-between m-auto">
        <div className="flex items-end">
          <img src="./logo-fit.png" className="h-20 p-2" alt="" />
          {isLogin && <div className="text-black font-bold uppercase text-xl mb-1">Admin</div>}
        </div>
        <div className="">
          <ul className="font-bold uppercase gap-10 lg:flex hidden">
            <li className="p-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("AboutUs")}>
              About Us
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("OutVision")}>
              Our Vision
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("ProductList")}>
              Product List
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("Partner")}>
              Partner
            </li>
            <li className="p-2 cursor-pointer" onClick={() => scrollToSection("ContactUs")}>
              Contact
            </li>
          </ul>
          <div className="lg:hidden block">
            <button className="cursor-pointer px-2 py-2" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={faBars} className="text-[var(--primary-color)] text-2xl" />
            </button>
          </div>
          {open && (
            <div className="absolute top-20 left-0 w-full bg-white" style={{ borderTop: "1px solid #dfdfdf" , borderBottom: '1px solid #dfdfdf'}}>
              <ul data-aos="fade-down" className="font-bold uppercase gap-10 lg:hidden block container mx-auto  py-1">
                <li
                  className="px-2 py-4 cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  style={{ borderBottom: "1px solid #dfdfdf" }}
                >
                  Home
                </li>
                <li className="px-2 py-4 cursor-pointer" onClick={() => scrollToSection("AboutUs")} style={{ borderBottom: "1px solid #dfdfdf" }}>
                  About Us
                </li>
                <li className="px-2 py-4 cursor-pointer" onClick={() => scrollToSection("OutVision")} style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Our Vision
                </li>
                <li className="px-2 py-4 cursor-pointer" onClick={() => scrollToSection("ProductList")} style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Product List
                </li>
                <li className="px-2 py-4 cursor-pointer" onClick={() => scrollToSection("Partner")} style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Partner
                </li>
                <li className="px-2 py-4 cursor-pointer" onClick={() => scrollToSection("ContactUs")}>
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
