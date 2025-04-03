import { NextApiRequest, NextApiResponse } from 'next';
import { getPeeData } from '@/services/peeMapService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const peeData = await getPeeData();
        console.log('Pee data fetched successfully:', peeData);
        return res.status(200).json(peeData);
    } catch (error) {
        console.error('Error fetching pee data:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}