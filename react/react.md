# React

> HTML, CSS, JS 개발을 편리하게 만들어주는 도구

<!-- TOC -->

- [React](#react)
    - [React 장점](#react-%EC%9E%A5%EC%A0%90)
    - [Part 1 : 블로그 제작 & 기초 문법](#part-1--%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%A0%9C%EC%9E%91--%EA%B8%B0%EC%B4%88-%EB%AC%B8%EB%B2%95)
        - [JSX 문법](#jsx-%EB%AC%B8%EB%B2%95)
        - [state](#state)
            - [state 값 변경원리#중요](#state-%EA%B0%92-%EB%B3%80%EA%B2%BD%EC%9B%90%EB%A6%AC%EC%A4%91%EC%9A%94)
        - [Component](#component)
        - [Map](#map)
        - [props](#props)
        - [이벤트 핸들러](#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%9F%AC)
        - [이미지 첨부방법](#%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%A8%EB%B6%80%EB%B0%A9%EB%B2%95)
        - [import / export](#import--export)
    - [라우팅](#%EB%9D%BC%EC%9A%B0%ED%8C%85)
        - [useNavigate](#usenavigate)
        - [페이지](#%ED%8E%98%EC%9D%B4%EC%A7%80)
        - [Nested Routes](#nested-routes)
        - [URL 파라미터 받기](#url-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EB%B0%9B%EA%B8%B0)
    - [Styled-Components](#styled-components)
    - [Lifecycle 과 useEffect](#lifecycle-%EA%B3%BC-useeffect)
        - [Lifecycle](#lifecycle)
        - [useEffect](#useeffect)
    - [ajax 로 서버와 통신](#ajax-%EB%A1%9C-%EC%84%9C%EB%B2%84%EC%99%80-%ED%86%B5%EC%8B%A0)
        - [Axios 를 사용한 서버 통신](#axios-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0)
            - [사용법](#%EC%82%AC%EC%9A%A9%EB%B2%95)
        - [fetch 를 이용한 GET/POST 요청 방법](#fetch-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-getpost-%EC%9A%94%EC%B2%AD-%EB%B0%A9%EB%B2%95)
    - [전환 애니메이션 만들기](#%EC%A0%84%ED%99%98-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0)
    - [props 로 state 변수를 주고받기 어려울 때](#props-%EB%A1%9C-state-%EB%B3%80%EC%88%98%EB%A5%BC-%EC%A3%BC%EA%B3%A0%EB%B0%9B%EA%B8%B0-%EC%96%B4%EB%A0%A4%EC%9A%B8-%EB%95%8C)
    - [Redux 이용하기](#redux-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0)
        - [사용법](#%EC%82%AC%EC%9A%A9%EB%B2%95)
        - [useSelector](#useselector)
        - [state 변수 변경하는 방법](#state-%EB%B3%80%EC%88%98-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
            - [useDispatch](#usedispatch)
        - [state 가 object/array 일 경우 변경하는 법](#state-%EA%B0%80-objectarray-%EC%9D%BC-%EA%B2%BD%EC%9A%B0-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B2%95)
    - [LocalStorage 를 사용한 데이터 저장](#localstorage-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5)
    - [React Query](#react-query)
    - [성능 개선](#%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0)
        - [개발자도구 & lazy import](#%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%8F%84%EA%B5%AC--lazy-import)
        - [재렌더링 막는 memo, useMemo](#%EC%9E%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%A7%89%EB%8A%94-memo-usememo)
            - [memo](#memo)
            - [useMemo](#usememo)
        - [useTransition, useDeferredValue](#usetransition-usedeferredvalue)

<!-- /TOC -->

<br>

## React 장점

- Single Page Application
- html 재사용 편리
- 같은 문법으로 React Native 앱개발 가능

## Part 1 : 블로그 제작 & 기초 문법

### JSX 문법

1. html 에 class 넣을 땐 className 을 사용한다.
2. 변수를 html에 넣을 때는 {중괄호} 를 사용
3. html 에 style 속성을 넣고 싶으면 `<div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>` { 속성명 : '속성값' } 방식으로 넣어야된다.
4. 조건문 사용방법
    - 삼항연산자를 사용해야한다.
    - `조건식 ? '참일때 출력값' : '거짓일때 출력값'`

<br>

### state

- 사용법
    - `let [a, b] = useState('남자 코트 추천');`
    - 일반 변수 대신 state 이용하여 잠깐 변수를 저장해둘 수 있다.

- 사용하는 이유(#중요)
    - **state 는 변동사항이 생기면 state 쓰는 html 도 자동으로 재렌더링 해준다.**
    - 그냥 변수를 html 에 사용하면 변경사항이 자동으로 반영되지 않음

- state 값 변경하기
    - state 는 state 변경함수를 써서 state 를 변경해야한다. => 변경함수를 안쓰면 html 재렌더링 안됨
    - `let [ 따봉, 따봉변경 ] = useState(0);`
        - 변경 방법 : `따봉변경(변경하려는 State 값)`


#### state 값 변경원리(#중요)

- state 변경함수(변경하려는 state값) 이 동작할 때 기존 state값 과 변경하려는 state 값을 비교하여 같으면 변경을 안한다.
    - **state 가 array, object 데이터일 때는 주소값을 비교함.**

- 다음코드가 동작하지 않는 이유는 `let copyArray = 글제목;` 에서 copyArray 가 기존 state 값과 같은 주소를 갖게되므로 값이 변경되도 변경사항이 반영되지 않는다.
    ```javascript
    let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);

    function changeState() {
        
        let copyArray = 글제목; // => let copyArray = [...글제목];
        copyArray[0] = '여자코트 추천';
        글제목변경(copy);
    }
    ```
<br>

### Component

> 많은 div 태그들을 한 단어로 줄이고 싶을 때 사용한다.

- 사용법
    ```javascript
    function Modal() {
        return ( <div></div> )
    }

    let Modal = () => {
        return ( <div></div> )
    }
    ```

- 사용하는 경우
    - 사이트에 반복해서 출연하는 HTML 덩어리들
    - 내용이 매우 자주 변경될 것 같은 HTML 덩어리들
    - 다른 페이지를 만들고 싶다면 그 페이지의 HTML 내용을 하나의 Component 로 만드는 것이 좋다.
    - 다른 팀원과 협업할 때 웹페이지를 Component 단위로 나눠서 작업을 분배하기도 한다.

- html 태그짤 때 유의점
    - function return() 안에 태그를 넣는데, 두개의 태그를 병렬로 사용하면 안된다.
        - fragment 문법

- Component 는 복잡한 html 을 한 단어로 치환할 수 있다.
    - function 을 새로 만들어서 return() 에 합치고 싶은 html 태그를 넣으면 된다.

- 장단점
    - 장점
        - HTML 을 한 단어로 축약할 수 있다.
    - 단점
        - 함수가 분리되기 때문에 변수를 사용할 때 가져오기 어렵다.

- 유의사항
    - component 작명할 땐 영어대문자로 보통 작명한다.
    - function App(){} 내부에서 만들면 안된다.
        - App(){} 또한 Component 생성 문법이기 때문

### Map

> html 반복되는 태그들을 하나로 묶어줄 수 있다.

- array 자료 갯수만큼 함수안의 코드 실행
- 함수의 파라미터는 array 안에 있는 자료다.
- return 에 값을 넣으면 array 로 담아준다.

```javascript
let arr = [1,2,3];

arr.map(function(a, i) {
    return (
        <div className="list" key={i}>
            <h4>a</h4>
            <button>like[i]</button>
        </div>
    )
})
```
- map 안에 function 첫번째 인자는 arr 의 인자, i 는 0부터 arr이 길이만큼 늘어나는 인자
    - 유용한 파라미터 2개 사용가능

<br>

### props

> 부모 컴포넌트에서 자식 컴포넌트로 변수, 함수, state 를 쓰고 싶을 때 props 로 전송해서 쓸 수 있다.

- Modal 컴포넌트에서 내부에 글제목 state 를 사용하고 싶다면
    - 자식 컴포넌트에서 사용하고 싶은 곳에 `<자식컴포넌트 작명={state명}/>`
    - 자식컴포넌트 만드는 function에서 props라는 파라미터 등록 후 `props.작명` 으로 사용가능

    ```javascript
    function App (){
        let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);

        function changeModal() {
            // 모달 변경 로직
        }

        return (
            <div>
            <Modal 모달제목변경={ changeModal } 글제목={글제목}></Modal>
            </div>
        )
    }

    function Modal(props){
        return (
            <div className="modal">
            <h4>{ props.글제목[0] }</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={ props.모달제목변경 }>
            </div>
        )
    }
    ```
- 유의사항
    - 부모 -> 자식 컴포넌트로만 전송할 수 있다.

### 이벤트 핸들러

- 이벤트 버블링 : 이벤트가 상위태그로 전염되는 현상 있음.
    - `e.stopPropagation()` 으로 이벤트 버블링 방지 가능.
- `e.target.value` : 현재 이벤트가 발생한 곳의 값을 알려준다.

<br>

### 이미지 첨부방법

- css 에서 `background-image : url('경로')` 첨부하는 방법
- js 파일에서 `import image from '경로'` 로 import 하고 `<div style={{backgroundImage : 'url('+image+')'}}></div>` 로 html 에 style 로 가져오는 방법
- `<img src="/public 파일이름">` 로 public 에서 이미지 경로를 가져오는 방법
    - 주의사항
        - url 서브 경로를 사용할 경우 경로를 수정해줘야됨. `process.env.PUBLIC_URL + '파일경로'`

<br>

### import / export

- App.js 에서 외부 js 를 사용하고 싶을 때 import / export 를 사용한다.
- `data.js` (export)
    ```javascript
    let a = 10;
    let b = 100;
    let data = [
        {
            id : 0,
            title : "White and Black",
            content : "Born in France",
            price : 120000
        }
        ]
    // 변수 한개만 export 할 때
    export default data;
    // 변수 여러개 export 할 때
    export {a, b};
    ```
- `App.js` (import)
    ```javascript
    // 변수 한개를 import 할 때는 변수명을 자유롭게 작명가능
    import 변수명 from './data.js(data.js 경로)';
    // 변수 여러개를 import 할 때
    import {a, b} from './data.js';
    ```

- 분리된 js 파일에서 변수를 받아올 때는 `props` 를 사용하여 가져오면 된다.

<br>

## 라우팅

> 여러 페이지를 보여주고 싶을 때 사용하는 외부 라이브러리 `react-router-dom` 을 이용해서 링크에 해당하는 html 태그들을 보여줄 수 있다.

- 페이지를 나누고 싶으면 html 파일 여러개 만들면 가능하지만, React 는 html 파일을 하나만 사용함.
    - 그래서 React 에서는 다른 페이지 요청하면 내부 `<div>` 를 갈아치워서 만들어야됨
    - `react-router-dom` 이라는 외부 라이브러리를 설치해서 구현하면 쉬움

```javascript
import { Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
    </Routes>
  )
}
```
- `/detail`, `/about` URL 로 이동하면 `element` 속성에 있는 태그들을 Route 가 보여준다.
- Route 사용시 페이지 태그가 길어질 수 있으므로 외부 파일을 만들어서 `import / export` 사용을 권장한다.
- 페이지 이동은 `<Link to='/'>Home</Link>` 태그를 사용하여 이동할 수 있다.

<br>

### `useNavigate()`
- 페이지 이동기능을 만들 때 사용 (=Link 랑 같은기능)
    ```javascript
    function App() {
        let navigate = useNavigate();

        return (
            <button onClick={()=>{ navigate('/detail')}}>디테일로 이동</button>
        )
    }
    ```
    - 해당 버튼을 누르면 `/detail` 페이지로 이동가능
    - `navigate(2)` : 앞으로 2번 가기
    - `navigate(-1)` : 뒤로 1번 가기

### 404 페이지
- 유저가 이상한 경로로 접속했을 때 보여줄 수 있음
    ```html
    <Route path='*' element={ <div>없는페이지</div>}>
    ```
    - Route path 속성에 * 을 넣으면 앞에서 선언한 경로 외에 모든 경로에서 보여진다.

<br>

### Nested Routes

- 서브 경로를 만들 때 사용
    - `/about/member` , `/about/location` 이렇게 만들어도 되지만
        - `/about` + `/about/member` 태그를 합쳐서 보여주고 싶은 경우 Nested Routes 를 사용한다.
    ```html
    <Route path="/about" element={ <About/> } >  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
    </Route>
    ```
    ```javascript
    function About(){
        return (
            <div>
            <h4>about페이지임</h4>
            <Outlet></Outlet> // 하위 서브경로 태그들이 보여지는 곳
            </div>
        )
    }
    ```
- `<Outlet>` : nested routes 안의 element 들을 어디에 보여줄지 표기하는 곳 

### URL 파라미터 받기

```javascript
// App.js
<Route path='/detail/:id' element={<Detail shoe={shoe}/>} />

// Detail.js
let {id} = useParams();
```
- Route path 에 `/:id` 를 통해 URL 파라미터를 매칭시켜줄 수 있고, useParams 를 통해 파라미터 값을 가져올 수 있다.
- 파라미터에 해당하는 배열 변수값을 가져오기 위해서는 `props` 를 사용하여 `filter`, `find` 로 원하는 값을 분리할 수 있다.

<br>

## Styled-Components

> 컴포넌트가 많은 경우 원하지 않는 컴포넌트에 CSS 가 적용되거나, CSS 파일이 너무 길어져서 수정이 어려운 경우 컴포넌트에 스타일을 입혀서 사용하기 위한 도구

- 사용법
    ```javascript
    import styled from 'styled-components';

    let Box = styled.div`
        padding : 20px;
        color : grey
    `;
    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `;

    function Detail(){
    return (
        <div>
            <Box>
                <YellowBtn>버튼임</YellowBtn>
            </Box>
        </div>
        )
    }
    ```

- 장단점
    - 장점
        - CSS 파일을 오픈할 필요없이 JS 에서 바로 스타일을 넣을 수 있다.
        - 작성한 스타일이 다른 JS 파일로 오염되지 않는다.
            - 일반 CSS 파일도 App.module.css 명으로 변경하면 App.js 만 적용되게 할 수 있다.
        - 페이지 로딩시간 단축 => 태그로 넣어주기 때문
    - 단점
        - JS 파일이 매우 복잡해진다.
            - 일반 컴포넌트인지 styled 인지 구분하기 어렵다.
        - JS 파일 간 중복 디자인이 있을 때는 import 해서 사용해야된다.
        - CSS 담당자가 있을 때 협업 시 불편

<br>

## Lifecycle 과 useEffect

### Lifecycle

- 컴포넌트는 Lifecycle 개념이 존재한다.
- 컴포넌트는
    1. 생성이 될 수도 있고 (mount)
    2. 재렌더링이 될 수도 있고 (update)
    3. 삭제가 될 수도 있다. (unmount)

- hook 을 이용해서 해당 생명주기에 특정 코드를 실행하게 할 수 있다.
    - `useEffect`

<br>

### useEffect

> useEffect 안에 있는 코드는 html 렌더링 후에 동작한다. 오래걸리는 작업을 useEffect() 안에 사용하면 Html 렌더링 시간에 영향을 주지않는다.

- 용도
    - 서버에서 데이터 가져오는 작업
    - 어려운 연산
    - 타이머

- 이름이 Effect 인 이유
    - sideEffect : 핵심기능 외에 부가기능
    - sideEffect 라는 이름에서 유래했다.

- 사용법
    ```javascript
    import {useState, useEffect} from 'react';

    function Detail(){

        useEffect(()=>{
            //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
            console.log('안녕')
        });
    
        return (생략)
    }
    ```

- 생명주기에 따른 사용법
    1. 재렌더링마다 코드를 실행
        ```javascript
        useEffect(()=>{ 실행할코드 })
        ```
    2. 컴포넌트 mount 시 1회만 실행
        ```javascript
        useEffect(()=>{ 실행할코드 }, [])
        ```
    3. `useEffect` 안의 코드 실행 전에 항상 실행
        ```javascript
        useEffect(()=>{ 
            return ()=>{
                실행할코드
            }
        })
        ```
    4. 컴포넌트 unmount시 1회 실행
        ```javascript
        useEffect(()=>{ 
            return ()=>{
                실행할코드 
            }
        }, [])
        ```
    5. `state1` 변수가 변경될 때만 코드를 실행
        ```javascript
        useEffect(()=>{ 
            실행할코드 
        }. [state1])
        ```
<br>

## ajax 로 서버와 통신

- AJAX : 서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능이다.
- AJAX로 GET/POST 요청하는 방법은
    1. XMLHttpRequest 사용하기
    2. fetch() 를 통해 요청하기
    3. axios 외부 라이브러리 사용하기 => 가장 편함.

<br>

### Axios 를 사용한 서버 통신

> Axios 는 서버의 응답데이터를 자동으로 JSON 형식데이터를 Array 로 변환해주기 때문에 편리하다.

<br>

#### 사용법

```javascript
import axios from 'axios'

function App(){
  return (
    <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>
  )
}
```

- post 요청 방법
    ```javascript
    axios.post('URL', {name : 'kim'}) // JSON 형식으로 요청메시지 전달
    .then()
    ```

- 동시에 AJAX 요청 여러개 하려면
    ```javascript
    Promise.all( [axios.get('URL1'), axios.get('URL2')] )
    .then()
    ```
<br>

### fetch() 를 이용한 GET/POST 요청 방법

```javascript
fetch('URL')
.then(Response => Response.json())
.then((response) => {
    console.log(response)
})
```
- fetch() 는 JSON 을 object/array 로 직접 바꾸는 작업이 필요하다.

<br>

## 전환 애니메이션 만들기

1. 애니메이션 동작 전 className 만들기
2. 애니메이션 동작 후 className 만들기
3. transition 추가

```css
.start {
  opacity: 0;
}
.end {
  opacity: 1;
  transition: opacity 0.5s;
}
```
- 애니메이션 적용하려는 태그의 className을 state 변수를 사용하여 `start ` => `start end` 로 변경해주는 로직을 만들면 된다.
    ```javascript
    function TabContent({탭}){

        let [fade, setFade] = useState('')

        useEffect(()=>{
            setFade('end')
        }, [탭])

        return (
            <div className={'start ' + fade}>
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
            </div>
        )
    }
    ```

<br>

## props 로 state 변수를 주고받기 어려울 때

> Component 가 많아질 경우, 자식 Component 에서 state 변수를 사용할 경우 모든 Component 가 props 변수를 전달해주어야 하는 문제가 발생한다.

<img src="https://codingapple.com/wp-content/uploads/2022/05/%EC%BA%A1%EC%B2%984-2.png">

<br>

- 해결방법
    - Redux 사용하기 (추천)
        <img src="https://codingapple.com/wp-content/uploads/2022/05/%EC%BA%A1%EC%B2%98.png">
        - `store.js` 를 `index.js` 에서 import 하면 전역에서 state 변수를 사용할 수 있다.

    - Context API 사용하기 (잘안씀)
        1. state 변경 시 `<Context.Provider>` 하위 컴포넌트들이 state 변수를 안써도 전부 재렌더링이 된다.
            ```html
            <Route path="/detail/:id" element={
                <Context1.Provider value={{ 재고, shoes}}>
                    <Detail shoes={shoes}/> // 재고가 변경되면 사용안해도 재렌더링됨
                </Context1.Provider>
            } />
            ```
        2. useContext() 를 쓰고있는 컴포넌트는 나중에 다른 페이지에서 import 해서 재사용할 때 변수 관리에 어려움이 있을 수 있다.
            ```javascript
            // TabContent 를 다른 페이지에서 import 해서 재사용하려면 Context1 변수들도 같이 보내야됨
            function TabContent({탭}){

                let [fade, setFade] = useState('');
                let { 재고 } = useContext(Context1)

                (생략)
            }
        
        - 사용법
            ```javascript
            // App.js (export)
            export let 재고context = React.createContext();

            function App(){
                let [재고, 재고변경] = useState([10,11,12]);

                return (
                    <Context1.Provider value={ {재고, shoes} }>
                    <Detail shoes={shoes}/>
                    </Context1.Provider>
                )
            }
            // Detail.js (import)

            import {useState, useEffect, useContext} from 'react';
            import {Context1} from './../App.js';

            function Detail(){
                let {재고} = useContext(Context1)

                return (
                    <div>{재고}</div>
                )
            }
            ```
<br>

## Redux 이용하기

> 왜씀? 컴포넌트간 state 공유가 간편함

- state 하나를 slice 라고 부름
- redux 에서 변수 선언을 하는 방법이 props 보다 번거롭기 때문에, 컴포넌트가 작은 프로젝트에서는 props 를 사용하는 것이 더 간단하다.

<br>

### 사용법

```javascript
// store.js (export)
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim'
})

export default configureStore({
  reducer: {
    user : user.reducer
  }
}) 

// Cart.js (import)
import { useSelector } from 'react-redux'

function Cart(){
    // useSelector() 를 통해 Redux store 에서 데이터를 추출할 수 있다.
    let a = useSelector((state) => state.user ) // state 변수 중 user 만 가져온다.
    console.log(a) // 출력 : { user : "kim" }

    return (생략)
}
```

### `useSelector()`



<br>

### state 변수 변경하는 방법

```javascript
// store.js (변경함수 export)
let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
})

export let {changeName} = user.actions

// Cart.js (변경함수 import)
(Cart.js)

import { useDispatch, useSelector } from "react-redux"
import { changeName } from "./../store.js"

let dispatch = useDispatch()

<button onClick={()=>{
  dispatch(changeName())
}}>버튼임</button> 
```

#### `useDispatch()` 
> state 변수 변경을 `store.js` 에게 요청하는 함수

- `useDispatch()` 를 통해 번거롭게 state 변수를 변경하는 이유
<img src="https://codingapple.com/wp-content/uploads/2022/05/%EC%BA%A1%EC%B2%983-%EB%B3%B5%EC%82%AC5.png" width='80%'>
    - 디버깅 시에 각 컴포넌트에서 자체적으로 변경을 할 경우 어디서 오류가 발생하는지 찾기 어려움.
    - 그래서 `useDispatch()` 를 통해 `store.js` 에게 변경요청을 하면 `store.js` 에서 일괄적으로 변경하는 함수를 호출한다.

<br>

### state 가 object/array 일 경우 변경하는 법

```javascript
// store.js 의 state 변경 함수
let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    increase(state, a){
      state.age += a.payload
    }
  }
})
```
- `increase(state, a)` 에서 a 는 파라미터인데, `a.payload` 로 파라미터 값을 가져올 수 있다.
- `a.type` 을 하면 state 변경함수 이름을 가져올 수 있다.


## LocalStorage 를 사용한 데이터 저장

- 브라우저에 5 MB 까지 문자 데이터를 저장할 수 있는 저장 공간
    - LocalStorage 를 삭제하지 않는 이상 반영구적이다.
    - 문자 데이터만 저장하기 때문에, object 나 array 를 저장할 시 데이터가 깨짐.
        - `JSON.stringify()` 함수를 사용하여 JSON 으로 변환해서 저장한다.

<br>

## React Query

> 자동으로 실시간 데이터를 가져와야 하는 SNS, 코인거래소 같은 사이트에서 사용한다.

- 용도
    - 몇초마다 자동으로 데이터를 다시 가져오게 하는경우
    - 요청실패시 몇초 간격으로 요청을 재시도 해야되는 경우
    - 다음 페이지를 미리 가져와야 하는 경우
    - ajax 성공/실패 시 각각 다른 html 을 보여줘야 하는 경우


- 장점
    1. ajax 요청 성공/실패/로딩중 상태를 쉽게 파악할 수 있다.
    2. 자동으로 ajax 재요청을 해준다. (실패시에도 재시도 해줌)
    3. ajax로 가져온 결과는 state 공유가 필요없다.
        - 캐싱기능이 있기 때문에, ajax 요청하는 코드를 여러 컴포넌트에서 사용해도 한번만 요청하고, 같은 ajax 요청을 한적이 있으면 캐시에서 가져온다.

- 사용법
    ```javascript
    function App(){
        let result = useQuery('작명', ()=>
            axios.get('https://codingapple1.github.io/userdata.json')
            .then((a)=>{ return a.data })
        )

        return (
            <div>
            { result.isLoading && '로딩중' }
            { result.error && '에러남' }
            { result.data && result.data.name }
            </div>
        )
    }
    ```
<br>

## 성능 개선

### 개발자도구 & lazy import

- 개발자도구
    - `React Developer Tools` : props, state 조회 가능 + 컴포넌트 렌더링 시간 조회
    - `Redux Developer Tools` : Redux store 에 있는 state 전부 확인 가능

<br>

- lazy import
    - 리액트 코드를 `npm run build` 하게 되면 html, js 파일이 하나만 생성되는데 모든 페이지가 하나의 js 로 만들어지기 때문에 파일사이즈가 커진다.
    - 메인페이지를 조회할 때 나머지 페이지들은 가져올 필요가 없기때문에 `lazy()` 를 이용해서 js 파일을 분리하면 로딩속도를 개선할 수 있다.
    
    ```javascript
    (App.js)
    import {lazy, Suspense, useEffect, useState} from 'react'

    const Detail = lazy( () => import('./routes/Detail.js') )
    const Cart = lazy( () => import('./routes/Cart.js') )
    ```
    - 하지만 `lazy()` 사용된 컴포넌트를 로드할 때 지연시간이 발생할 수 있는데, `Suspense` 를 이용하여 로딩중일 때 보여줄 html 을 작성할 수 있다.
    ```javascript
    <Suspense fallback={ <div>로딩중임</div> }>
        <Detail shoes={shoes} />
    </Suspense>
    ```

<br>

### 재렌더링 막는 memo, useMemo

> 컴포넌트가 재렌더링되면 거기 안에 있는 자식 컴포넌트는 항상 함께 재렌더링되는데, 그 문제를 해결하기 위해 memo, useMemo 를 사용한다.

#### `memo`

- 사용법
    ```javascript
    import {memo, useState} from 'react'

    let Child = memo( function(){
        console.log('재렌더링됨')
        return <div>자식임</div>
    })

    function Cart(){ 

        let [count, setCount] = useState(0)

        return (
            <Child />
            <button onClick={()=>{ setCount(count+1) }}> + </button>
        )
    }
    ```
    - 원하는 컴포넌트 정의 부분을 memo 로 감싸준다.
    - Child로 전송되는 props 가 변하는 경우에만 재렌더링됨.

- 원리
    - memo 로 감싸진 컴포넌트는 재렌더링을 방지하기위해 기존 props 와 바뀐 props 를 비교하는 연산이 추가로 진행된다.
    - props 가 크고 복잡하면 비교하는 과정에서 부하가 발생하기 때문에, 필요한 곳에만 사용하자.

<br>

#### `useMemo`

> useEffect 와 비슷한 용도로, 컴포넌트 로드시 1회만 실행하고 싶은 코드가 있을 때 사용한다.

- 사용법
    ```javascript
    import {useMemo, useState} from 'react'

    function 함수(){
        return 반복문10억번돌린결과
    }

    function Cart(){ 

        let result = useMemo(()=>{ return 함수() }, [])

        return (
            <Child />
            <button onClick={()=>{ setCount(count+1) }}> + </button>
        )
    }
    ```
    - 반복문을 10억번 돌려야하는 경우, useMemo 에 넣어두면 컴포넌트 로드시 1회만 실행된다.
- `useEffect` 와 차이점
    > 실행 시점의 차이
    - `useEffect` 는 html 이 렌더링 된 후에 실행되지만, `useMemo` 는 html 이 렌더링되기 전에 실행된다.

<br>

### useTransition, useDeferredValue

<br>