
import React, {} from 'react';

import {
    AuthPage,
    LogoContainer,
    Text,
    
  } from '../../styles/authform';
//   import PropTypes from 'prop-types';


//   async function loginUser(credentials) {
//  return fetch('http://localhost:8080/api/auth/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

  const  login_api = async (username, password, success, fail) => {
            
    const response = await fetch(
            `http://127.0.0.1:8000/api/auth/login`,
            // `${process.env.REACT_APP_API_URL}/auth/login/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                "username": username,
                "password": password,
                })
                // body: JSON.stringify(credentials)
            }
        );
    
    
    const text = await response.text();
    if (response.status === 200) {
        console.log("success", JSON.parse(text));
        success(JSON.parse(text));
    } else {
        console.log("failed", text);
        Object.entries(JSON.parse(text)).forEach(([key, value])=>{
        fail(`${key}: ${value}`);
        });
    }
  
    };

    function Signin() {



        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const [message, setMessage] = React.useState("");

        // const tryloginin = async e => {
        //     e.preventDefault();
        //     const token = await loginUser({
        //       username,
        //       password
        //     });
        //     setToken(token);
        //   }
        
        
        
        // const token =  localStorage.getItem("userToken");
        // if (token) {
        //     console.log("credentials found, redirecting...");
        //     window.location = "/profile";
        //     return [];
        // }


        const success = async (text)=> {
            
            console.log("Yeah! Authenticated!");

            await localStorage.setItem("userToken", text.token);
            // const token = await localStorage.setItem("userToken", text.access);
            // const token = await login_api(username, password, success, (text)=>{setMessage(text)});
           
            // setToken(token);


            // const token = await loginUser({
            //     username,
            //     password
            //   });
            //   setToken(token);
 
            window.location = "/profile";
            //  navigate("/dashboard");
            
        };
 
        const tryLogin = async (e) => {
            e.preventDefault();
            console.log("Loggin in with", username, password);
            await login_api(username, password, success, (text)=>{setMessage(text)});
           
            
        };

        return (
            
            <AuthPage className="card shadow-sm">

                <form className="card-body">
                    <LogoContainer>
                        Login System
                    </LogoContainer> 
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                        <label htmlFor="username">username</label>
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
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={tryLogin}>Sign in</button>
                       
                       <hr />
                    {/* <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={tryloginin}>Sign inn</button> */}
                       
                       
                     <hr />

{/*                         
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
                        <hr /> */}
                        
                        <Text>Don't alreadly have an account <a href="/">Sign Up</a></Text>
                        
                    

                   
                </form>

            </AuthPage>
            
        )
        
    }
    // Signin.propTypes = {
    //     setToken: PropTypes.func.isRequired
    //   };

    export default Signin;
    
    
