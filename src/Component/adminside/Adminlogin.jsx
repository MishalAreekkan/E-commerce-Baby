import React, { useRef } from 'react'
import "./Adlogin.css"
import { useNavigate } from 'react-router-dom'
function Adminlogin() {
    const inputref = useRef(null)
    const nav = useNavigate()
    const submited =(e)=>{
        e.preventDefault()
        let adname = inputref.current.adname.value
        let adpassword = inputref.current.adpassword.value
        nav("/admin")
        console.log(adname,adpassword);
    }
  return (
    <div className='main'>
    <div className='addiv'>
        <form ref={inputref} onSubmit={submited}>
            <label >Admin Name</label>
            <input type="text" name='adname' pattern='[admin]*' required  /><br />
            <label >Password</label>
            <input type="password" name='adpassword' pattern='[a]*' required /><br />
            <input  type='submit' />
        </form>
    </div></div>
  )
}

export default Adminlogin
