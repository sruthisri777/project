import axios from 'axios'
import '../../App.css'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import Split_to_persons from './Split_to_person'
export function AluminiData(){
    let [inputs, setInputs] = useState({});

    let [have_alumini_data,setHave_alumini_data]=useState(false)
    let [count_of_alumini,setCount_of_alumini]=useState(0)
    const main_url=useSelector(state=>state.auth.url)
    let url=main_url+'alumini/getAlumini'
    let [alumini_data,setAlumini_data]=useState({})
    function addFilterHandler(event){

        let keyy = document.getElementById("keyy").value
        keyy="data_of_alumini."+keyy
        document.getElementById("keyy").value=""
        const valuee= document.getElementById("valuee").value
        document.getElementById("valuee").value=""
        setInputs(values => ({...values, [keyy]: valuee}))
       
        window.alert(JSON.stringify(inputs))
    }
    async function get4aluminiHanlder(e){
        let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        let body={}
        body.filters=inputs
        body.count=count_of_alumini;
        let res=await axios.post(url,body,{headers})
        if(res.status==200 && res.data.count>0){
        // console.log("req.body.count is ",body.count,"and res.data.alumini_data.alumini_data.count is ",res.data.count)
        setCount_of_alumini(count_of_alumini+res.data.count)
        setHave_alumini_data(true)
        // let x=res.data.alumini_data[0].data_of_alumini
        console.log('res.data. is ',res.data)
        setAlumini_data(res.data.alumini_data)
        }
        else{
            console.log("that is the end of alumini data",res.data.alumini_data)
        }
    }
    function suggestionHandler(e){
        e.preventDefault()
        let a=e.target.name
        document.getElementById('keyy').value=a
        // window.alert(a)
    }

if(!have_alumini_data){
    

    return (
        <div>
          <div className='container-fluid'>
        this is page where u can find alumini
        <form>
            <input type="button" value="get the next 4 alumini" onClick={get4aluminiHanlder}/>
        </form>
        </div>

        <div>
             <form >
             <div className='container'>
            suggestions:
            <button name='year' onClick={suggestionHandler}>year of admisson</button>
            <button name='branch' onClick={suggestionHandler}>branch</button>
            <button name='compnay_name' onClick={suggestionHandler}>present company name</button>
            
        </div>
            filter_name <input type="text" name="filter_name" id="keyy"/>   <br/>
            filter_value <input type="text" name="filter_value" id="valuee"/><br/>
            <input type="text"  value="add filter" onClick={addFilterHandler}/>
             </form>   
        </div>
    </div>
    )
}
else{
    return (
    <div className='container-fluid ' >
    <Split_to_persons persons_data={alumini_data}/>
        <div className='footer'>
        <form>
            <input type="button" value="get the next 4 alumini" onClick={get4aluminiHanlder}/>
        </form>
        </div>
        </div>
        )
}
}