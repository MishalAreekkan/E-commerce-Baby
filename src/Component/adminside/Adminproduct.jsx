import React, { useContext, useEffect, useRef } from 'react'
import { Userside } from '../../App'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { TbTruckLoading } from "react-icons/tb";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Adminproduct() {
    const nav = useNavigate()
    const [show, setShow] = useState(false);
    const [update, setupdate] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setupdate(item)
        setShow(true)
    };
    const [basicModal, setBasicModal] = useState(false);
console.warn();
    const toggleOpen = () => setBasicModal(!basicModal);
    const { products, setProducts } = useContext(Userside)
    const inputref = useRef(null)
    const removed = (id) => {
        let removeditems = products.filter((x) => x.id !== id)
        setProducts(removeditems)
        // console.log(removeditems)
    }
    const submitted = (e) => {
        e.preventDefault()
        let title = inputref.current.title.value
        let edimage = inputref.current.edimage.value
        let decrip = inputref.current.decrip.value
        let price = inputref.current.price.value
        let data = products.find((item) => item.id === update.id)
        let newData = products.filter((item) => item.id !== update.id)
        data.title = title
        data.image =edimage
        data.description = decrip
        data.price = price
        setProducts([...newData, data])
        console.log(products);
        setShow(false)
    }
    const reversedTask = products.slice().reverse()
    // const editedItem = products.map((x)=>x.id==singleitem.id ?{
    //     ...x,
    //     name:nameref.current.value,
    //     type:genderref.current.value,
    //     price:priceref.current.value,
    //     img:imgref.current.value
    //   }:x )
    // console.log(reversedTask);
    // console.warn(products);
    const addinput = useRef(null)
    const addsubmit =(eve)=>{
        eve.preventDefault()
        let adtitle = addinput.current.adtitle.value
        let adimage = addinput.current.adimage.value
        let addecrip = addinput.current.addecrip.value
        let adprice = addinput.current.adprice.value
        let adquantity = addinput.current.adquantity.value
        const newlyadded = {title:adtitle,image:adimage,description:addecrip,price:adprice,quantity:adquantity}
        setProducts([...products,newlyadded]) 
        setBasicModal(!basicModal)
        console.log(products);
    }
    return (
        <div>
            {/* ///////////////////////////////////////remove product/////////////////// */}
            <>
                <h1 style={{ textAlign: "center" }}> Products by category </h1>
                <h3 style={{ textAlign: "center" }}>Can add a new Product <button style={{ backgroundColor: '#00b894', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }} onClick={toggleOpen}>Add</button></h3>
                {reversedTask.map((item) =>
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                        <MDBCard style={{ maxWidth: '940px', marginTop: '60px', boxShadow: '0 4px 8px rgba(0, 0, 0, 2)' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src={item.image} alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                            {item.description}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <small className='text-muted'>{item.price}</small>
                                        </MDBCardText>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                            <button style={{ backgroundColor: '#ff7675', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }} onClick={() => removed(item.id)}>Remove</button>
                                            <button style={{ backgroundColor: '#74b9ff', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }} onClick={() => handleShow(item)}>Update</button>

                                        </div>

                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </div>

                )}
                {/* ///////////////////////////////////update product////////////////////// */}
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Products Editing</Modal.Title>
                        </Modal.Header>
                        <form ref={inputref} onSubmit={submitted}>
                            <Modal.Body style={{ backgroundColor: "#a3b18a",color:"white",border:"b" }}><strong> Can change the Title,Description,Price,Image and Quantity of a product</strong></Modal.Body>
                            <Modal.Body  style={{ backgroundColor: "#a3b18a",color:"white" }}>
                                <label >Title</label>
                                <input name='title' defaultValue={update && update.title} /><br />
                                <label >Image</label>
                                <input name='edimage' defaultValue={update && update.image} /><br />
                                <label >Description</label>
                                <input name='decrip' defaultValue={update && update.description} /><br />
                                <label >Price</label>
                                <input name='price' defaultValue={update && update.price} /> <br />
                                <label >Quantity</label>
                                <input name='adquantity' defaultValue={update && update.quantity}/>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <button type='submit' >Edit</button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </>
                {/* //////////////////////////////addproduct//////////////////// */}
                <>
                    <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                        <MDBModalDialog>
                            <MDBModalContent>
                            <form ref={addinput} onSubmit={addsubmit}>
                                <MDBModalHeader>
                                    <MDBModalTitle><TbTruckLoading style={{ color: "black", backgroundColor: "yellow" }} /></MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody style={{ backgroundColor: "#a3b18a" }}>
                                    {/* <label > Id</label>
                                    <input name='adid' /> */}
                                    <label >Title</label>
                                    <input name='adtitle' required /><br />
                                    <label >Image Url</label>
                                    <input name='adimage' required /><br />
                                    <label >Description</label>
                                    <input name='addecrip' required /><br />
                                    <label >Price</label>
                                    <input name='adprice'  required/><br />
                                    <label >Quantity</label>
                                    <input name='adquantity' required />
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <button type='submit' style={{ backgroundColor: '#dad7cd', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }} onClick={toggleOpen} >close</button>
                                    <button type='submit' style={{ backgroundColor: '#00b894', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }}>Add</button>
                                </MDBModalFooter>
                                    </form>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                </>
            </>
            <h3> <button style={{ backgroundColor: '#00b894', color: '#fff', border: 'none', padding: '2px 50px', cursor: 'pointer' }} onClick={()=>nav("/adminuser")}>Back to Admin Section </button> </h3>
        </div>
    )
}
export default Adminproduct
