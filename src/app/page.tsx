"use client"
import Image from "next/image";


import { motion } from 'framer-motion';
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ClientFeedback from "./components/ClientFeedback";

export default function Home() {
  return (
    <div>

        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <ClientFeedback/>
      
    </div>
  );
}






