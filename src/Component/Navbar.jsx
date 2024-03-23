import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Userside } from '../App';
import { IoLogOut } from "react-icons/io5";


const Navbars = () => {
  const nav = useNavigate()

  const { add, user,render, setUser, search, setSearch, products } = useContext(Userside)
  const logout = () => {
    setUser(null)
    nav('/login')
  }
  const searchbtn = (e) => {
    console.log(e);
    e.preventDefault()
    let searched = e.target[0].value
    if (!searched) {
      alert('Input has no words')
    } else {

      let searchedone = products.filter((x) => x.title.includes(searched))
      // console.log(searchedone);
      if (searchedone[0] !== undefined) {
        nav('/shop')
        setSearch(searchedone)
      } else {
        alert('no items')
      }
    }
  }
  return (
    <>
    <div style={{textAlign:"center",color:"white",backgroundColor:"black"}}>Free Shipping on orders above Rs 999</div>
    <Navbar expand="lg" style={{backgroundColor:"black",color:"white"}} sticky="top">
      
      <Container fluid>
        <Navbar.Brand onClick={() => nav('/')}> <strong style={{color:"white"}}>MotherCare</strong> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link as={Link} style={{color:"white"}} to="/">Home</Nav.Link>
            <Nav.Link as={Link} style={{color:"white"}} to='/shop'>Shop</Nav.Link>
            <Nav.Link as={Link} style={{color:"white"}} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} style={{color:"white"}} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Form onSubmit={searchbtn} className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
              />
            <Button variant="outline-success" type='submit'  className="d-flex align-items-center"><span>Search</span></Button>
            <BsCart3 style={{ width: "45px", height: "40px" }} onClick={() => nav("/cart")} />{user&&user.cart.reduce((acc,item)=>acc += item.quantity,0)}
            {!user ? <FaUserAlt onClick={() => nav('/login')} style={{ width: "45px", height: "40px" }} /> :
              <>
                <IoLogOut onClick={logout} style={{ width: "45px", height: "40px" }} />
                <p>{user.username}</p>
              </>
            }
          
          </Form>
        </Navbar.Collapse>
      </Container>
   </Navbar>
              </>
  )
}

export default Navbars
