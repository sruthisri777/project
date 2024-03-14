import axios from 'axios'
import { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import '../../App.css'
import Person from '../alumini/Person'
function Message(){
    return (
        <>
        <div class='container-fluid'>
            <ol>
                <li>to verify more persons click fetch persons</li>
                <li>to verify the current person click verify</li>
                <li>to deverify the current person click deverify</li>
                
            </ol>
        </div>
        </>
    )
}
export default function Admin(){
    let [id_no,setId_no]=useState("")
    let [alumini_data,setAlumini_data]=useState({})
    let key_of_data=1;
    let admin_cookie=localStorage.getItem("user")
    let [to_be_verified,setTo_be_verified]=useState(false)
    //this variable is for changing the data in the 2nd col
    //when it is true we render persons data to verify
    //else we render a comonent saying all are done
    let main_url=useSelector(state=>state.auth.url)
    let res=''
    let [res_id,setRes_id]=useState("")
   async function fetchAluminiToVerifyHandler(){
    
        res=await axios.get(main_url+'alumini/verify')
        console.log('res from alumini get verify',res)
        setId_no(res.data.id_no)
        if(res.status!=203){
        let res_id=res.data._id
       console.log("Res id ",res_id)
        res=res.data.data_of_alumini
        setRes_id(res_id)
        // res=JSON.stringify(res)
        // console.log(res,typeof(res.data))
        setAlumini_data(res)
        setTo_be_verified(true)
        }
        else{
            setTo_be_verified(false)
            window.alert("all are verified")
            setAlumini_data("all are verified")
        }
       
    
    }
    async function verfiyAluminiHandler(e){
        console.log("verify called",res_id)
            if(res_id!=''){
            let  headers= {
                'Content-Type': 'application/json'
              }
            e.preventDefault();
            let body={}
            body.id=res_id
            body.verify=true
            body.cookie=admin_cookie
            console.log("verify alumini cale")
            let response=await axios.post(main_url+'alumini/verify',body,{headers})
            if (response.status==200){
              setAlumini_data("vefied successfuly")
              setTo_be_verified(false)
              
            }
            else{
                setAlumini_data("u need to fetech alumin data to verify")
            }

            }
        }


        async function deVerfiyAluminiHandler(e){
            console.log("deverify called",res_id)
                if(res_id!=''){
                let  headers= {
                    'Content-Type': 'application/json'
                  }
                e.preventDefault();
                let body={}
                body.id=res_id
                body.verify=false
                body.admin_cookie=admin_cookie
                console.log("verify alumini cale")
                let response=await axios.post(main_url+'alumini/verify',body,{headers})
                if (response.status==200){
                  setAlumini_data("devefied successfuly")
                  setTo_be_verified(false)
                  
                }
                else{
                    setAlumini_data("u need to fetech alumin data to deverify")
                }
    
                }
            }
           
    

    return (
    <div className='container-fluid '>
        <div className='row'>
    <div className='col flex-grow-1 card flex-container2'>
    <div className="btn-group-vertical">
    <form>
        <input type="button" className='btn btn-primary' value="fetch alumin  verify" onClick={fetchAluminiToVerifyHandler}/>
    </form>
   
    <form>
        <input type="button" className='btn btn-secondary' value="verfiy the alumini" onClick={verfiyAluminiHandler}/>
    </form>

    <form>
        <input type="button" className='btn btn-danger' value="deverfiy the alumini" onClick={deVerfiyAluminiHandler}/>
    </form>
    </div>
    </div>
    <div className='col flex-grow-1 card flex-container2'>
   
    {/* {alumini_data} */}
    
    {to_be_verified?<Person id_no={id_no} person_data={alumini_data}/>:<Message/>}
    </div>
    </div>
    </div>
    )
    }