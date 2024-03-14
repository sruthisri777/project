import {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
export default function Profile(){

    const main_url=useSelector((state)=>state.auth.url)
    let [profileData,setProfileData]=useState({"name":'sample name',"email":"sample mail"})
    const [isLoaded,setIsLoaded]=useState(false)
    const cookie=localStorage.getItem("user")
    useEffect(()=>{
       async function fetch_profile(){
        let  headers= {'Content-Type': 'application/json'}
       let  body={cookie:cookie}
        let res=await axios.post(main_url+'profile',body=body,headers=headers)
        console.log("res body of profile is",res.data.user1)
        setProfileData({
            "name":res.data.user1.name,
            "email":res.data.user1.email
       })
        
        setIsLoaded(true)
       }
       fetch_profile()

    },[])
    if(!isLoaded){
        return(
            <>
           
            profile page 
            will fetch you profile shortly
            <b>can have a loading effect here</b>
            </>
        )

    }
    else{
        return(<>
        profile data after useEffect<br/>
        name: {profileData.name}
        <br/>
        email: {profileData.email}
        
        </>)
        
    }
   
}