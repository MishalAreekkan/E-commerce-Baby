import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Userside } from '../App';
import { useNavigate } from 'react-router-dom';
function Addtocart() {
  const { user, data,setAdd, setRender, render,setUser } = useContext(Userside)
  const nav = useNavigate()
  const incre = (adding) => {
    setAdd(adding.quantity += 1)
    setRender(!render)
  }
  const decre = (adding) => {
    if (adding.quantity && adding.quantity > 1) {
      setAdd(adding.quantity -= 1)
      setRender(!render)
    }
  }
  const remove =(id)=>{
    let removeditem = user.cart.filter((item)=>item.id != id)
    user.cart = removeditem
    setRender(!render)
  }
   
  return (
    <div style={{display:'flex',justifyContent:'center',margin:"30px"}}  >
      {user && user.cart.map((adding) => (
        <div key={adding.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={adding.image} />
            <Card.Body>
              <Card.Title  style={{backgroundColor:"#2f3e46",textAlign:"center",color:"white"}}>{adding.title}</Card.Title>
              <Card.Text>
                {adding.description}
              </Card.Text>
              <Card.Text style={{textAlign:"center"}}>
               Rs {adding.price * adding.quantity}
              </Card.Text>
              <Card.Text style={{textAlign:"center"}}>
                <button onClick={() => incre(adding)}>+</button>
                Quantity:{adding.quantity}
                <button onClick={() => decre(adding)} >-</button>
              </Card.Text>
              <Button variant="primary" onClick={() => nav("/")}>Buy Now</Button>
              <Button variant="primary" className='ms-4' onClick={() => remove(adding.id)}>Remove</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
       <br /> <h3> Total Price = Rs:{user&&<>{user.cart.reduce((acc,curr)=>acc += curr.price*curr.quantity,0)}</>}</h3>
    </div>
  )
}
export default Addtocart
