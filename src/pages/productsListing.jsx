import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Product from '../components/product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from "react";


function ProductsListing() {
  const url = "https://fakestoreapi.com/products?limit=10";
  const [product, setProduct] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((info) => setProduct(info))
  }

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <>
    <Container>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Products</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
    <Container>
      <Row className='m-3'>
        {product.map((eachProduct, index)=>{
          return(
            <Col xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
              <Product productInfo={eachProduct} />
            </Col>
          )
        })}
      </Row>
    </Container>
    </>
  )
}

export default ProductsListing
