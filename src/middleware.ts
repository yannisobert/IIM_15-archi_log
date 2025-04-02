import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    // Récupérer le cookie "token"
    const token = req.cookies.get('token');

    if (!token?.value) {
        console.log("Pas de token trouvé, redirection vers login.");
        //return NextResponse.redirect(new URL('/auth/login', req.url)); // Rediriger vers login si pas de token
    }

    // Si le token est trouvé, autoriser l'accès à la page suivante
    return NextResponse.next();
}

// Appliquer ce middleware uniquement à la page /profile
export const config = {
    matcher: ['/profile'],
};
