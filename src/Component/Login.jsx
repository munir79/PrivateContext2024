import { useContext, useState } from "react";
import { AuthContext } from "../PrivateContext/AuthProvider";


const Login = () => {
    const [sucess,setSucess]=useState('');
    const {signInUser}=useContext(AuthContext);
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        setSucess('');
        form.reset();
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setSucess("SucessFully Log in");
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
           <form onSubmit={handleSignIn} >
            <input type="email" name="email" id="" placeholder="enter your email" /><br />
            <input type="password" name="password" placeholder="enter your password" id="" /><br />
            <button type="submit">Log in </button>
            {
                sucess && <p>{sucess}</p>
            }
           </form>
        </div>
    );
};

export default Login;