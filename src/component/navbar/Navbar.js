import React, { useState } from "react";
import { Link } from "react-router-dom";
import collegelogo from "../images/collegedekhologo.c96051fc.svg";
import redarrow from "../images/callsvgOrange.f1c1aae6.svg";
import arrow from "../images/mailOrange.441c4074.svg";
import instagram from "../images/instagram.fde86165.svg";
import facebook from "../images/facebook.a9df139a.svg";
import twitter from "../images/tweeter.d9fb9e15.svg";
import linkedin from "../images/linkedin.98d06e6a.svg";
import youtube from "../images/youtube.7cd62c01.svg";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi"; // Icons for Login and Search

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownData = {
    Colleges: [{ path: "/careers" }],
    Exams: [{ path: "/exams" }],
    Courses: [{ path: "/colleges" }],
    Careers: [{ path: "/colleges" }],
    "Latest Update": [{ path: "/latest-update" }],
    More: [{ path: "/more" }],
  };

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveMenu(menu);
      setIsDropdownOpen(true);
    }
  };

  return (
    <header className="bg-[#050038] text-white">
      {/* Top Bar (Contact Info and Social Links) */}
      <div className="hidden lg:flex items-center justify-between text-sm space-x-6 mx-auto px-20 py-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img src={redarrow} alt="Call Icon" className="h-5 w-5" />
            1800-572-9877
          </div>
          <div className="flex items-center gap-2">
            <img src={arrow} alt="Email Icon" className="h-5 w-5" />
            hello@collegedekho.com
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm">We’re on your favourite socials!</p>
          <div className="flex space-x-2">
            <img src={facebook} alt="Facebook" className="h-6 w-6" />
            <img src={instagram} alt="Instagram" className="h-6 w-6" />
            <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
            <img src={twitter} alt="Twitter" className="h-6 w-6" />
            <img src={youtube} alt="YouTube" className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-white mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
          <img src={collegelogo} className="h-12 w-auto" alt="CollegeDekho Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {Object.keys(dropdownData).map((menu, index) => (
            <div
              key={index}
              className="relative"
              onClick={() => handleMenuClick(menu)}
            >
              <p
                className={`${
                  activeMenu === menu
                    ? "bg-yellow-400 text-blue-900"
                    : "hover:text-yellow-400"
                } cursor-pointer text-lg p-2 rounded-md`}
              >
                <Link to={dropdownData[menu][0].path}>{menu}</Link>
              </p>
            </div>
          ))}
        </nav>

        {/* Right Section: Careers, Login, Search */}
        <div className="flex items-center space-x-4">
         
          <FiUser size={24} className="cursor-pointer hover:text-yellow-400" />
          <FiSearch size={24} className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && activeMenu && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 bg-white text-black shadow-lg rounded-md w-[80%] z-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {dropdownData[activeMenu].map((category, catIndex) => (
              <div key={catIndex}>
                <ul className="space-y-1">
                  <li className="text-sm hover:text-blue-500 cursor-pointer">
                    <Link to={category.path}>{category.path.replace("/", "")}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black p-4">
          <nav className="space-y-4">
            {Object.keys(dropdownData).map((menu, index) => (
              <Link
                key={index}
                to={dropdownData[menu][0].path}
                className="block text-lg"
              >
                {menu}
              </Link>
            ))}
            <Link to="/careers" className="block text-lg">
              Careers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
