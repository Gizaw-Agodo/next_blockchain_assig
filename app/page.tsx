"use client";
import Header from "@/components/header";
import background from "/public/BG.png";
import Image from "next/image";
import AssetDataGrid from "@/components/assetDataGrid";
import TokenSwap from "@/components/tokenSwap";
import IntroSection from "@/components/Intro";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 h-full bg-cover bg-center z-0">
        <Image src={background}  alt="background" />
      </div>
      <div className="relative z-10">
        <Header />
        <IntroSection/>
        <AssetDataGrid/>
        <TokenSwap/>
      </div>
    </div>
  );
}
