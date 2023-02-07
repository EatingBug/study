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

- state
    - 사용법
        - `let [a, b] = useState('남자 코트 추천');`
        - 일반 변수 대신 state 이용하여 잠깐 변수를 저장해둘 수 있다.
    - 사용하는 이유(#중요)
        - **state 는 변동사항이 생기면 state 쓰는 html 도 자동으로 재렌더링 해준다.**
        - 그냥 변수를 html 에 사용하면 변경사항이 자동으로 반영되지 않음
    