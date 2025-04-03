
import {redirect} from 'next/navigation';
import {cookies} from "next/headers";

export async function getUserData() {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
        redirect("/auth/login")
    }

    try {
        const res = await fetch("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            // This ensures the request is fresh each time
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("Utilisateur non trouvé")
        }

        return res.json()
    } catch (error) {
        redirect("/auth/login")
    }
}

export default async function ProfilePage() {
    const userData = await getUserData()

    return (
        <div>
            <h1>Profil de l'utilisateur</h1>
            <p>Nom d'utilisateur: {userData.username}</p>
            {/* Affiche d'autres informations utilisateur ici */}
        </div>
    )
}

