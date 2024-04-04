import { useContext } from "react";
import { AuthContext } from "../PrivateContext/AuthProvider";



const Home = () => {
const AuthInfo=useContext(AuthContext);
console.log(AuthInfo);

    return (
        <div>
           <h3> This is Home For:{AuthInfo.Name} </h3>
          
        </div>
    );
};

export default Home;