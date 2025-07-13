/**
 * @file LogicDropdown.tsx
 * @description This file defines the LogicModal component for the Student Hub application.
 * 
 * @component LoginDropdown
 * @params {boolean} show - Determines if the dropdown is visible.
 * @params {function} onClose - Callback function to close the dropdown.
 * @params {function} onLogin - Callback function to handle login.
 * @params {string} [error] - Optional error message to display.
 * @returns {JSX.Element} The rendered LogicModal component.
 */
// Import Packages
import React, { useState } from "react";

// Import Styles
import "./LoginDropdown.css";

type LoginDropdownProps = {
    show: boolean;
    onClose: () => void;
    onLogin: (username: string, password: string) => void;
    error?: string;
};

const LoginDropdown: React.FC<LoginDropdownProps> = ({show, onClose, onLogin, error}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (!show) return null;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onLogin(username, password);
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
                        value={username}
                        onChange={e => setUsername(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="loginPassword" className="LoginLabel">Password</label>
                </div>
                {error && <div className="LoginError">{error}</div>}
                <button className="EnterBtn" type="submit">
                    Login
                </button>
                <a href="https://secure.ensinolusofona.pt/alteracao_password/f?p=133:2::::::" className="RecoverLink">
                    Recuperar password
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
