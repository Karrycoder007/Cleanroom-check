"use client"




import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ClientFeedback from "./components/ClientFeedback";
import LoadingScreen from "./components/LoadingScreen";
import Vision from "./components/Vision";
import IndustriesWeServe from "./components/IndustriesWeServe";

export default function Home() {
  return (
    <div>


        <LoadingScreen onFinish={undefined}/>
        <Hero/>
        <Vision/>
        <About/>
        <Services/>
        <IndustriesWeServe/>
        <Projects/>
        <ClientFeedback/>
      
    </div>
  );
}






