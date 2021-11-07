
import React, {} from 'react';


import {
    AuthPage,
    LogoContainer,
    Text,
    
  } from '../../styles/authform';

  
  const Register_api = async (username, password, email, first_name, last_name, success, fail) => {
    const response = await fetch(
            `http://127.0.0.1:8000/api/auth/register`,
            // `${process.env.REACT_APP_API_URL}/auth/Register/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email,
                "first_name": first_name,
                "last_name": last_name,
                
                })
            }
        );
    
    
    const text = await response.text();
    if (response.status === 201) {
        console.log("success", JSON.parse(text));
        success(JSON.parse(text));
    } else {
        console.log("failed", text);
        Object.entries(JSON.parse(text)).forEach(([key, value])=>{
        fail(`${key}: ${value}`);
        });
    }
  
    };


    function Signup() {

         





        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [first_name, setFirstName] = React.useState("");
        const [last_name, setLastName] = React.useState("");
        const [email, setEmail] = React.useState("");
        const [message, setMessage] = React.useState("");

        const token = localStorage.getItem("userToken");
        if (token) {
            console.log("credentials found, redirecting...");
            window.location = "/profile";
            return [];
        }

        const success = async (text)=> {
            console.log("Yeah! Authenticated!");
            await localStorage.setItem("userToken", text.token);
            window.location = "/profile";
        };

        const tryRegister = async (e) => {
            e.preventDefault();
            console.log("Registering in with", username, email);
            await Register_api(username, password, email, first_name, last_name, success, (text)=>{setMessage(text)});
        };

        return (
            
            <AuthPage className="card shadow-sm">

                <form className="card-body">
                    <LogoContainer>
                        Register System
                    </LogoContainer> 
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                     <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={(e)=>{setFirstName(e.target.value)}} value={first_name}/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                     <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={(e)=>{setLastName(e.target.value)}} value={last_name}/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                        <label htmlFor="username">username</label>
                    </div>
                     <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                        onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                        <label htmlFor="Password">Password</label>
                    </div>
                    <div style={{margin: "1em", color: "red"}}>{message}</div>

                    <div className="checkbox mb-3">
                        <label htmlFor="remember-me">
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={tryRegister}>Sign Up</button>
                        <hr />
                        
                        <Text>alreadly have an account <a href="/">Sign In</a></Text>
                        
                    

                   
                </form>

            </AuthPage>
            
        )
        
    }

    export default Signup;
    
    
