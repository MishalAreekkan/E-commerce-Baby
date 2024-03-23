import { useNavigate, useParams } from 'react-router-dom'
import { MockProducts } from '../DummyData/DummyProducts'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useContext, useEffect, useState } from 'react';
import { Userside } from '../App';
function Show() {
  const nav = useNavigate()
  const { data, user, setRender, render } = useContext(Userside)
  const { id } = useParams()
  const finding = MockProducts.find((x) => x.id == id)
  const cartHandler = () => {
    let cartData = user.cart.find((item) => item.id == finding.id)
  
    if (!cartData) {
      user.cart.push(finding)
    } else {
      cartData.quantity += 1
    }
    setRender(!render)
  }
  console.log(data);
  return (
    <div style={{ display: 'flex', justifyContent: 'center',margin:"30px"}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={finding.image} />
        <Card.Body>
          <Card.Title style={{backgroundColor:"#2f3e46",textAlign:"center",color:"white"}}>{finding.title}</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
            {finding.description}
          </Card.Text>
          <Card.Text style={{textAlign:"center"}}>
          Rs  {finding.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>nav("/payment")}>Buy now</Button>
          <Button variant="primary" className='ms-5' onClick={user ? cartHandler : () => nav('/login')}>Add To CART</Button>
        </Card.Body>
      </Card>
    </div>
  )
}



export default Show
