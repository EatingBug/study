import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import shoes from './shoes.jpeg';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import Detail from './pages/detail.js';
import axios from 'axios'

function App() {

  let [shoe, setShoe] = useState(data);
  let navigate = useNavigate();

  function moreShoe(data) {
    setShoe(preArray => {
      let newShoe = [...shoe];
      newShoe.push(...data);
      return newShoe;
    })
  }

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
        <Route path='/detail/:id' element={<Detail shoe={shoe} />} />
        <Route path='/about' element={<About />} >
          {/* Nested Route */}
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>
        <Route path='/event' element={<Event />} >
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
        <Route path='/*' element={<div>없는 페이지</div>} />
      </Routes>
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((response) => {
            moreShoe(response.data)
          })
          .catch(() => {
            console.log('요청실패')
          })
      }}>버튼</button>
    </div>
  );
}

function Product(props) {

  let navigate = useNavigate();

  let DetailBtn = styled.button`
    background-color : yellow;
    color : black;
    padding : 10px;
  `

  return (
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.id + 1) + ".jpg"} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price} 원</p>
      <DetailBtn onClick={() => navigate('/detail/' + props.id)}>상세보기</DetailBtn>
    </Col>
  )
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  let navigate = useNavigate();

  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Nav.Link onClick={() => navigate('/event/one')}>one</Nav.Link>
      <Nav.Link onClick={() => navigate('/event/two')}>two</Nav.Link>

      <Outlet></Outlet>
    </div>
  )
}

export default App;
