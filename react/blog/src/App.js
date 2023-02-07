import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // Destructuring 문법
  // State 왜 씀? => State 는 html 이랑 다르게 변경되면 자동 렌더링됨. 변경사항이 많은곳에 사용
  let [글제목, a] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [글내용, b] = useState('2월 17일 발행');

  // 리턴문 안에 병렬로 태그를 2개이상 사용 불가
  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] }</h4>
        <p>{ 글내용 }</p>
        <h4>{ 글제목[1] }</h4>
        <p>{ 글내용 }</p>
        <h4>{ 글제목[2] }</h4>
        <p>{ 글내용 }</p>
      </div>
    </div>
  );
}

export default App;
