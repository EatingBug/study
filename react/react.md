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