import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Handles the navigation links
 * @returns two links
 */
const Navigation = () => {
    return (
        <nav>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/create">Create Exercise</Link></ul>
        </nav>
    );
};

export default Navigation;
