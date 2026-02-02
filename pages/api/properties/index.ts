import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '../../../constants';

// Map sample data to the client-facing shape used in the app
const properties = PROPERTYLISTINGSAMPLE.map((p, idx) => ({
  id: String(idx + 1),
  title: p.name,
  location: `${p.address.city}, ${p.address.state}`,
  price: p.price,
  image: p.image,
  description: `${p.category?.join(', ') ?? ''} - Rating ${p.rating}`,
}));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(properties);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
