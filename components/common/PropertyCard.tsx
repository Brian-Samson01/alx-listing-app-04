import React from "react";
import { CardProps } from "../../interfaces";

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {property.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {property.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
