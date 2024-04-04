import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/registar'> Registar</Link>
        </div>
    );
};

export default Header;