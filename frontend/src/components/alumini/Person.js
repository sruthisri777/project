export default function Person({person_data,id_no}){
    if(!person_data || !id_no){
        return<>
        <h1>id:{id_no}</h1>
        person didi not have full detals
        </>
    }
    let x=JSON.stringify(person_data)
    //we get a single persons data as a object 
    const items=Object.keys(person_data).map(attrribute=>
    <>
    <div className="row">
    <div className="col">{attrribute}</div>
    <div className="col">{person_data[attrribute]}</div>
   </div>
    </>
    
    )
    
    return <>
    <h1>id:{id_no}</h1>
    <div className='container '>
        {items}
        {/* {x} */}
    </div>
  
    </>
}