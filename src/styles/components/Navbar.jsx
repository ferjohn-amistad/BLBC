import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="navbar">
        <div className="navbar__inner">
            <NavLink to="/" className="navbar__brand">
            BLBC
            </NavLink>

            <nav className="navbar__links">
                <NavLink to="/"
                    className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
                >
                Home
                </NavLink>

                <NavLink to="/schedule"
                    className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
                >
                Schedule
                </NavLink>

                <NavLink to="/register"
                    className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
                >
                Register
                </NavLink>
                <NavLink to="/login"
                    className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
                >
                Login
                </NavLink>
            </nav>
        </div>
        </header>
    )
}