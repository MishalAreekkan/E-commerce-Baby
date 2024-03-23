import React, { useContext, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Userside } from '../../App';
import { useNavigate } from 'react-router-dom';


function Adminuser() {
    const { data } = useContext(Userside)
    const nav = useNavigate()
    const [visible, setVisble] = useState(false)
    console.log(data);
    return (
        <>
            {!visible?(<><div style={{ display: "flex", justifyContent: "center" }}>
                <h1> Welcome to Admin Section</h1>
            </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button style={{ margin: "35px", background: "#1b3a4b", color: "white" }} onClick={() => setVisble(!visible)}>Userside</button>
                    <button style={{ margin: "35px", background: "#1b3a4b", color: "white" }} onClick={() => nav("/adminproduct")}>Productside</button>
                </div></>):(
                <div style={{ display: "flex", justifyContent: "center" }}>

                    <div>
                        <h1>WELCOME TO USER SECTION</h1>
                        <h4>Registered Users List</h4>
                        <MDBTable >
                            <MDBTableHead >
                                <tr>
                                    <th scope='col'>User Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Password</th>
                                </tr>
                            </MDBTableHead>
                            {data.map((item, index) => (
                                <MDBTableBody>
                                    <tr >
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>

                                    </tr>
                                </MDBTableBody>
                            ))}
                        </MDBTable>
                        <button style={{ margin: "35px", background: "#1b3a4b", color: "white" }}  onClick={()=>setVisble(!visible)}>Back to Admin section</button>
                    </div>
                </div>)}
        </>
    )
}

export default Adminuser
