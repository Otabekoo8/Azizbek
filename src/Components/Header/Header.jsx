import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Header.css';
import userIcon from '../../assets/imgs/odamimg.png';
import logoimg from '../../assets/imgs/mexmonxonalogo.jpg';

Modal.setAppElement('#root');

const Header = () => {
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accountCreated = localStorage.getItem('accountCreated');
        if (accountCreated && localStorage.getItem('isLoggedIn') === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const openAccountModal = () => setIsAccountModalOpen(true);
    const closeAccountModal = () => {
        setEmail('');
        setUsername('');
        setPassword('');
        setError('');
        setIsAccountModalOpen(false);
    };

    const handleAccountAction = () => {
        if (email === '' || username === '' || password === '') {
            setError('Please fill in all fields');
            return;
        }

        if (!isLoggedIn) {
            // Account creation
            localStorage.setItem('accountCreated', 'true');
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
        } else {
            // Login
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
        }
        closeAccountModal();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        openAccountModal();
    };

    const handleLoginClick = () => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            openAccountModal();
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logoimg} alt="Logo" className="logo-img" />
                <h1>Mexmon xonalar</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        {isLoggedIn ? (
                            <div className="user-info">
                                <img src={userIcon} alt="User" className="user-icon" />
                                <a href="#logout" onClick={handleLogout}>Logout</a>
                            </div>
                        ) : (
                            <a href="#login" onClick={handleLoginClick}>Login</a>
                        )}
                    </li>
                </ul>
            </nav>

            <Modal
                isOpen={isAccountModalOpen}
                onRequestClose={closeAccountModal}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>{isLoggedIn ? 'Login' : 'Create an Account'}</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={(e) => { e.preventDefault(); handleAccountAction(); }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">{isLoggedIn ? 'Login' : 'Create Account'}</button>
                </form>
            </Modal>
        </header>
    );
};

export default Header;
