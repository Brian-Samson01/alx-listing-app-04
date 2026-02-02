import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '../../../constants';

const properties = PROPERTYLISTINGSAMPLE.map((p, idx) => ({
  id: String(idx + 1),
  title: p.name,
  location: `${p.address.city}, ${p.address.state}`,
  price: p.price,
  image: p.image,
  description: `${p.category?.join(', ') ?? ''} - Rating ${p.rating}`,
}));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const property = properties.find((p) => p.id === String(id));

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  return res.status(200).json(property);
}
