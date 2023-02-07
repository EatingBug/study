# React

> HTML, CSS, JS 개발을 편리하게 만들어주는 도구

## React 장점

- Single Page Application
- html 재사용 편리
- 같은 문법으로 React Native 앱개발 가능

## Part 1 : 블로그 제작 & 기초 문법

### 기초 문법

- JSX 문법
    1. html 에 class 넣을 땐 className 을 사용한다.
    2. 변수를 html에 넣을 때는 {중괄호} 를 사용
    3. html 에 style 속성을 넣고 싶으면 `<div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>` { 속성명 : '속성값' } 방식으로 넣어야된다.

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
    