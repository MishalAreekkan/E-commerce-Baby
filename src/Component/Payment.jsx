import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

function Payment() {
  return (
    <div>
     <h1 style={{textAlign:"center"}}>Payment Section</h1> 
      <MDBContainer className="py-5" style={{backgroundColor:"#065a60"}}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Biling details</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label="First name" id="form1" type="text" />
                </MDBCol>

                <MDBCol>
                  <MDBInput label="Last name" id="form2" type="text" />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number"
              />

              <hr className="my-4" />

              <MDBCheckbox
                name="flexCheck"
                value=""
                id="checkoutForm1"
                label="Shipping address is the same as my billing address"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="checkoutForm2"
                label=" Save this information for next time"
                defaultChecked
              />

              <hr className="my-4" />

              <h5 className="mb-4">Payment</h5>

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Credit card"
                checked
              />

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Debit card"
              />

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Paypal"
                wrapperClass="mb-4"
              />

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="Name on card"
                    id="form6"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    label="Name on card"
                    id="form7"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="3">
                  <MDBInput
                    label="Expiration"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn size="lg" block>
                Continue to checkout
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Summary</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping
                  <span>Gratis</span>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>$53.98</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
  )
}

export default Payment

