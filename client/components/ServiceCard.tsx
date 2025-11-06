// components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
      <div className="text-green-600 text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-green-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
