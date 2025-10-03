import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <style>
                {`
                    :root {
                        --dark-bg: #1f2937;
                        --dark-text: #fff;
                        --light-bg: #fff;
                        --light-text: #1f2937;
                        --link-hover: #2563eb;
                        --border-color: #e5e7eb;
                    }

                    body {
                        font-family: ui-sans-serif, system-ui, sans-serif;
                        margin: 0;
                        line-height: 1.5;
                    }

                    .navbar {
                        background-color: var(--light-bg);
                        border-bottom: 1px solid var(--border-color);
                    }

                    .container {
                        max-width: 1280px;
                        margin: 0 auto;
                        padding: 1rem;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .logo {
                        display: flex;
                        align-items: center;
                        gap: 0.75rem;
                    }

                    .logo-text {
                        font-size: 1.5rem;
                        font-weight: 600;
                        color: var(--light-text);
                    }

                    .menu-toggle-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0.5rem;
                        width: 2.5rem;
                        height: 2.5rem;
                        font-size: 0.875rem;
                        color: #6b7280;
                        border-radius: 0.5rem;
                        border: none;
                        cursor: pointer;
                        background-color: transparent;
                    }

                    .menu-toggle-button:hover {
                        background-color: #f3f4f6;
                    }

                    .menu-toggle-button:focus {
                        outline: 2px solid;
                        outline-offset: 2px;
                        outline-color: #9ca3af;
                    }

                    .menu-toggle-button-icon {
                        width: 1.25rem;
                        height: 1.25rem;
                    }

                    .navbar-menu {
                        display: none;
                        width: 100%;
                        margin-top: 1rem;
                        padding: 1rem;
                        border: 1px solid var(--border-color);
                        border-radius: 0.5rem;
                        background-color: #f9fafb;
                    }

                    .navbar-menu.open {
                        display: block;
                    }

                    .nav-list {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .nav-link {
                        display: block;
                        padding: 0.5rem 0.75rem;
                        color: #1f2937;
                        border-radius: 0.25rem;
                        text-decoration: none;
                        transition: background-color 0.2s ease, color 0.2s ease;
                    }
                    
                    .nav-link.active,
                    .nav-link:hover {
                        background-color: #f3f4f6;
                        color: var(--link-hover);
                    }
                    
                    .nav-link.active {
                        color: #fff;
                        background-color: var(--link-hover);
                    }

                    .nav-link.active:hover {
                        color: #fff;
                    }

                    /* Desktop Styles */
                    @media (min-width: 768px) {
                        .menu-toggle-button {
                            display: none;
                        }

                        .navbar-menu {
                            display: block;
                            width: auto;
                            margin-top: 0;
                            padding: 0;
                            border: none;
                            background-color: transparent;
                        }

                        .nav-list {
                            flex-direction: row;
                            gap: 2rem;
                        }

                        .nav-link {
                            padding: 0;
                            background-color: transparent;
                        }
                        
                        .nav-link.active {
                            color: var(--link-hover);
                            background-color: transparent;
                        }

                        .nav-link:hover {
                            color: var(--link-hover);
                            background-color: transparent;
                        }
                    }
                `}
            </style>
            <nav className="navbar">
                <div className="container">
                    <a href="#" className="logo">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" style={{height: '2rem'}}/>
                        <span className="logo-text">ai-Detect</span>
                    </a>
                    <button
                        id="menu-toggle-button"
                        className="menu-toggle-button"
                        aria-expanded={isOpen}
                        aria-controls="navbar-default"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="menu-toggle-button-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div id="navbar-default" className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <a href="#" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Services</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;