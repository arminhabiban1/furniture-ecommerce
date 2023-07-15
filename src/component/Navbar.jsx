import React from "react";

const Navbar = () => {
  return (
    <div className="h-[100px] ">
      <div className="text-center">
        <ul className="inline-grid grid-cols-4 gap-20">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
