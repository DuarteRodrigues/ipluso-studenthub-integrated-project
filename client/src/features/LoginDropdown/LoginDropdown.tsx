/**
 * @file LogicDropdown.tsx
 * @description This file defines the LogicModal component for the Student Hub application.
 * 
 * @component
 * @returns {JSX.Element} The rendered LogicModal component.
 */

// Import Packages
import React, {useRef, useEffect} from "react";

// Import Styles
import "./LoginDropdown.css";

type LoginDropdownProps = {
    show: boolean;
    onClose: () => void;
    onLogin: () => void;
};

const LoginDropdown: React.FC<LoginDropdownProps> = ({show, onClose, onLogin}) => {

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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onLogin();
        onClose();
    }

    return (
        <div className="LoginDropdownContent" ref={dropdownRef}>
            <form onSubmit={handleSubmit}>
                <div className="InputGroup">
                    <input
                        type="text"
                        id="login-username"
                        placeholder=" "
                        className="LoginInput"
                        required
                    />
                    <label htmlFor="login-username" className="LoginLabel">Username</label>
                </div>
                <div className="InputGroup">
                    <input
                        type="password"
                        id="login-password"
                        placeholder=" "
                        className="LoginInput"
                        required
                    />
                    <label htmlFor="loginPassword" className="LoginLabel">Password</label>
                </div>

                <button className="EnterBtn" type="submit">
                    Login
                </button>
                <a href="#" className="RecoverLink">
                    Recover password
                </a>
                <div className="LoginFooter">
                    <button
                        type="button"
                        className="CookiesBtn"
                        onClick={() => alert("Show cookies info")}
                    >
                        About our cookies
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginDropdown;
