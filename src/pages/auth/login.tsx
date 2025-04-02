import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('token', data.token);
            router.push('/');
        } else {
            const data = await res.json();
            setError(data.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
                <input type="text" placeholder="Username" className="border p-2" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
            </form>
        </div>
    );
}
