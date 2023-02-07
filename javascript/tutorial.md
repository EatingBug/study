# JavaScript

<!-- TOC -->

- [JavaScript](#javascript)
    - [문법](#%EB%AC%B8%EB%B2%95)
        - [변수](#%EB%B3%80%EC%88%98)
        - [연산자](#%EC%97%B0%EC%82%B0%EC%9E%90)
        - [객체](#%EA%B0%9D%EC%B2%B4)
        - [배열](#%EB%B0%B0%EC%97%B4)
        - [함수](#%ED%95%A8%EC%88%98)

<!-- /TOC -->

<br>

## 문법

### 변수
    - 변수 선언
        - let
            - 블록 레벨 변수를 선언할 수 있다.
        - const
            - 값이 변경되지 않을 변수를 선언할 수 있다.
            - 변수가 선언된 블록에서 사용할 수 있다.
        - var
            - 변수가 선언된 함수에서 사용할 수 있다.
    - 변수에 값을 지정하지 않고 변수를 선언하면, 타입은 undefined 로 지정된다.

<br>

### 연산자
    - 비교 연산자
        - `==` : 서로 다른 타입을 비교할 경우 타입 강제 변환을 수행한다.
        - `===` : 타입 강제 변환을 방지한다.

### 객체
- 객체 선언 방법
    ```javascript
    // 빈 객체 생성 방법
    var obj = new Object();
    // 객체 리터럴 구문 => JSON 구문의 핵심
    var obj = {};
    ```

    ```javascript
    const obj = {
        name: 'Carrot',
        _for: 'Max', // 'for'는 예약어이므로, '_for'를 대신 사용합니다.
        details: {
            color: 'orange',
            size: 12
        }
    };
    ```
- 객체 프로토타입과 프로토타입의 인스턴스 생성
    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    // 객체를 정의합니다.
    var you = new Person('You', 24);
    // "You"라는 이름의 24세인 새로운 사람을 생성 중입니다.
    ```

### 배열
- 배열 생성
    - javascript 배열은 동적 배열이다.
    
    ```javascript
    var a = new Array();
    a[0] = "dog";
    a[1] = "cat";
    a[2] = "hen";
    a.length // 3
    ```

    ```javascript
    var a = ['dog', 'cat', 'hen'];
    a.length; // 3
    ```

- 존재하지 않는 배열 인덱스를 참조하려고 하면 `undefined` 가 출력된다.
- 배열  순환
    - for 문
        ```javascript
        for (let i = 0; i < a.length; i++) {
            // a[i] 로 무언가를 수행
        }
        ```
    - for ... in
        ```javascript
        for (const currentValue of a) {
            // currentValue로 무언가를 수행
        }
        ```
    - forEach()
        ```javascript
        var a = ['dog', 'cat', 'hen'];
        a.forEach(function(currentValue, index, array) {
            // currentValue나 array[index]로 무언가를 수행
        })
        ```
- 배열 메서드
    - `array.push(item);`
    - `array.toString();`
    - `array.concat(item1, item2);`
    - `array.join(sep)` : sep 인자로 구분하여 합친 한개의 문자열 반환
    - `array.pop()` : 마지막 인자 반환
    - `array.shift()` : 첫번째 인자 반환
    - `array.slice(start[, end])` : 배열의 일부분을 새 배열로 반환
    - `array.sort()` : 옵션으로 비교용도의 함수를 입력받는다.
    - `array.reverse()` : 배열 순서 뒤집기

### 함수

- 리턴문이 없으면 JavaScript 는 `undefined` 를 반환한다.