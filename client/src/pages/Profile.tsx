/**
 * @file Profile.tsx
 * @description Profile page component for the application.
 * 
 * @page Profile
 * @returns {JSX.Element} A profile page component that displays user information.
 */

// Import Packages
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Import Contexts
import { useUser } from "../store/UserContext.tsx";

// Import Components
import Footer from "../components/Footer/Footer.tsx";
import ProfileAdminLayout from "../layouts/ProfileAdminLayout.tsx";
import ProfileUserLayout from "../layouts/ProfileUserLayout.tsx";

const apiURL = process.env.REACT_APP_API_URL;

const ProfilePage: React.FC = () => {

    const { user } = useUser();

    const { data: userData, isLoading, error } = useQuery({
        queryKey: ['userProfile', user?.userId],
        queryFn: async () => {
            const res = await fetch(`${apiURL}/profile/${user?.userId}`);
            if (!res.ok) throw new Error ("Failed to fetch user profile");
            return res.json();
        },
        enabled: !!user?.userId // Only run if user is defined
    });

    console.log("User in ProfilePage:", user);

    if (!user || !user.username) return <div>Não autenticado</div>
    if (isLoading) return <div>A carregar perfil...</div>;
    if (error) return <div>Erro ao carregar perfil: {error.message}</div>;

    if (user.username && user.username.startsWith("p")) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: "1"}}>
                    <ProfileAdminLayout userData= {userData} />
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: "1"}}>
                    <ProfileUserLayout userData= {userData}/>
                </div>
                <Footer />
            </div>

        );
    }
};

export default ProfilePage;