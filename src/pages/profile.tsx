import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const Profile = ({ userData }) => {
    const router = useRouter();

    if (!userData) {
        router.push('/auth/login');
        return null;
    }

    return (
        <div>
            <h1>Profil de l'utilisateur</h1>
            <p>Nom d'utilisateur: {userData.username}</p>
            {/* Affiche d'autres informations utilisateur ici */}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = context.req.cookies.token;

    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    try {
        const res = await fetch('http://localhost:3000/api/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error('Utilisateur non trouvé');
        }

        const userData = await res.json();

        return {
            props: { userData },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }
};

export default Profile;
