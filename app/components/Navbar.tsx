"use client";

import { Navbar } from "flowbite-react";
// import toggleIcon from './../../public/images/icon-menu.svg';

const toggleIcon = () => (
  <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
      <path d="M0 0h40v3H0z" />
    </g>
  </svg>
);

export default function DefaultNavbar() {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        <img
          alt="Web News Logo"
          className="mr-3 h-6 sm:h-9"
          src="./images/logo.svg"
        />
      </Navbar.Brand>
      <Navbar.Toggle barIcon={toggleIcon} />
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          <p>About</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          New
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          Popular
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          Trending
        </Navbar.Link>
        <Navbar.Link href="#" className="border-0 hover:text-soft-orange">
          Categories
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
