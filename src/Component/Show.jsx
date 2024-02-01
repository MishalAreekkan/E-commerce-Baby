import {useNavigate, useParams } from 'react-router-dom'
import { MockProducts } from '../DummyData/DummyProducts'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useContext, useEffect, useState} from 'react';
import { Userside } from '../App';
function Show() {
  const nav = useNavigate()
  const { add, setAdd,data,user,setRender,render } = useContext(Userside)
  const { id } = useParams()
  const finding = MockProducts.find((x) => x.id == id)
 
  const cartHandler = ()=>{
    let cartData = user.cart.find((item)=>item.id==finding.id)
    if(!cartData){
      user.cart.push(finding)
    }else{
      cartData.quantity += 1
    }
    setRender(!render)
  }
console.log(data);
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={finding.image} />
        <Card.Body>
          <Card.Title>{finding.title}</Card.Title>
          <Card.Text>
            {finding.description}
          </Card.Text>
          <Card.Text>
            {finding.price}
          </Card.Text>
          <Button variant="primary">Buy now</Button>
          <Button variant="primary" className='ms-3' onClick={user?cartHandler:()=>nav('/login')}>Add To CART</Button>
        </Card.Body>
      </Card>
    </div>
  )
}



export default Show
