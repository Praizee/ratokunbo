"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo.svg";
import { BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { PiBellLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoChevronDown } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <div className="relative">
        <BiSearch className="absolute top-0 bottom-0 size-6 my-auto text-gray-400 left-5" />

        <input
          type="text"
          placeholder="Search for anything"
          className="w-full py-3 pl-14 pr-8 text-[#747272] rounded-full outline-none bg-[#F8F8F8] border border-transparent focus:bg-white focus:border focus:border-orange-500"
        />
      </div>
    </form>
  );
};

const Categories = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex gap-6 items-center max-w-screen-xl mx-auto px-4 md:px-6 py-2 xl:py-0 xl:h-[50px]">
      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <BiMenu className="size-6" />
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="xl:hidden bg-white shadow-md border-t absolute z-10 mt-4 min-w-[200px]">
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
      </div>

      <div className="flex xl:hidden w-full">
        <SearchInput />
      </div>

      <div className="hidden xl:flex items-center gap-6">
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
    </div>
  );
};

const Navbar = () => {
  const categoriesData = {
    Electronics: [
      "Computer & tablets",
      "Cameras & Photo",
      "TV, audio & surveillance",
      "Cell phones & accessories",
    ],
    "Home & Office": [
      "Desks",
      "Kitchen equipment",
      "Office chairs",
      "Curtains",
    ],
    Gaming: ["Xbox", "Playstation 5", "Playstation 4", "Game Disc"],
    Fashion: ["Women", "Men", "Jewelry & Watches", "Shoes"],
    "Home appliances": ["Pot", "Microwave", "Ovens", "Fridge & freezers"],
    "Toys & hobbies": ["Radio", "Control", "Actions figures", "Dolls & Bears"],
    "Sporting goods": [
      "Outdoor sports",
      "Team sports",
      "Exercise & fitness",
      "Golf",
    ],
  };

  return (
    <nav className="bg-white/90 text-black sticky top-0 z-50 shadow-md border-b border-gray-200">
      {/* Top section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex gap-8 items-center justify-between py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-[146px] md:w-[186px] lg:w-[226px]"
            width={226}
            height={53}
            quality={90}
            priority
          />
        </Link>

        {/* category dropdown */}
        <div className="dropdown dropdown-hover">
          <button
            type="button"
            tabIndex={0}
            className="hidden xl:flex items-center gap-1 text-sm font-medium"
          >
            Shop by Category
            <IoChevronDown className="size-4" />
          </button>

          <div
            tabIndex={0}
            className="dropdown-content menu mt-2 bg-base-100 border-2 rounded-box z-[1] w-[800px] shadow text-black grid grid-cols-3 gap-4 p-4"
          >
            {Object.entries(categoriesData).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="font-medium text-sm">{category}</h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/category/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block py-1 px-2 text-sm hover:bg-gray-50 hover:pl-4 duration-100"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-3 text-center mt-2">
              <Link
                href="/categories"
                className="text-[#F39909] flex items-center gap-1 justify-center hover:underline font-medium duration-100"
              >
                See all categories
                <BiChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden xl:flex flex-grow max-w-lg">
          <SearchInput />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 xl:flex-1 justify-between">
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Cart">
              <FiShoppingCart className="size-6" />
            </button>
            <button type="button" aria-label="Notification">
              <PiBellLight className="size-6" />
            </button>
          </div>

          <button
            type="button"
            tabIndex={0}
            role="button"
            className="dropdown dropdown-hover dropdown-bottom dropdown-end flex items-center gap-1 text-sm font-medium"
          >
            <CgProfile className="size-6" />
            <span className="hidden lg:block">Hi, Dipsy</span>
            <IoChevronDown className="size-4" />

            <div
              tabIndex={0}
              className="dropdown-content mt-2 menu bg-base-100 border-2 py-2 px-0 rounded-box z-[1] w-52 shadow text-black text-start flex flex-col divide-y divide-gray-100"
            >
              {[
                { href: "", label: "Profile" },
                { href: "", label: "Order" },
                { href: "", label: "Become a seller" },
                { href: "", label: "Favorite Item" },
                { href: "", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="h-10 flex items-center px-2 hover:pl-4 hover:bg-gray-50 duration-100"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href=""
                className="h-10 flex items-center justify-center text-red-500 px-2 hover:bg-gray-50 duration-100"
              >
                Log out
              </Link>
            </div>
          </button>
        </div>
      </div>

      {/* Categories */}
      <Categories />
    </nav>
  );
};

export default Navbar;
