/**
 * @file LogicDropdown.tsx
 * @description This file defines the LogicModal component for the Student Hub application.
 * 
 * @component
 * @returns {JSX.Element} The rendered LogicModal component.
 */

// Import Packages
import React from "react";

// Import Styles
import "./LoginDropdown.css";

type LoginDropdownProps = {
    show: boolean;
    onClose: () => void;
    onLogin: () => void;
};

const LoginDropdown: React.FC<LoginDropdownProps> = ({show, onClose, onLogin}) => {

    if (!show) return null;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onLogin();
        onClose();
    }

    return (
        <div className="LoginDropdownContent">
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
