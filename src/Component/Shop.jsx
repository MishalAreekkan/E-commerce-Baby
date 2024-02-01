import React, { useContext, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom'
import { MockProducts } from '../DummyData/DummyProducts';
import './Shop.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Userside } from '../App';


function Shop() {
  const nav = useNavigate()
  const { title } = useParams()
  const { search, products } = useContext(Userside)
  const filtering = products.filter((x) => x.title == title)
  return (
    <div>
      <div>
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Filter</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => nav(`/doll`)}>Doll</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/toys`)}>Toys</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/dress`)}>Dress</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/footwear`)}>Footwear</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/strollers`)}>Strollers</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/carSeats`)}>Car Seats</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/sunglasses`)}>Sunglasses</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/headcaps`)}>Headcaps</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/gloves`)}>Gloves</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/pacifier`)}>Pacifier</Dropdown.Item>
            <Dropdown.Item onClick={() => nav(`/baby bottle`)}>baby bottle</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='divflex1'>
        {(search ? search : title == "shop" ? products : filtering).map((item) => (
          <div key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="primary" onClick={() => nav(`/${item.title}/${item.id}`)}>Show</Button>
              </Card.Body>
            </Card>
          </div>
        ))
        }
      </div>
      <button onClick={() => nav('/')}>home</button>
    </div>
  )
}

export default Shop



