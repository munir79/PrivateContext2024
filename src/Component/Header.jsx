
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/registar'> Registar</Link>
            <Link to='/orders'>Order</Link>
        </div>
    );
};

export default Header;