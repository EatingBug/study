import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import shoes from './shoes.jpeg';
import data from './data.js';
import { useState } from 'react';

function App() {

  let [shoe] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Category</Nav.Link>
            <Nav.Link href="#pricing">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + shoes + ')' }}></div>

      <Container>
        <Row>
          {
            shoe.map(function (a, i) {
              return (
                <Product title={shoe[i].title} content={shoe[i].content} price={shoe[i].price} />
              )
            })
          }
        </Row>
      </Container>

      <Button variant="primary">Primary</Button>
    </div>
  );
}

function Product(props) {

  return (
    <Col>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price} 원</p>
    </Col>
  )
}

export default App;
