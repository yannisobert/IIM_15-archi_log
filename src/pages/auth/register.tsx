import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push('/auth/login');
        } else {
            const data = await res.json();
            setError(data.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleRegister} className="flex flex-col gap-2">
                <input type="text" placeholder="Username" className="border p-2" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
            </form>
        </div>
    );
}
