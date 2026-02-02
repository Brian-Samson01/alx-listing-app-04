import { Property } from "@/interfaces";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-6">{property.title}</h1>

      <p className="text-gray-600 mt-2">{property.description}</p>

      {property.location && (
        <p className="mt-4 text-sm text-gray-500">
          📍 {property.location}
        </p>
      )}

      {property.price && (
        <p className="mt-4 font-semibold text-lg">
          ${property.price} / night
        </p>
      )}
    </div>
  );
}
