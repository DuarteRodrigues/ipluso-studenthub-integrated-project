/**
 * @file UserDropdown.tsx
 * @description 
 * 
 * @component
 * @returns {JSX.Element} The rendered account options of the user once they're logged in.
 */

// Import Packages
import React, {useRef, useEffect} from "react";
import { useUser } from "../../store/UserContext.tsx";

// Import Styles
import "./UserDropdown.css";

// Define the types of the used props
type UserDropdownProps = {
    show: boolean;
    onClose: () => void;
    onLogout: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ show, onClose, onLogout}) => {
    const { user } = useUser();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Hide dropdown when clicking outside
    useEffect (() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="UserDropdownContent">
            <h4 style={{ margin: "0 0 0.2rem 0", color: "#b0073b" }}>
                { user?.username ? `Utilizador: ${user.username}` : "Utilizador não autenticado" }  
            </h4>
            <a href="/profile">Perfil</a>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default UserDropdown;