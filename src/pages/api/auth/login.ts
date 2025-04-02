import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma'; // Prisma pour récupérer l'utilisateur

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe dans la base de données
    const user = await prisma.user.findUnique({
        where: { username },
    });

    console.log('A')
    // Si l'utilisateur n'existe pas ou le mot de passe est incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });

    }
    console.log('B')
    // Créer un token JWT
    const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
    );
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);

    return res.json({ message: 'Login successful' });
}
