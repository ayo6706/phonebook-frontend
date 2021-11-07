import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Profile() {
    const [APIData, setAPIData] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [contact_picture, setContactPicture] = useState('');
    const [is_favourite, setIsFavourite] = useState('');
    const [Id, setId] = useState(null);
    const [country_code, setCountryCode] = useState(0);
    const [phone_number, setPhoneNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalDescription, setModalDescription] = useState("");
    
    const [error, setError] = useState("");
    //  get method to fetch data from api
      useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/contacts/`, getOptions())     
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        }).catch((error)=>{
            
        if (error.response.status === 403){
            console.log("Token not valid");
              localStorage.removeItem("userToken");
            window.location = "/login";
            return [];
        }else{
            console.log(error);
        }
      })
        
    }, []);


   
    //post and update method from api 
    const postData = (e)=>{
      e.preventDefault();
      setError("");
      console.log("saving new", first_name, country_code, phone_number, contact_picture);
      if (first_name.length * country_code * phone_number === 0)
      
        setError("Please enter first Name, price and quantity");
        
        
    else {
        // post data method throught api

        
        
        let form_data = new FormData();
      // const imagedata = e.target.files['contact_picture'];
      // // image: e.target.files[0]

      
const fileInput = document.querySelector("#contact_picture");
// const formData = new FormData();

form_data.append("contact_picture", fileInput.files[0]);

      // form_data.append('contact_picture', imagedata);
      console.log(form_data.get('contact_picture'));
        // form_data.append('contact_picture', contact_picture);
        // data.get('inputname')
        // console.log(e.target.files[0]);
        form_data.append('first_name', first_name);
        console.log(first_name);
        form_data.append('last_name', last_name);
        console.log(last_name);
        form_data.append('country_code', country_code);
        form_data.append('phone_number', phone_number);
        
        form_data.append('is_favourite', is_favourite);
            
        if (Id === null){
              axios.post(`http://127.0.0.1:8000/api/contacts/`, form_data, 
            getOptions())
            .then((response)=>{
                return response;
                    // setShowModal(false);
            }).catch((err)=>{
                  if (err.response.status === 403){
                    console.log("Token not valid");
                    localStorage.removeItem("userToken");
                    window.location = "/login";
                    return [];
                }else{
                    console.log(err);
                }
                
            })

          }else{
            // update data method through api 
          let form_data = new FormData();
            // const imagedata = e.target.files['contact_picture'];
          // // image: e.target.files[0]
    
      
          const fileInput = document.querySelector("#contact_picture");
          // const formData = new FormData();

          form_data.append("contact_picture", fileInput.files[0]);

          // form_data.append('contact_picture', imagedata);
          console.log(form_data.get('contact_picture'));
          // form_data.append('contact_picture', contact_picture);
          // data.get('inputname')
          // console.log(e.target.files[0]);
          form_data.append('first_name', first_name);
          console.log(first_name);
          form_data.append('last_name', last_name);
          console.log(last_name);
          form_data.append('country_code', country_code);
          form_data.append('phone_number', phone_number);
          
          form_data.append('is_favourite', is_favourite);
      
        axios.put(`http://127.0.0.1:8000/api/contacts/${Id}`,  form_data, 
      getOptions()).then(() => {
              // history.push('/read')
          });
        setShowModal(false);
      }}
    };
  


  //   const state = {
  //     last_name: '',
  //     // content: '',
  //     // image: null
  //   };
  
  //  const handleChange = (e) => {
  //     this.setState({
  //       [e.target.id]: e.target.value
  //     })
  //   };

    // const setContactPicture = (e) => {
    //   this.setState({
    //     image: e.target.files[0]
    //   })
    // };

    const newContact = ()=>{
        setModalDescription("New Contact");
        setId(null);
        setFirstName("");
        // setLastNameId(null);
        setLastName("");
        setCountryCode(545);
        setPhoneNumber("");
        setContactPicture("");

        // setContactPicture =   target.files[0] ;
     
       
        setIsFavourite(false)
        setError("");
        setShowModal(true);
        // const itemInput = document.getElementById("itemInput");
        // setTimeout(()=>{itemInput && itemInput.focus()}, 1);
      };

      const editContact = (data)=>{
        setModalDescription("New Contact");
        setId(data.id);
        setFirstName(data.first_name);
        setPhoneNumber(data.phone_number);
        // setContactPicture(data.contact_picture);
        setCountryCode(data.country_code);
        setLastName(data.last_name);
        setIsFavourite(data.is_favourite);
        setError("");
        setShowModal(true);
        // const itemInput = document.getElementById("itemInput");
        // setTimeout(()=>{itemInput && itemInput.focus()}, 1);
      };
    

   

    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/contacts/`, getOptions)
        .then((response)=>{
            return response;
            // setAPIData(response.data);
        }).catch((err)=>{
            console.log(err);
        })    
        
        
    }

    const onDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/contacts/${id}`, getOptions())
        .then(() => {
            getData();
        })
    }

    const logout = async (e)=>{
      await localStorage.setItem("userToken",null);
      window.location = "/login";
    };

    function getOptions(){
        let options = {};
        const token = localStorage.getItem("userToken");
        if (token === null) {
        console.log("No credentials found, redirecting...");
        window.location = "/login";
        return [];
        }
        if(localStorage.getItem('userToken')){
            options.headers = { 
                
                // 'Content-Type': 'Application/JSON',
                // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                // 'Content-Type': 'multipart/form-data',
                'content-type': 'multipart/form-data',     
                // 'X-CSRFToken': csrftoken,           
                // 'boundary': '----WebKitFormBoundary7MA4YWxkTrZu0gW',
                // content_type='multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                'Authorization': `Bearer ${token}`,  
            };
            
        }
        return options;
    }
 
    
    return (

            <>
            <div style={{maxWidth: "800px", margin: "auto", marginTop: "1em", marginBottom: "1em",
                    padding: "1em"}} className="shadow">
              <div style={{display: "flex", flexDirection: "row"}}>
                <h3> Phone Book App</h3>
                <button className="btn btn-light" style={{marginLeft: "auto"}} onClick={logout}>Logout</button>
              </div>
            </div>
            <div className="container">
            <button className="btn btn-primary" style={{marginLeft: "auto"}}
                onClick={newContact}
              >Add New Contact</button>
              <table className="table table-hover caption-top">
                <thead className="table-light">
                  <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country Code</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
    
                  {APIData.map((row)=>
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.first_name} </td>
                      <td>{row.last_name}</td>
                      <td>{row.country_code}</td>
                      <td>{row.phone_number}</td>
                      {/* <td>{row.is_favourite}</td> */}
                      <td>
                          <button className="btn btn-light" style={{marginLeft: "auto"}}
                          onClick={()=>{editContact(row)}}
                              
                          >Edit</button>{" "}
                          <button className="btn btn-danger" style={{marginLeft: "auto"}}
                            onClick={() => onDelete(row.id)}
                          >Delete</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              
              <div style={{background: "#00000060"}}
                className={"modal " + (showModal?" show d-block":" d-none")} tabIndex="-1" role="dialog">
              <div className="modal-dialog shadow">
                <form>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modalDescription}</h5>
                    <button type="button" className="btn-close" onClick={()=>{setShowModal(false)}} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <input type="file" name="contact_picture" id="contact_picture" accept="image/png, image/jpeg" value={contact_picture} 
                      onChange={(e)=>{setContactPicture(e.target.value)}} 
                      // onChange={this.handleImageChange}
                      />
                    </div>
                    <label htmlFor="first_name">first Name</label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="first_name" id="first_name"
                              value={first_name} onChange={(e)=>{setFirstName(e.target.value)}}
                              placeholder="first Name"/>
                              
                      </div>
                    <label style={{marginTop: "1em"}}>Last Name</label>
                      <div className="form-group" >
                        <input type="text" className="form-control" placeholder="Last Name"
                              value={last_name} 
                              onChange={(e)=>{setLastName(e.target.value)}}
                              // onChange={this.handleChange}
                              name="last_name" />
                      </div>
                    <label style={{marginTop: "1em"}}>Country Code</label>
                      <div className="form-group">
                        <input type="number" className="form-control"
                              value={country_code} onChange={(e)=>{setCountryCode(e.target.value)}}
                              placeholder="country_code" name="country_code" />
                      </div>
                      <label style={{marginTop: "1em"}}>Phone Number</label>
                      <div className="form-group">
                        <input type="number" className="form-control"
                              value={phone_number} onChange={(e)=>{setPhoneNumber(e.target.value)}}
                              placeholder="phone_number" name="phone_number" />
                      </div>
                      <label style={{marginTop: "1em"}}>Favourite</label>
                      <div className="form-group">
                        <input value={is_favourite} onChange={(e)=>{setIsFavourite(e.target.value)}} type="checkbox" />
                      </div>

                      
                    <small className="form-text text-muted">{error}</small>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"  onClick={()=>{setShowModal(false)}} data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" onClick={postData}>Save changes</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
            
            </div>
                                       
           </>           
    )
}
