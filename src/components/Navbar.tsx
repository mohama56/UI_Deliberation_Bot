import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const logoPath = '/CornellLogo.png';
const absoluteLogoPath = `${window.location.origin}/CornellLogo.png`;

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [logoSrc, setLogoSrc] = useState(logoPath);
    const [logoError, setLogoError] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const handleLogoError = () => {
        if (logoSrc === logoPath) {
            // If the relative path fails, try the absolute path
            console.log("Trying absolute path for logo");
            setLogoSrc(absoluteLogoPath);
        } else {
            // If both paths fail, hide the image
            console.log("Both logo paths failed");
            setLogoError(true);
        }
    };

    // Logo style with smaller size
    const logoStyle = {
        height: '30px',
        width: 'auto',
        marginLeft: '10px', // Changed from marginRight to marginLeft
        verticalAlign: 'middle'
    };

    // Container styles for better alignment
    const navbarContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    };

    // Logo container style to push it to the left
    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto' // This pushes everything else to the right
    };

    // Navigation links container style
    const navLinksStyle = {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '10px'
    };

    // Style for each navigation link
    const navLinkStyle = {
        padding: '8px 16px',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.95rem',
        color: '#e0e0e0'
    };

    // Style for active navigation link
    const activeNavLinkStyle = {
        ...navLinkStyle,
        background: 'linear-gradient(135deg, #3a86ff 0%, #8338ec 100%)',
        boxShadow: '0 4px 10px rgba(58, 134, 255, 0.3)',
        color: 'white'
    };

    // Style for hover state (will be applied via CSS)
    const navLinkHoverStyle = `
        .nav-link:hover {
            background: rgba(58, 134, 255, 0.15);
            transform: translateY(-2px);
        }
    `;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <style>{navLinkHoverStyle}</style>
            <div className="navbar-container" style={navbarContainerStyle}>
                <div className="logo" style={logoContainerStyle}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.6rem',
                        background: 'linear-gradient(90deg, #3a86ff, #8338ec)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Bloomfield Bot Reports
                    </Link>
                    {/* Logo moved here, after the text */}
                    {!logoError && (
                        <img
                            src={logoSrc}
                            alt="Cornell Logo"
                            className="cornell-logo"
                            style={logoStyle}
                            onError={handleLogoError}
                        />
                    )}
                </div>
                <ul style={navLinksStyle}>
                    <li>
                        <Link
                            to="/"
                            className="nav-link"
                            style={isActive('/') ? activeNavLinkStyle : navLinkStyle}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/definitions"
                            className="nav-link"
                            style={isActive('/definitions') ? activeNavLinkStyle : navLinkStyle}
                        >
                            Deliberation Guide
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rug-check"
                            className="nav-link"
                            style={isActive('/rug-check') ? activeNavLinkStyle : navLinkStyle}
                        >
                            Concepts
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/deliberation"
                            className="nav-link"
                            style={isActive('/deliberation') ? activeNavLinkStyle : navLinkStyle}
                        
                        >
                            Rug Checks
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/visuals"
                            className="nav-link"
                            style={isActive('/visuals') ? activeNavLinkStyle : navLinkStyle}
                        >
                            Visuals
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;