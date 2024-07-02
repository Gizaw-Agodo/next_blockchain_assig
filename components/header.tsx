import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full px-4 py-6 shadow-md z-10 ">
      <div className="flex items-center">
        <Logo width={130} height={150} />
      </div>
      <div className="hidden md:flex flex-row gap-5 text-white">
        <Link href={"/exchange"}>Exchange</Link>
        <Link href={"/last-transactions"}>Last Transactions</Link>
        <Link href={"/invite"}>Invite Friend</Link>
        <Link href={"/notifications"}>Notifications</Link>
      </div>
      <div className="hidden md:flex flex-row gap-4">
        <div className="px-2 py-1 hover:cursor-pointer bg-transparent border border-white text-white rounded-xl rounded-bl-none rounded-tr-none">
          LOG IN
        </div>
        <div className="px-2 py-1 hover:cursor-pointer border border-black text-white bg-light-button rounded-xl rounded-bl-none rounded-tr-none">
          SIGN UP
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center text-white md:hidden">
          <Link href={"/exchange"} className="py-2" onClick={toggleMenu}>Exchange</Link>
          <Link href={"/last-transactions"} className="py-2" onClick={toggleMenu}>Last Transactions</Link>
          <Link href={"/invite"} className="py-2" onClick={toggleMenu}>Invite Friend</Link>
          <Link href={"/notifications"} className="py-2" onClick={toggleMenu}>Notifications</Link>
          <div className="flex flex-col gap-2 mt-4">
            <div className="px-2 py-1 hover:cursor-pointer bg-transparent border border-white text-white rounded-xl rounded-bl-none rounded-tr-none">
              LOG IN
            </div>
            <div className="px-2 py-1 hover:cursor-pointer border border-black text-white bg-light-button rounded-xl rounded-bl-none rounded-tr-none">
              SIGN UP
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
