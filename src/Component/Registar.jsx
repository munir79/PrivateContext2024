import { useContext, useState } from "react";
import { AuthContext } from "../PrivateContext/AuthProvider";


const Registar = () => {
    const [sucess,setSucess]=useState('');
const {CreateUSer}=useContext(AuthContext);
    const handleRegister=(event)=>{
  event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    setSucess('');
    form.reset();
    CreateUSer(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        setSucess("sucessfully Registred User");
    })
    .catch(error=>{
        console.log(error);
    })
    
    }
    return (
        <div>
            <form onSubmit={handleRegister} >
                <input type="email" name="email" placeholder='enter your emaill' id="" /> <br />
                <input type="password" name="password" placeholder='enter your password' id="" /><br />
                <button type="submit">Registar</button>
                {
                    sucess && <p>{sucess} </p>
                }
            </form>
        </div>
    );
};

export default Registar;