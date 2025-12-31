import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceSectionProps {
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  points,
  imageUrl,
}) => {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start text-gray-700 dark:text-gray-300"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const CleaningServices: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-black via-blue-500 to-black text-black dark:text-white">
      <ServiceSection
        title="Industrial Cleaning"
        description="Heavy-duty cleaning solutions for factories, warehouses, and production units."
        points={[
          "Degreasing and equipment sanitation",
          "Hazardous waste removal",
          "High-pressure cleaning of surfaces",
        ]}
        imageUrl="https://images.unsplash.com/photo-1581358723956-6ad0cd4fab45?w=600&auto=format&fit=crop&q=60"
      />

      <ServiceSection
        title="Home Cleaning"
        description="Professional home cleaning services to keep your living space fresh and hygienic."
        points={[
          "Deep kitchen and bathroom cleaning",
          "Dusting, vacuuming and mopping",
          "Custom plans for regular cleaning",
        ]}
        imageUrl="https://plus.unsplash.com/premium_photo-1661679038354-cc7279833968?q=80&w=2070&auto=format&fit=crop"
      />

      <ServiceSection
        title="Commercial Cleaning"
        description="Tailored cleaning solutions for offices, retail spaces, and restaurants."
        points={[
          "Office desk and electronics cleaning",
          "Carpet and floor maintenance",
          "Restroom sanitation and restocking",
        ]}
        imageUrl="/images/commercial-cleaning.jpg"
      />
    </div>
  );
};

export default CleaningServices;
