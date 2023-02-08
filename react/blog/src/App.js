/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // Destructuring 문법
  // State 왜 씀? => State 는 html 이랑 다르게 변경되면 자동 렌더링됨. 변경사항이 많은곳에 사용
  let [글제목, a] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [글내용, b] = useState('2월 17일 발행');
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function changeTitle() {
    a(preArray => {
      const newArray = [...preArray];
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === '남자 코트 추천') {
          newArray[i] = '여자 코트 추천';
          break;
        }
      }
      return newArray;
    });
  }

  function updateLike(i) {
    setLike(preArray => {
      const likeArray = [...preArray];
      likeArray[i] += 1;
      return likeArray;
    })
  }

  function sortTitle() {
    a(preArray => {
      const sortArray = [...preArray];
      sortArray.sort();
      return sortArray;
    });
  }

  // 리턴문 안에 병렬로 태그를 2개이상 사용 불가
  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={ sortTitle }>가나다순 정렬</button>
      <button onClick={ changeTitle }>Change Title</button>
      <button onClick={ ()=> { setModal(!modal)} }>글수정</button>

      {
        글제목.map(function(title, i) {
          return (
          <div className='list' key={i}>
            <h4>{ title } <span onClick={ () => updateLike(i) }>👍</span> { like[i] } </h4>
            <p>{ 글내용 }</p>
          </div> )
        })
      }

      {
        modal == true? <Modal></Modal> : ''
      }

    </div>
  );
}

// Component => 태그를 간단하게 함수로 묶을 수 있음. function 을 분리하기 때문에 변수를 가져오기 어려움
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
