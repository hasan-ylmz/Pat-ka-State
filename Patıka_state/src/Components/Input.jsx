import { useState } from "react"

function Input() {
    const  [ınput, setInput] = useState({ name: "", email: "" })
  
    const onChangeInput = (e) =>{
        setInput({...ınput ,[e.target.name]: e.target.value});
    }


    return (
    <>
        <p>Name</p>
        
        <input name="name" value={ınput.name} type="text" onChange={onChangeInput}/>
        <p>Email</p>
       
        <input name="email" value={ınput.email} type="text" onChange={onChangeInput}/>
       <br />
        {ınput.name} {ınput.email}
    
    </>
  )
}

export default Input