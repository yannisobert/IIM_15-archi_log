import { NextApiRequest, NextApiResponse } from 'next';
import { addPee } from '@/services/peeMapService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { location, user } = req.body;
        const newPee = await addPee({ location, user });
        return res.status(201).json(newPee);
    } catch (error) {
        console.error('Error adding pee:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}