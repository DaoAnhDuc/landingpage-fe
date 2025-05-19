import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <div className="container flex items-center justify-between m-auto">
        <img src="./logo-fit.png" className="h-24 p-2" alt="" />
        <div>
          <ul className="flex font-bold uppercase gap-10">
            <li className="p-2 cursor-pointer">Home</li>
            <li className="p-2 cursor-pointer">About Us</li>
            <li className="p-2 cursor-pointer">Our Vision</li>
            <li className="p-2 cursor-pointer">Product List</li>
            <li className="p-2 cursor-pointer">Partner</li>
            <li className="p-2 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
