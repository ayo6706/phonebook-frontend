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



// export default login_api;

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

// export default Register_api;