import {useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Register(){
  const navigate=useNavigate()
  const main_url=useSelector((state)=>state.auth.url)
  let url=main_url+'register'
    let [inputs, setInputs] = useState({});
    let [passwordVisible, setPasswordVisible] = useState(false);
    function validateName(name) {
      const nameRegex = /^[a-zA-Z\s]*$/;
      return nameRegex.test(name);
    }
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    function validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return passwordRegex.test(password);
    }
  
   async function handleClick() {
        alert('You clicked me!');
let res=await axios.get(url)
res=res.data
console.log(res)
alert(res);
      }
      function onchangeHandler(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
     async function onsubmitHandler(e){
      let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        if (!inputs.email || !inputs.name || !inputs.password) {
          window.alert('Please enter all fields');
          return;
        }
        
        

        if (!validateEmail(inputs.email)) {
          window.alert('Please enter a valid email address');
          return;
        }
        if (!validateName(inputs.name)) {
          window.alert('Please enter a valid name (letters only)');
          return;
        }
        
        if (!validatePassword(inputs.password)) {
          window.alert('Please enter a password with at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character');
          return;
        }
        
       
        let body={"email":"email2","name":"name2","passowrd":"pass2"}
        body=inputs
        // let url1="https://mini-project-backend-xnqj.onrender.com/"
        // let url2="http://localhost:3001/register"
        let response=await axios.post(url,body,{headers})
        if(response.status==205){
          window.alert("usr alerdy register,please login")
        }
        else{
          window.alert("succsffuly registed")
          navigate("/Login")
        }
        console.log("submitted ",inputs)
        alert("submitted")
        navigate('/Login')
        
      }
      function onchangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
      }
    
      function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
      }

      // var form = document.getElementById("form");
      // form.style.left='50%';
      // form.style.position = 'absolute';
      // form.style.top = '60%';
      // form.style.left = '50%';
      // form.style.width = '400px';
      // form.style.padding = '40px';
      // form.style.transform = 'translate(-50%,-50%)';
      // form.style.background = 'rgb(0, 128, 128)';
      // form.style.boxSizing = 'border-box';
      // form.style.boxShadow = '0 10px 15px';
      // form.style.borderRadius = '20px';
      // form.style.border='none';

    return (
        <>
       {/*<p>register pge</p>
       <button onClick={handleClick}>
      Click me
    </button>*/}
    {/*<form onSubmit={onsubmitHandler}>
        email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
              name:  <input type="text" name="name" id="name" value={inputs.name} onChange={onchangeHandler}/><br/>
      password:  <input type="text" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <input type="submit"/>
    </form>*/}
    <center><h3><b>Registration Page</b></h3></center>
    <form onSubmit={onsubmitHandler}  id="form">
      <center>
      <table cellPadding={15} cellSpacing={15}>
        <tr>
          {/*<td style={{fontWeight:"bolder", fontSize:"large"}}>Email:</td>
          <td><input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler} /></td>*/}
          <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            </span>
            
            
            <input type="text" class="form-control" placeholder="Email" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
        <tr>
          {/*<td style={{fontWeight:"bolder", fontSize:"large"}}>Name:</td>
          <td><input type="text" name="name" id="name" value={inputs.name} onChange={onchangeHandler} /></td>*/}
          <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
            </span>
            
            <input type="text" class="form-control" placeholder="Name" name="name" id="name" value={inputs.name} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
        <tr>
           {/*<td style={{fontWeight:"bolder", fontSize:"large"}}>Password:</td>
            <td><input type="password" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/></td>*/}
          <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
              <path d={passwordVisible? "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm4-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" : "M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"} />
            </svg>
            </span>
            
            <input type={passwordVisible ? "text":"password"}  class="form-control" placeholder="Password" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
      </table><br />
      <input type="submit" value="Submit" id="btn" style={{borderRadius:"20px", border:"none", padding:"10px 20px", cursor:"pointer"}}/>
      </center>
    </form>
    
    {/*<p>u typeing {inputs.name}</p>*/}
        </>
    )
    
}