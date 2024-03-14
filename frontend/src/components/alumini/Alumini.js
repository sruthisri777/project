import {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
export default function Alumini(){
    const main_url=useSelector(state=>state.auth.url)
    let [id_no,setId_no]=useState("n191034");
    let url=main_url+'alumini'
    let [inputs, setInputs] = useState({});
    function addAnotherHandler(event){
        const keyy = document.getElementById("keyy").value
        document.getElementById("keyy").value=""
        const valuee= document.getElementById("valuee").value
        document.getElementById("valuee").value=""
        setInputs(values => ({...values, [keyy]: valuee}))
    }
    async function submitHandler(e){
        let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        console.log("inputss",inputs)
        window.alert("u clicked submit");
        console.log("id no is ",id_no)
        let body={"alumini_data":inputs,"id_no":id_no}
        console.log("body is ",body)
        let res=await axios.post(url,body,headers)
        console.log("the response after to backed is ",res)

    }
    function suggestionHandler(e){
        e.preventDefault()
        let a=e.target.name
        document.getElementById('keyy').value=a
        // window.alert(a)
    }
    return (
    <>
    
    <center><h1>Almuni page</h1></center><hr />
        <h3>To ease the search  use these suggested fields:</h3>
    <div className='container'>
            <h4>Suggestions:</h4>
            <button name='year' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Year of admisson</button>
            <button name='branch' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Branch</button>
            <button name='compnay_name' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Present Company name</button>
            
        </div><hr />
        {/* <form onSubmit={submitHandler}>

       
        id no:<input type="text" name="id_no" id="id_no" value={id_no} onChange={e=>setId_no(e.target.value)}/><br/>
            the key:<input type="text" name="the_key" id="keyy"/>
            <br/>
            value:<input type="text" name="the_value" id="valuee"/>
            <input type="button" onClick={addAnotherHandler}/><br/>
            <input type="submit"/>
        </form>
        <p>
            the admin will look into the provided data and once admin validates them they will be displayed(for authenticity this featerue is added)
        </p>
        */}
        <form onSubmit={submitHandler}>
            <center>
            <table>
                <tr>
                    <th>Id No.</th>
                    <td>
                        <input type="text" name="id_no" id="id_no" value={id_no} onChange={e=>setId_no(e.target.value)} /> <br />

                    </td>
                    <td></td>
                </tr>
                <tr>
                    <th>Key:</th>
                    <td>
                        <input type="text" name="the_key" id="keyy" />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <th>Value:</th>
                    <td>
                        <input type="text" name="the_value" id="valuee" />
                    </td>
                    <td><input type="button" onClick={addAnotherHandler} value={"+"}/></td>
                </tr>
            </table><br />
            <input type="submit" value={"Submit"}/>
            </center>
        </form>
        <br />
        <p>
            The admin will look into the provided data and once admin validates them they will be displayed(for authenticity this featerue is added)
        </p>

    </>)
}
