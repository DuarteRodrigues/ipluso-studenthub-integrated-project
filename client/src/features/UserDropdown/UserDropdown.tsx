/**
 * @file UserDropdown.tsx
 * @description 
 * 
 * @component
 * @returns {JSX.Element} The rendered account options of the user once they're logged in.
 */

// Import Packages
import React, {useRef, useEffect} from "react";

// Import Styles
import "./UserDropdown.css";

// Define the types of the used props
type UserDropdownProps = {
    show: boolean;
    onClose: () => void;
    onLogout: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ show, onClose, onLogout}) => {
    
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
            <a href="/profile">Profile</a>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default UserDropdown;