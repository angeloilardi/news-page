"use client";

import { useState } from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "new",
    title: "New",
  },
  {
    id: "popular",
    title: "Popular",
  },
  {
    id: "trending",
    title: "Trending",
  },
  {
    id: "categories",
    title: "Categories",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex p-4 justify-between items-center navbar">
      {/* Logo */}
      <img
        alt="Web News Logo"
        className="mr-3 h-6 sm:h-9"
        src="./images/logo.svg"
      />

      {/* Desktop Navigation */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer border-0 hover:text-soft-orange ${
              active === nav.title ? "hover:text-soft-orange" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={
            toggle ? "./images/icon-menu-close.svg" : "./images/icon-menu.svg"
          }
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-2"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-16 right-0 w-[70%] h-full`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-xl ${
                  active === nav.title ? "text-black" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
