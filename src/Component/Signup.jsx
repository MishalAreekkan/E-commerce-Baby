import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import signpic1 from "../assets/signpic1.jpg"
import { Userside } from '../App';
import "./Signup.css"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';

function Signup() {
  const inputref = useRef(null)
  const { data, setData } = useContext(Userside)
  const move = useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault()
    let username = inputref.current.username.value
    let email = inputref.current.email.value
    let password = inputref.current.password.value
    let conpassword = inputref.current.conpassword.value
    console.log(username, email, password);
    if (password === conpassword) {
      setData([...data, { username: username, email: email, password: password, cart: [] }])
      move('/login')
    } else {
      alert('Password is not matching!')
    }
  }
  console.warn(data);
  return (
    <div className='maindiv'>
      <form action="" ref={inputref} onSubmit={handlesubmit}>
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
          <MDBRow>
            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
              <img src={signpic1} />
            </MDBCol>
            <MDBCol md='6' className='position-relative'>
              <MDBCard className='my-5 bg-glass'>
                <MDBCardBody className='p-5'>
                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' pattern='[a-zA-Z]*' name='username' minLength={4} maxLength={16} type='text' required />
                  <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='email' name='email' required />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password' name='password' required />
                  <MDBInput wrapperClass='mb-4' label='confirm Password' id='form4' name='conpassword' type='password' required />
                  <button className='signbtn'>sign up</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  )
}

export default Signup

