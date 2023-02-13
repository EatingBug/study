# Golang
<!-- TOC -->

- [Golang](#golang)
    - [기본 문법](#%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95)
        - [변수](#%EB%B3%80%EC%88%98)
            - [import, export](#import-export)
        - [함수](#%ED%95%A8%EC%88%98)
        - [기본 자료형](#%EA%B8%B0%EB%B3%B8-%EC%9E%90%EB%A3%8C%ED%98%95)
        - [조건문](#%EC%A1%B0%EA%B1%B4%EB%AC%B8)
    - [Method 와 Interface](#method-%EC%99%80-interface)
    - [동시성](#%EB%8F%99%EC%8B%9C%EC%84%B1)

<!-- /TOC -->

## 기본 문법

### 변수

#### import, export

```go
import (
	"fmt"
	"math/rand"
)
```
- 다음과 같이 패키지를 가져온다.

```go
func main() {
	fmt.Println(math.Pi)
}
```
- 다음과 같이 패키지 메서드는 대문자로 시작한다.

### 함수

```go
func add(x int, y int) int {
	return x + y
}
func add(x, y int) int { // x 의 타입 생략
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```
- 함수를 선언할 때는 `변수이름` + `타입` 순으로 작성한다.
- 두 개 이상의 연속된 이름이 주어진 함수 매개변수가 같은 type일 때, 마지막 매개변수를 제외한 매개변수들의 type 생략 가능.

```go
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```
- 한 함수는 여러개의 결과를 반환할 수 있다.

```go
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
```
- 반환 값의 이름을 정할 수 있다. 함수의 맨 위에서 정의된 변수처럼 다뤄진다.
    - 인자가 없는 return 문은 이름이 주어진 반환 값을 반환한다.

```go
var c, python, java bool

func main() {
	var i int
	fmt.Println(i, c, python, java)
}
```
- `var` 문은 변수에 대한 목록을 선언한다.

```go
var i, j int = 1, 2

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}
```
- 변수 선언은 한 변수당 하나의 초깃값을 포함
- 초깃값이 존재한다면 type 생략 가능


```go
func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
```
- 함수 내에서는 `:=` 라는 짧은 변수 선언은 암시적 type으로 var 선언처럼 사용가능
- 함수 밖에서는 모든 선언이 키워드로 시작하므로 `:=` 구문은 사용 불가



### 기본 자료형

### 조건문

## Method 와 Interface

## 동시성