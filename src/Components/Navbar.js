import React, { useState } from "react";

import logoImg from "./../img/logo-1.png";
import { Link } from "react-scroll";
import {
  FaFacebookSquare,
  FaGitSquare,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaSquarePinterest } from "react-icons/fa6";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dropDown = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-base-300 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Home
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Explore
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Discover
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                For Professionals
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Submit Photos
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Login
              </li>
            </a>
          </Link>
          <Link spy={true} smooth={true}>
            {" "}
            <a className="btn btn-ghost">
              {" "}
              <li className="my-4 py-4 border-b border-base-200 hover:bg-base-200 hover:rounded-md">
                Join Free!
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="bg-base-200">
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1">
          <a className="btn btn-ghost text-xl" href="#">
            <img width={"30px"} src={logoImg} alt="Logo image" /> AURA
          </a>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 ">
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost hover:bg-transparent ">
                  {" "}
                  <li>Home</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost  hover:bg-transparent">
                  {" "}
                  <li>Explore</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost  hover:bg-transparent ">
                  {" "}
                  <li>Discover</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                <a className="btn btn-ghost hover:bg-transparent ">
                  {" "}
                  <li>For Professionals</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost hover:bg-transparent ">
                  {" "}
                  <li>Submit Photos</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost hover:bg-transparent ">
                  {" "}
                  <li>
                    <div className="dropdown dropdown-bottom">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn bg-transparent "
                      >
                        <HiOutlineDotsHorizontal />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>About Aura</a>
                        </li>
                        <li>
                          <a>Pricing</a>
                        </li>
                        <li>
                          <a>License</a>
                        </li>
                        <li>
                          <a>Partnerships</a>
                        </li>
                        <li>
                          <a>Blog</a>
                        </li>
                        <li>
                          <a>Help</a>
                        </li>
                        <li>
                          <a>Join The Team</a>
                        </li>
                        <li>
                          <span className="flex justify-between">
                            <a>
                              {" "}
                              <FaFacebookSquare className=" text-lime-400" />
                            </a>
                            <a className=" text-lime-400">
                              {" "}
                              <FaLinkedin />
                            </a>
                            <a className=" text-lime-400">
                              {" "}
                              <FaGitSquare />
                            </a>
                            <a className=" text-lime-400">
                              {" "}
                              <FaSquarePinterest />
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn btn-ghost hover:bg-transparent ">
                  {" "}
                  <li>Login</li>
                </a>
              </Link>
              <Link spy={true} smooth={true}>
                {" "}
                <a className="btn bg-lime-400">
                  {" "}
                  <li>Join Free!</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && dropDown}</div>
        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
