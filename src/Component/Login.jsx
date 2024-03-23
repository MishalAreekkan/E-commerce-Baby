import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Userside } from '../App';
import { useState } from 'react';
import loginpic1 from "../assets/loginpic1.jpg"
import { FaUserNinja } from "react-icons/fa";
import "./Login.css"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
function Login() {
  const [basicModal, setBasicModal] = useState(false);

  const nav = useNavigate()
  const { data, setData, setUser, user } = useContext(Userside)
  const inputref = useRef(null)
  const toggleOpen = () => setBasicModal(!basicModal);
  const submit = (e) => {
    e.preventDefault()
    let logemail = inputref.current.logemail.value
    let logpassword = inputref.current.logpassword.value
    let userData = data.find((item) => item.email == logemail)
    if (logemail == "admin@gmail.com" && logpassword == "aa") {
      // toggleOpen()
      nav("/adminuser")

    }
    else if (userData && userData.password == logpassword) {
      setUser(userData)
      nav('/')
      console.log(user);
    } else {
      setUser(null)
      alert('invalid user')
    }

  }
  return (
    <>
      <div className='MianDiv'>
        <div className='diVstyle1'>
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol sm='6'>
                <div className='d-flex flex-row ps-5 pt-5'>
                  <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>
                <form action="" ref={inputref} onSubmit={(e) => submit(e)}>
                  <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' name='logemail' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' name='logpassword' type='password' size="lg" />
                    <button className='loginbtn'>Login</button>
                    <br />
                    <p className='ms-5'>Don't have an account?</p>
                    <button className='registerbtn' onClick={() => nav('/signup')}> Register here</button>
                  </div>
                </form>
              </MDBCol>
              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src={loginpic1}
                  alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* <div className='admindiv'>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle><FaUserNinja /></MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>Welcome to Admin section</MDBModalBody>

                  <MDBModalFooter>
                    <button onClick={toggleOpen}>Close</button>
                    <button onClick={() => nav("/adminuser")}>User Section</button>
                    <button onClick={() => nav("/adminproduct")} >Product Section</button>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Login


