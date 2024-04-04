import { useContext } from "react";
import { AuthContext } from "../PrivateContext/AuthProvider";
import { Link } from "react-router-dom";



const Home = () => {
const {user}=useContext(AuthContext);


    return (
        <div>
        {
            user?<p>{user.email}</p>:<Link to='/login'><button>LogIn</button></Link>
        }
          
        </div>
    );
};

export default Home;