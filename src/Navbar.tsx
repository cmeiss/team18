// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLink {
    name: string;
    to: string;
}

interface NavbarProps {
    brand: NavbarLink;
    links: NavbarLink[];
}

const Navbar: React.FC<NavbarProps> = ({ brand, links }) => {
    return (
        <nav>
            <Link to={brand.to}>{brand.name}</Link>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
