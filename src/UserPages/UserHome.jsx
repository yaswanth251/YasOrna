import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Foot from "./Foot";
import Catalog from "./Catogery";
import {
  FaSearch,
  FaRegUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import Slider from "./Slider";
import Catogery from "./Catogery";
import Offers from "./Offers";

export default function UserHome({ name, email }) {
  const [showAccount, setShowAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => navigate("/UserLogin");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAccount(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative">
        {/* Top Banner */}
        <div className="bg-black text-white text-xs md:text-sm h-8 md:h-10 flex justify-center items-center text-center">
          SPARKLE & SAVE: 50% OFF on Stunning Jewelry! ✨💎
          <button className="ml-2 p-1 bg-yellow-500 text-black rounded-md">
            Shop
          </button>
        </div>

        {/* Navbar */}
        <nav className="relative flex items-center justify-between px-4 md:px-6 py-3 bg-gray-200 shadow-md">
          {/* Logo */}
          <div className="text-3xl font-bold text-orange-950 flex items-center">
            <span className="text-4xl">Y</span>asOrna
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex relative flex-1 mx-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for Jewelry..."
              className="w-full md:w-96 px-4 py-2 pl-10 pr-10 rounded bg-gray-50 focus:outline-none shadow-sm"
            />
            <div
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => navigate("/search")}
            >
              <BiCamera size={20} />
            </div>
            <div
              className="absolute bg-white p-[10px] z-100 rounded cursor-pointer text-gray-500 transform -translate-y-1/2 left-[23rem] top-[20px]"
              onClick={() => inputRef.current?.focus()}
            >
              <FaSearch size={20} />
            </div>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex items-center space-x-4 text-[#642828]">
            {/* Account */}
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setShowAccount(!showAccount)}
            >
              <FaRegUser size={24} />
              <span className="text-xs hidden md:block">ACCOUNT</span>
            </div>

            {/* Wishlist */}
            <Link to="/Wishlist" className="relative">
              <FaHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link to="/Cart" className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
                2
              </span>
            </Link>
          </div>
        </nav>

        {/* Account Dropdown */}
        {showAccount && (
          <div
            ref={dropdownRef}
            className="absolute top-14 right-4 bg-white p-4 shadow-lg rounded-lg w-64"
          >
            <button
              onClick={handleLogout}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <FaSignOutAlt size={18} />
            </button>
            <div className="flex flex-col items-center">
              <FaUser
                size={40}
                className="text-gray-500 border p-2 rounded-full bg-gray-200"
              />
              <p className="mt-2 font-bold">{name || "Guest"}</p>
              <p className="text-gray-600 text-sm">
                {email || "No Email Provided"}
              </p>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 py-4 flex flex-col items-center space-y-4">
            <Link to="/Necklace" className="hover:underline">
              Necklace
            </Link>
            <Link to="/Bangles" className="hover:underline">
              Bangles
            </Link>
            <Link to="/Earrings" className="hover:underline">
              Earrings
            </Link>
            <Link to="/Ring" className="hover:underline">
              Rings
            </Link>
          </div>
        )}

        {/* Categories */}
        <div className="hidden md:flex h-10 justify-center gap-10 items-center text-lg bg-gray-100">
          <Link to="/Necklace" className="hover:underline">
            Necklace
          </Link>
          <Link to="/Bangles" className="hover:underline">
            Bangles
          </Link>
          <Link to="/Earrings" className="hover:underline">
            Earrings
          </Link>
          <Link to="/Ring" className="hover:underline">
            Rings
          </Link>
        </div>
      </div>

      {/* Main Sections */}
    </>
  );
}
