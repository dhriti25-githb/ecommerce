import React, { useState, useContext } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Shopcontext } from "./Shopcontext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { quantity } = useContext(Shopcontext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full bg-yellow-800 relative">
  <div className="flex justify-between items-center px-6 py-4">

    {/* Logo */}
    <h1 className="text-3xl text-amber-950 font-serif font-bold">ESHOP</h1>

    {/* Hamburger Button */}
    <button
      className="lg:hidden text-white text-3xl"
      onClick={() => setOpenMenu(!openMenu)}
    >
      ☰
    </button>

    {/* Desktop Menu */}
    <div className="hidden lg:flex items-center gap-6">

      <Link
        to="/"
        onClick={() => setMenu("home")}
        className={`text-xl ${
          menu === "home" ? "text-amber-950 font-semibold" : "text-white"
        }`}
      >
        Home
      </Link>

      <Link
        to="/product"
        onClick={() => setMenu("shop")}
        className={`text-xl ${
          menu === "shop" ? "text-amber-950 font-semibold" : "text-white"
        }`}
      >
        Shop
      </Link>

      <a
        onClick={() => setMenu("about")}
        className={`text-xl ${
          menu === "about" ? "text-amber-950 font-semibold" : "text-white"
        }`}
      >
        About
      </a>

      <a
        onClick={() => setMenu("blogs")}
        className={`text-xl ${
          menu === "blogs" ? "text-amber-950 font-semibold" : "text-white"
        }`}
      >
        Blogs
      </a>

      <a
        className="flex items-center gap-1 text-xl text-white"
      >
        Quick links <FaAngleDown />
      </a>
    </div>

    {/* Right Icons */}
    <div className="hidden lg:flex items-center gap-6 text-2xl text-white">

      <IoSearch className="cursor-pointer hover:text-amber-950" />

      <Link to="/Cart" className="relative">
        <FaShoppingCart className="hover:text-amber-950" />
        {quantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
            {quantity}
          </span>
        )}
      </Link>

      <Link
        to="/login"
        className="bg-amber-950 text-white px-5 py-2 rounded-lg"
      >
        Login
      </Link>

    </div>
  </div>

  {/* Mobile Menu */}
  {openMenu && (
    <div className="lg:hidden flex flex-col items-center gap-4 pb-6 text-white">

      <Link to="/">Home</Link>
      <Link to="/product">Shop</Link>
      <a>About</a>
      <a>Blogs</a>

      <div className="flex items-center gap-6 text-2xl">
        <IoSearch />

        <Link to="/Cart" className="relative">
          <FaShoppingCart />
          {quantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
              {quantity}
            </span>
          )}
        </Link>
      </div>

      <Link
        to="/login"
        className="bg-amber-950 px-5 py-2 rounded-lg"
      >
        Login
      </Link>

    </div>
  )}
</nav>
  );
};

export default Navbar;