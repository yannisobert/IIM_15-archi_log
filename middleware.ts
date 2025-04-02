import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET as string);
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
