import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import shoes from './shoes.jpeg';
import data from './data.js';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components'
import Detail from './pages/detail.js';
import Cart from './pages/cart.js'
import axios from 'axios'
import { useQuery } from 'react-query';

function App() {

  let [shoe, setShoe] = useState(data);
  let navigate = useNavigate();
  let [btnNum, setBtnNum] = useState(0);
  let [load, setLoad] = useState(false);

  let result = useQuery('', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
  )

  // 로컬스토리지에 최근본 상품 저장
  useEffect(() => {
    let watched = localStorage.getItem('watched')
    if (watched == null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  function moreShoe(data) {
    setShoe(() => {
      let newShoe = [...shoe, ...data];
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
            <Nav.Link onClick={() => { navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            { result.isLoading ? '로딩중' : result.data.name}
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
              {
                btnNum > 1
                  ? null
                  : <button onClick={() => {
                    setLoad(true)
                    axios.get('https://codingapple1.github.io/shop/data' + (2 + btnNum) + '.json')
                      .then((response) => {
                        setLoad(false)
                        moreShoe(response.data)
                        setBtnNum(btnNum + 1)
                      })
                      .catch(() => {
                        setLoad(false)
                        console.log('요청실패')
                      })
                  }}>버튼</button>
              }
              {
                load == true
                  ? <div>로딩중입니다.</div>
                  : null
              }
            </Container>
          </>
        } />
        <Route path='/detail/:id' element={
          <Detail shoe={shoe} />
        } />

        <Route path='/cart' element={<Cart></Cart>} >
          
        </Route>

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
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.id + 1) + ".jpg"} width="350px" />
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
