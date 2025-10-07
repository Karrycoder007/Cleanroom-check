import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  { title: "Cleanroom Panels", description: "Durable and modular panels for cleanroom construction.", imageUrl: "https://images.unsplash.com/photo-1615909695963-7e9e89ad8f2c?q=80&w=2070" },
  { title: "Cleanroom Doors", description: "Air-tight doors ensuring contamination-free environments.", imageUrl: "https://images.unsplash.com/photo-1588774069163-1d1c9dfb10df?q=80&w=2070" },
  { title: "Fire Doors", description: "Certified fire-resistant doors for safety and protection.", imageUrl: "https://images.unsplash.com/photo-1631365695431-0b0a0115d75a?q=80&w=2070" },
  { title: "Air Handling Units", description: "Efficient air management solutions for HVAC and cleanrooms.", imageUrl: "https://images.unsplash.com/photo-1618477462823-f8a8e4bb9f20?q=80&w=2070" },
  { title: "Fan Filter Unit", description: "Compact units for controlled airflow and filtration.", imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070" },
  { title: "Fan Coil Unit", description: "High-performance units for temperature control.", imageUrl: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=2070" },
  { title: "Ventilation & Exhaust Unit", description: "Powerful systems ensuring optimal air circulation.", imageUrl: "https://images.unsplash.com/photo-1598543204863-73d64698b6f3?q=80&w=2070" },
  { title: "Epoxy & Vinyl Flooring", description: "Smooth, hygienic flooring for cleanrooms and industries.", imageUrl: "https://images.unsplash.com/photo-1603791452906-c5f6b8f0b9cf?q=80&w=2070" },
  { title: "PVC & Aluminium Coving", description: "Coving solutions for clean edges and hygienic interiors.", imageUrl: "https://images.unsplash.com/photo-1602012760468-95b3c2ffb1a9?q=80&w=2070" },
  { title: "Cleanroom Equipment", description: "Comprehensive range of cleanroom furniture and tools.", imageUrl: "https://images.unsplash.com/photo-1602143402780-5f4d74c4b945?q=80&w=2070" },
  { title: "Dynamic & Static Passbox", description: "Safe material transfer systems for cleanroom use.", imageUrl: "https://images.unsplash.com/photo-1621583452463-b95c75c88509?q=80&w=2070" },
  { title: "Laminar Airflow", description: "Controlled unidirectional airflow for clean areas.", imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907d5c8f49?q=80&w=2070" },
  { title: "Air Showers", description: "Personnel decontamination systems for cleanroom entry.", imageUrl: "https://images.unsplash.com/photo-1578898887933-8d8c8c07a8c4?q=80&w=2070" },
  { title: "Bio Safety Cabinet", description: "Protective workspaces for handling biological materials.", imageUrl: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=2070" },
  { title: "Filter Cleaning Booth", description: "Efficient dust removal and filter cleaning systems.", imageUrl: "https://images.unsplash.com/photo-1615909696475-2a4e9d28dbf9?q=80&w=2070" },
  { title: "SS Lab Furnitures", description: "Durable stainless steel furniture for labs and cleanrooms.", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" },
  { title: "Cross Over Bench", description: "Designed for safe transition between clean zones.", imageUrl: "https://images.unsplash.com/photo-1581093588401-22a1d94fb703?q=80&w=2070" },
  { title: "Fume Hoods & Garment Cubicle", description: "Safety and storage for controlled environments.", imageUrl: "https://images.unsplash.com/photo-1603791452806-9f8a8dfb4c6e?q=80&w=2070" },
  { title: "HVAC Systems", description: "Complete heating, ventilation, and air conditioning solutions.", imageUrl: "https://images.unsplash.com/photo-1618477462823-f8a8e4bb9f20?q=80&w=2070" },
  { title: "Pre Fabricated Ducts", description: "Efficient air distribution through prefabricated ducts.", imageUrl: "https://images.unsplash.com/photo-1598543204863-73d64698b6f3?q=80&w=2070" },
  { title: "Solar Hybrid AC", description: "Eco-friendly air conditioning with solar integration.", imageUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28d?q=80&w=2070" },
  { title: "Air Purifier", description: "High-efficiency air purification systems for clean spaces.", imageUrl: "https://images.unsplash.com/photo-1616628188505-bd84725a7298?q=80&w=2070" },
  { title: "Dehumidifier", description: "Humidity control for cleanrooms and production areas.", imageUrl: "https://images.unsplash.com/photo-1608016535814-cb0f4ec0b6db?q=80&w=2070" },
  { title: "Air Curtains", description: "Air barrier systems to prevent contamination.", imageUrl: "https://images.unsplash.com/photo-1615966650071-fb1b6f0f1324?q=80&w=2070" },
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
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
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
