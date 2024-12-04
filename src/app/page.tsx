"use client";

import HeroSection from "@/components/HomePage/HeroSection";
import ScrollingLogos from "../components/ScrollingLogos";
import MoreMoney from "@/components/HomePage/MoreMoney";
import BestRates from "@/components/HomePage/BestRates";
import OneBank from "@/components/HomePage/OneBank";
import BestMortgageRates from "@/components/HomePage/BestMortgageRates";
import ThousandsThankYou from "@/components/HomePage/ThousandsThankYou";
import PopularQuestions from "@/components/HomePage/PopularQuestions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingLogos />
      <MoreMoney />
      <BestRates />
      <OneBank />
      <BestMortgageRates />
      <ThousandsThankYou />
      <PopularQuestions />
    </>
  );
}
