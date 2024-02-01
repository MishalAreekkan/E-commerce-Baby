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
    <div style={{display:'flex',justifyContent:'center'}}  >
      {user && user.cart.map((adding) => (
        <div key={adding.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={adding.image} />
            <Card.Body>
              <Card.Title>{adding.title}</Card.Title>
              <Card.Text>
                {adding.description}
              </Card.Text>
              <Card.Text>
                {adding.price * adding.quantity}
              </Card.Text>
              <Card.Text>
                <button onClick={() => incre(adding)}>+</button>
                Quantity:{adding.quantity}
                <button onClick={() => decre(adding)} >-</button>
              </Card.Text>
              <Button variant="primary" onClick={() => nav("/")}>Buy Now</Button>
              <Button variant="primary" className='ms-3' onClick={() => remove(adding.id)}>Remove</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
          <span> {user&&<>total :{user.cart.reduce((acc,curr)=>acc += curr.price*curr.quantity,0)}</>}
          </span>
    </div>
  )
}
export default Addtocart
