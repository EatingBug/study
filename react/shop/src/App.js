import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import gromit from './gromit.jpeg';

function App() {
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

      <div className='main-bg' style={ {backgroundImage : 'url('+gromit+')' }}></div>

      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          </Col>
        </Row>
      </Container>

      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
