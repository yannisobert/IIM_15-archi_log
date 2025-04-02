import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    const token = authorization.split(' ')[1];

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({ username: user.username });
    } catch (error) {
        res.status(401).json({ message: 'Token invalide ou expiré' });
    }
}
