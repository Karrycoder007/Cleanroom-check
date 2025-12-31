import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  { title: "Cleanroom Panels", description: "Durable and modular panels for cleanroom construction.", imageUrl: "/cp26.jpg" },
  { title: "Cleanroom Doors", description: "Air-tight doors ensuring contamination-free environments.", imageUrl: "/cp2.jpg" },
  { title: "Fire Doors", description: "Certified fire-resistant doors for safety and protection.", imageUrl: "/cp3.jpg" },
  { title: "Air Handling Units", description: "Efficient air management solutions for HVAC and cleanrooms.", imageUrl: "/cp4.png" },
  { title: "Fan Filter Unit", description: "Compact units for controlled airflow and filtration.", imageUrl: "/cp5.jpg" },
  { title: "Fan Coil Unit", description: "High-performance units for temperature control.", imageUrl: "/cp6.webp" },
  { title: "Ventilation & Exhaust Unit", description: "Powerful systems ensuring optimal air circulation.", imageUrl: "/cp7.webp" },
  { title: "Epoxy & Vinyl Flooring", description: "Smooth, hygienic flooring for cleanrooms and industries.", imageUrl: "/cp8.jpg" },
  { title: "PVC & Aluminium Coving", description: "Coving solutions for clean edges and hygienic interiors.", imageUrl: "/cp9.jpg" },
  { title: "Cleanroom Equipment", description: "Comprehensive range of cleanroom furniture and tools.", imageUrl: "/cp10.jpg" },
  { title: "Dynamic & Static Passbox", description: "Safe material transfer systems for cleanroom use.", imageUrl: "/cp11.jpg" },
  { title: "Laminar Airflow", description: "Controlled unidirectional airflow for clean areas.", imageUrl: "/cp12.png" },
  { title: "Air Showers", description: "Personnel decontamination systems for cleanroom entry.", imageUrl: "/cp13.jpg" },
  { title: "Bio Safety Cabinet", description: "Protective workspaces for handling biological materials.", imageUrl: "/cp14.webp" },
  { title: "Filter Cleaning Booth", description: "Efficient dust removal and filter cleaning systems.", imageUrl: "/cp15.jpg" },
  { title: "SS Lab Furnitures", description: "Durable stainless steel furniture for labs and cleanrooms.", imageUrl: "/cp16.jpg" },
  { title: "Cross Over Bench", description: "Designed for safe transition between clean zones.", imageUrl: "/cp17.webp" },
  { title: "Fume Hoods & Garment Cubicle", description: "Safety and storage for controlled environments.", imageUrl: "/cp19.jpg" },
  { title: "HVAC Systems", description: "Complete heating, ventilation, and air conditioning solutions.", imageUrl: "/cp18.jpg" },
  { title: "Pre Fabricated Ducts", description: "Efficient air distribution through prefabricated ducts.", imageUrl: "/cp20.jpg" },
  { title: "Solar Hybrid AC", description: "Eco-friendly air conditioning with solar integration.", imageUrl: "/cp21.avif" },
  { title: "Air Purifier", description: "High-efficiency air purification systems for clean spaces.", imageUrl: "/cp22.webp" },
  { title: "Dehumidifier", description: "Humidity control for cleanrooms and production areas.", imageUrl: "/cp23.jpg" },
  { title: "Air Curtains", description: "Air barrier systems to prevent contamination.", imageUrl: "/cp24.webp" },
];

const Services: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gradient-to-r from-black via-blue-900 to-blue-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white mt-10">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Reliable & Tested
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
