"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo.svg";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FiShoppingCart, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="hidden lg:flex max-w-screen-xl mx-auto px-4 md:px-6 h-[50px] items-center gap-6">
      {[
        "Deals",
        "Cell Phone",
        "Office Supplies",
        "Furniture",
        "Appliances",
        "Electronics",
        "Home Living",
        "Wearable",
        "Health & Fitness",
        "Watches",
        "TV's",
        "Car Tech",
        "Computers",
      ].map((category) => (
        <Link
          key={category}
          href="#"
          className="hover:text-orange-500  transition-colors font-medium text-sm"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 sticky top-0 z-50 shadow-md border-b border-gray-200">
      {/* Top section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <BiMenu
            className="text-2xl  cursor-pointer lg:hidde"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={40}
            quality={90}
            priority
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-grow max-w-lg mx-4">
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <div className="relative">
              <BiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-5" />

              <input
                type="text"
                placeholder="Search for anything"
                className="w-full py-3 pl-14 pr-8 text-[#747272] rounded-full outline-none bg-[#F8F8F8] border border-transparent focus:bg-white focus:border focus:border-orange-500"
              />
            </div>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <FiShoppingCart className="text-xl cursor-pointer" />
          <FiBell className="size-6 cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <FaUserCircle className="size-6" />
            <span className="hidden lg:block">Hi, Dipsy</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t absolute w-full">
          <div className="flex flex-col px-4 py-2 gap-2">
            {[
              "Deals",
              "Cell Phone",
              "Office Supplies",
              "Furniture",
              "Appliances",
              "Electronics",
              "Home Living",
              "Wearable",
              "Health & Fitness",
              "Watches",
              "TV's",
              "Car Tech",
              "Computers",
            ].map((category) => (
              <Link
                key={category}
                href="#"
                className="block py-1 hover:text-orange-500 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
