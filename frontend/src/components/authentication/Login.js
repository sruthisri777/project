import {useState} from 'react'
import { UseSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_FAIL,LOGIN_SUCCESS,ADMIN_LOGIN } from '../features/auth/AuthSlice'
export default function Login(){
  const navigate = useNavigate();
  const main_url=useSelector((state)=>state.auth.url)
  let url=main_url+'login'
  const dispatch = useDispatch()
    let [inputs, setInputs] = useState({});
    const [showPassword, setShowPassword] = useState(false);
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
      {/*let  headers= {
            'Content-Type': 'application/json'
          }*/}
        e.preventDefault();
        if (!inputs.email || !inputs.password) {
          window.alert('Please enter email and password');
          return;
        }
        
        let  headers= {
          'Content-Type': 'application/json'
        }

        
        let body=inputs
       
        let response=await axios.post(url,body,{headers})
        console.log("submitted ",inputs)
        console.log(response)
        if(response.status==201){
          window.alert("welcom admin");
          localStorage.setItem("user",response.data.token) 
          dispatch(ADMIN_LOGIN())
          // window.location=url+'Admin'
          navigate('/Admin')
        }
        else if (response.status==205){
          window.alert("give valid details")
        }
        else{
          window.alert("succsffuly lgoin")
          localStorage.setItem("user",response.data.token) 
          dispatch(LOGIN_SUCCESS())
          navigate("/Profile")
          // console.log("tke",response.data.token)
          
          // window.location=(url+'Profile')
        }
        
      }
      const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    return (
        <>
        <div class="container d-flex justify-content-center">

       <p>login pge</p>
     
    <form onSubmit={onsubmitHandler}>
        email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
      password:  <input type={showPassword ? "text":"password"} name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          ></span><br />
      <input type="submit"/>
    </form>
    <p>you are  typing: {inputs.name}</p>
    </div>
    {/* <Link to='/admin'>got to amdin if u are admin</Link> */}
        </>
    )
}