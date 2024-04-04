
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLAyout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLAyout;