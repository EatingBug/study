# React

> HTML, CSS, JS 개발을 편리하게 만들어주는 도구

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

    - state 값 변경원리(#중요)
        - state 변경함수(변경하려는 state값) 이 동작할 때 기존 state값 과 변경하려는 state 값을 비교하여 같으면 변경을 안한다.
            - state 가 array, object 데이터일 때는 주소값을 비교함.
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