import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="flex  flex-row items-center justify-between w-full px-14  py-6 shadow-md  z-10">
      <div className="">
        <Logo width={130} height={150} />
      </div>
      <div className="flex flex-row gap-5 text-white">
        <Link href={"/exchange"}>Exchange</Link>
        <Link href={"/last-transactions"}>Last Transactions</Link>
        <Link href={"/invite"}>Invite Friend</Link>
        <Link href={"/notifications"}>Notifications</Link>
      </div>
      <div className="flex flex-row gap-4">
        <div
          className={`px-2 py-1  hover:cursor-pointer bg-transparent border border-white  text-white   rounded-xl rounded-bl-none rounded-tr-none`}
        >
          LOG IN
        </div>
        <div
          className={`px-2 py-1  hover:cursor-pointer  border border-black  text-white bg-light-button  rounded-xl rounded-bl-none rounded-tr-none`}
        >
          SIGN Up
        </div>
      </div>
    </div>
  );
};

export default Header;
