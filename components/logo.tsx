"use client";
import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";


interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
      <Image src={logo} width={width} height={height} alt="Picture of the user" />
  );
};

export default Logo;
