import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Vérifier la présence du token (ici, on assume que le token est dans les cookies)
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));

        console.log('token')
        console.log(token)
        if (!token) {
            // Si pas de token, rediriger vers la page de login
//            router.push('/auth/login');
            return;
        }

        // Sinon, appeler l'API pour récupérer les informations de l'utilisateur avec le token
        const fetchUserData = async () => {
            const res = await fetch('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token.split('=')[1]}`,  // Extraire le token du cookie
                },
            });

            if (res.ok) {
                const data = await res.json();
                setUserData(data);
            } else {
                router.push('/auth/login'); // Si la récupération des données échoue, rediriger vers login
            }
        };

        fetchUserData();
    }, [router]);

    if (!userData) {
        return <p>Chargement...</p>;  // Afficher un message de chargement si les données ne sont pas encore récupérées
    }

    return (
        <div>
            <h1>Profil de l'utilisateur</h1>
            <p>Nom d'utilisateur: {userData.username}</p>
            {/* Ajoute d'autres informations utilisateur ici */}
        </div>
    );
};

export default Profile;
