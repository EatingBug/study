import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import shoes from './shoes.jpeg';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail.js';

function App() {

  let [shoe] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="#pricing">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">Home</Link>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + shoes + ')' }}></div>
            <Container>
              <Row>
                {
                  shoe.map(function (a, i) {
                    return (
                      <Product id={i} title={shoe[i].title} content={shoe[i].content} price={shoe[i].price} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<div>어바웃페이지</div>} />
      </Routes>


      <Button variant="primary">Primary</Button>
    </div>
  );
}

function Product(props) {
  return (
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.id + 1) + ".jpg"} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price} 원</p>
    </Col>
  )
}

export default App;
