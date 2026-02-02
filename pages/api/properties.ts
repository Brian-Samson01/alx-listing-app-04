import type { NextApiRequest, NextApiResponse } from "next";

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
};

const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Cozy Apartment Downtown",
    location: "New York, NY",
    price: 120,
    image: "/images/property-1.jpg",
    description: "A comfortable apartment in the heart of the city.",
  },
  {
    id: "2",
    title: "Beachside Bungalow",
    location: "Santa Monica, CA",
    price: 220,
    image: "/images/property-2.jpg",
    description: "Relaxing bungalow with ocean views.",
  },
  {
    id: "3",
    title: "Mountain Cabin",
    location: "Aspen, CO",
    price: 180,
    image: "/images/property-3.jpg",
    description: "Cozy cabin near the slopes.",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[] | { message: string }>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  res.status(200).json(sampleProperties);
}
