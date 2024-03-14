import {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import The_date from './The_Date'
export default function TodoList(){
    const main_url=useSelector((state)=>state.auth.url)
    let [has_todo_data,setHasTodoData]=useState(false)//if we have already some todo data fetched from backend
    let [todoListData,setTodoListData]=useState([])//data that we are now making from input type box
    let [task1,setTask1]=useState('')
    let [todoData,setTodoData]=useState({})//data fetched from backend
function onChangeHandler(e){
    setTask1(e.target.value)
}
async function updateTodoHandler(){
    console.log("upated todo handler",todoData)

    let  headers= {'Content-Type': 'application/json'}
       let  body={cookie:cookie,todo:todoData}
       console.log("just before update todo handler body is ",body)
        let res=await axios.post(main_url+'todoList/update',body=body,headers=headers)
        console.log("update todo hanlder backend response code is ",res.status)
}
async function taskAdderHandler(e){
e.preventDefault()

setTodoListData([...todoListData,task1])
setTask1('')
}
function checkboxHandler(index) {
    let updatedTodoData = [...todoData]; // Create a copy of todoData
    updatedTodoData[index].status = !updatedTodoData[index].status; // Update the status
    setTodoData(updatedTodoData); // Update the state with the modified data
}

 async function tasksAdderHandler(e){
    e.preventDefault()
    
    console.log("todo list dat is ",todoListData)
    let  headers= {'Content-Type': 'application/json'}
    let  body={cookie:cookie,tasks:todoListData,the_date:The_date()}
    console.log("body is ",body)
    let res=await axios.post(main_url+'todoList/add',body=body,headers=headers)
    console.log("res body of todo list is",res.data)
    setTodoListData([])
}
    const [isLoaded,setIsLoaded]=useState(false)
    const cookie=localStorage.getItem("user")
    useEffect(()=>{
       async function fetch_todoList(){
        let  headers= {'Content-Type': 'application/json'}
       let  body={cookie:cookie}
        let res=await axios.post(main_url+'todoList/view',body=body,headers=headers)
        console.log("res body of todo list is",(res.data))
        setTodoData(res.data)
        console.log("todo daataa is ",todoData)
        if(res.status!=202){
            setHasTodoData(false)
        }
        else{
            setHasTodoData(true)
           
            console.log("after setting todo data ",(todoData),"and tododata[0] is ",todoData[0])
        }
        setIsLoaded(true)
       }
       fetch_todoList()

    },[])
    if(!isLoaded){
        return(
            <>
           
            todo page 
            will fetch you todo shortly
            <b>can have a loading effect here</b>
            </>
        )

    }
    else{
        return(<>
       todo data after useEffect<br/>
       <div>
       <h1>adding items</h1>
       <form>
            <input type="text" id='todo_task' name="todo_task"  onChange={onChangeHandler} value={task1}/>
            <input type="button" onClick={taskAdderHandler}/>
            <br/>
            <input type="button" value="save the todo list to backend" onClick={tasksAdderHandler}/>

       </form>
       </div>
       {has_todo_data?
       <div>todo data<br/>
        {todoData.map((item1,index)=>{
            return(
                <>
                {index}
                <input type="checkbox" value={item1.status} onChange={()=>checkboxHandler(index)}/>{item1.task}<br/>

                </>
            )
        })}
    <input  type='button' onClick={updateTodoHandler} value="update to do"/>
       </div>:<div></div>}

       
        </>)
        
    }
   
}