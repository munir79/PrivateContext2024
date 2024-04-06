import { useContext, useState } from "react";
import { AuthContext } from "../PrivateContext/AuthProvider";
import { Link } from "react-router-dom";



const Home = () => {
    const [logoutsucess,setLogOutSucess]=useState('');
const {user,Logout}=useContext(AuthContext);
const handleLogout=()=>{
    Logout()
    .then(()=>{
        setLogOutSucess("Log out SUcessfully.");
    })
    .catch(error=>{
        console.log(error);
    })
}


    return (
        <div>
        {
          user?  <><p>{user.email}</p><button onClick={handleLogout}>LogOut</button>
           </>:<Link to='/login'><button>LogIn</button></Link>
        }
            {logoutsucess && <p>{logoutsucess} </p>}
        </div>
    );
};

export default Home;