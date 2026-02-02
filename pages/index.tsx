import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/common/PropertyCard";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading properties...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
  <PropertyCard key={property.id} property={property} />
))}

    </div>
  );
}
