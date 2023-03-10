# Golang
<!-- TOC -->

- [Golang](#golang)
    - [기본 문법](#%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95)
        - [변수](#%EB%B3%80%EC%88%98)
            - [import, export](#import-export)
        - [함수](#%ED%95%A8%EC%88%98)
            - [타입](#%ED%83%80%EC%9E%85)
            - [상수](#%EC%83%81%EC%88%98)
        - [기본 자료형](#%EA%B8%B0%EB%B3%B8-%EC%9E%90%EB%A3%8C%ED%98%95)
        - [조건문](#%EC%A1%B0%EA%B1%B4%EB%AC%B8)
    - [Structure 와 slice, map](#structure-%EC%99%80-slice-map)
        - [포인터](#%ED%8F%AC%EC%9D%B8%ED%84%B0)
        - [구조체](#%EA%B5%AC%EC%A1%B0%EC%B2%B4)
        - [배열](#%EB%B0%B0%EC%97%B4)
        - [Slices](#slices)
            - [Slice 기능](#slice-%EA%B8%B0%EB%8A%A5)
        - [Map](#map)
            - [Map 기능](#map-%EA%B8%B0%EB%8A%A5)
    - [Method 와 Interface](#method-%EC%99%80-interface)
        - [Method](#method)
            - [Pointer Receiver](#pointer-receiver)
            - [Method 와 포인터](#method-%EC%99%80-%ED%8F%AC%EC%9D%B8%ED%84%B0)
        - [Interface](#interface)
            - [인터페이스 타입 변환](#%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98)
            - [인터페이스](#%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4)
        - [Errors](#errors)
            - [Readers](#readers)
            - [Images](#images)
    - [동시성](#%EB%8F%99%EC%8B%9C%EC%84%B1)
        - [Goroutines](#goroutines)
        - [Channel](#channel)
        - [Range 와 Close](#range-%EC%99%80-close)
        - [Select](#select)
            - [Mutex](#mutex)

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

#### 타입

- 타입 변환
	- Type(v) 로 v 라는 값을 Type 으로 변환할 수 있다.
- Inference type
	- `:=` 혹은 `var =` 를 이용해 명시적인 type 을 정의하지 않고 변수를 선언할 때, type 을 오른쪽 변의 값으로부터 유추한다.

#### 상수

- `const` 를 통해 선언할 수 있다.
- `:=` 를 통해 선언할 수 없다.

### 기본 자료형

### 조건문

- for 문
	```go
	func main() {
		sum := 0
		for i := 0; i < 10; i++ {
			sum += i
		}
		fmt.Println(sum)
	}
	```
	- `;`로 반복문이 구별된다.
		- 초기화 구문과 세번째 구문은 필수가 아니다.
	- { } 는 필수
- for 는 Go 에서 While 문처럼 사용된다.
	```go
	func main() {
		sum := 1
		for sum < 1000 {
			sum += sum
		}
		fmt.Println(sum)
	}
	```
- if 문
	```go
	func sqrt(x float64) string {
		if x < 0 {
			return sqrt(-x) + "i"
		}
		return fmt.Sprint(math.Sqrt(x))
	}

	func main() {
		fmt.Println(sqrt(2), sqrt(-4))
	}
	```
	- for 문 처럼 조건문 전에 초기화 문을 사용할 수 있다.
	```go
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	```

- Switch
	```go
	func main() {
		fmt.Print("Go runs on ")
		switch os := runtime.GOOS
		os {
			case "darwin":
				fmt.Println("OS X.")
			case "linux":
				fmt.Println("Linux.")
			default:
				fmt.Printf("%s.\n", os)
		}
	}
	```
	- if ~ else 를 짧게 사용하는 방법이다.
	- 첫 번째로 선택된 케이스만 실행한다. 자동으로 break 가 된다.

- 조건이 없는 Switch
	```go
	func main() {
		t := time.Now()
		switch {
			case t.Hour() < 12:
				fmt.Println("Good morning!")
			case t.Hour() < 17:
				fmt.Println("Good afternoon.")
			default:
				fmt.Println("Good evening.")
		}
	}
	```
	- 긴 if-else 체인을 작성하는 데에 아주 깔끔한 방식

- Defer
	```go
	func main() {
		defer fmt.Println("world")

		fmt.Println("hello")
	}
	```
	- 자신을 둘러싼 함수가 종료될 때까지 지정한 함수의 실행을 연기한다.
	- 연기된 함수 호출들은 스택에 쌓인다 => 후입선출

- for _ range
	```go
	var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
		// i = 인덱스, v = pow의 인덱스 값
	}
	```
	- for 에서 range 는 슬라이스 또는 맵의 요소들을 순회한다.
	- 첫번째 값은 인덱스, 두번째 값은 인덱스에 해당하는 값을 반환한다.
<br>

## Structure 와 slice, map

### 포인터

- 포인터는 값의 메모리 주소를 가지고 있다.
```go
func main() {
	i, j := 42, 2701

	p := &i         // i 에 대한 포인터를 생성한다.
	fmt.Println(*p) // 포인터로 값 읽기
	*p = 21         // 포인터로 값 변경
	fmt.Println(i)  // i 로 값 읽기

	p = &j         // point to j
	*p = *p / 37   // divide j through the pointer
	fmt.Println(j) // see the new value of j
}
```
	- `&` 연산자는 이것의 피연산자에 대한 포인터를 생성한다.

<br>

### 구조체

```go
type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	p := &v
	p.X = 1e9	// 역 참조를 명시할 필요 없음.
	fmt.Println(v)
}

- 구조체의 필드는 . 을 통해 접근
- 구조체 포인터를 통해서 구조체 필드에 접근 가능

```

### 배열
```go
func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])	// Hello World
	fmt.Println(a)			// [Hello, World]

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}
```
- [n]T 타입은 타입이 T인 n의 길이를 정적 배열이다.

### Slices

```go
func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4] // [2, 3, 5]
	fmt.Println(s)
}
```
- 슬라이스는 배열의 요소들을 동적인 크기로 볼 수 있다.
- 슬라이스의 요소를 변경하면 기본 배열의 해당 요소가 수정된다.
	- 모든 타입이 가능
- 슬라이싱할 때 상한, 하한을 생략하면 기본 값을 사용할 수 있다. (하한:0, 상한:max)
- 슬라이스 구성요소
	- Pointer : 원본 배열의 주소를 참조한다.
	- Length : 슬라이스의 길이
	- Capacity : 슬라이스의 용량

#### Slice 기능

- make 함수를 사용해서 슬라이스를 생성할 수 있다.
	```go
	a := make([]int, 0, 5)
	```
- Slice 의 값이 없다면 `nil`이다. 
	- `nil`은 길이와 용량이 0 이다.

- `append` : 요소 추가
	- append 의 첫번째 파라미터는 `슬라이스의 타입`
	- 나머지 파라미터는 `슬라이스에 추가할 값`
	```go
	var s []int

	s = append(s, 0)
	s = append(s, 1)
	s = append(s, 2, 3, 4)
	```

<br>

### Map

- 맵은 키를 값에 매핑한다.
- zero value 는 `nil` 이다.
	- `nil` 은 키도 없고, 키를 추가할 수도 없다.
- `make(map[string]type)` 으로 맵을 선언할 수 있다.

#### Map 기능

```go
func main() {
	m := make(map[string]int)

	m["Answer"] = 42
	fmt.Println("The value:", m["Answer"]) // 42

	m["Answer"] = 48 // 요소 추가 or 업데이트
	fmt.Println("The value:", m["Answer"]) // 48

	delete(m, "Answer") // 요소 제거
	fmt.Println("The value:", m["Answer"]) // 0

	v, ok := m["Answer"] // 맵에서 key 요소 검색하기 (v = value, ok = 존재유무)
	fmt.Println("The value:", v, "Present?", ok) // 0, false
}
```

## Method 와 Interface

### Method

- Go 는 클래스를 가지지 않는다.
- 같은 타입의 메서드를 정의할 수 있다.

```go
type Vertex struct {
	X, Y float 64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

<br>

#### Pointer Receiver

> 포인터 리시버로 메서드를 선언할 수 있다.

- 포인터 리시버를 사용하여 메서드를 선언하면, receiver 로 받은 구조체의 주소값에 직접적으로 접근할 수 있다.
```go
type Vertex struct {
	X, Y float64
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10) // 구조체 Vertex가 선언된 v 주소에 접근하여 값을 수정할 수 있다.
	fmt.Println(v.Abs())
}
```

#### Method 와 포인터

```go
var v Vertex
v.Scale(5) // OK / v.Scale(5) == (&v).Scale(5)
p := &v
p.Scale(10) // OK / 
```
- 포인터 리시버가 있는 메서드는 위와 같이 호출될 때 값이나 포인터를 리시버로 받아들인다.
- 포인터 리시버를 사용하는 이유
	- 메서드가 리시버가 가리키는 값을 수정할 수 있다.
	- 각각의 메서드 Call 에서의 value 복사 문제를 피할 수 있다.

<br>

### Interface

> interface 를 통해 메서드 구현을 포함한 구체화된 객체가 아닌 추상화된 객체로 상호작용 할 수 있다.
```go
type DuckInterface interface {
	Fly()
	Walk(distance int) int
}
```
- `덕 타이핑` 방식을 사용
	- 인터페이스 구현을 코드로 명시하지 않아도 해당 구조체에 인터페이스 메서드가 선언되어 있다면, 인터페이스로 사용될 수 있다.

<br>

#### 인터페이스 타입 변환

- 구체화된 다른 타입으로 타입 변환하기
	```go
	type Stringer interface {
		String() string
	}
	type Student struct {
		Age int
	}
	func (s *Student) String() string {
		return fmt.Sprintf("Student Age:%d", s.Age)
	}
	func PrintAge(stringer Stringer) {
		s := stringer.(*Student) // *Student 타입으로 타입 변환
		fmt.Printf("Age: %d\n", s.Age)
	}
	- 인터페이스 메서드가 구현되어있는 타입이면 변환이 가능하다.

<br>

#### 인터페이스

- `fmt` 패키지에 정의된 `Stringer` 은 자신을 문자열로 설명할 수 있는 타입
	- `fmt` 패키지 및 기타 여러 패키지는 값을 출력하기 위해 이 인터페이스를 사용한다.

<br>

### Errors

- Go 프로그램은 `error` 값으로 오류 상태를 표현
- error 타입은 `fmt.Stringer` 와 유사한 내장 인터페이스

```go
type error interface {
	Error() string
}
```

<br>

#### Readers

- io 패키지는 데이터 스트림의 읽기를 나타내는 io.Reader 인터페이스를 지정한다.
	- strings.Reader 는 한번에 8바이트 씩 사용한다.
```go
func (T) Read(b []byte) (n int, err error)
```
- Read 는 주어진 바이트 조각을 데이터로 체우고 채워진 바이트 수와 오류 값을 반환합니다. 스트림이 종료되면 io.EOF 오류를 반환합니다.

<br>

#### Images

> Package image 는 Image 인터페이스를 정의합니다.

```go
package image

type Image interface {
	ColorModel() color.Model
	Bounds() Rectangle
	At(x, y int) color.Color
}
```


## 동시성

### Goroutines

> Go 런타임에 의해 관리되는 경량 쓰레드.
> - 일반적인 스레드보다 전환의 오버헤드가 더 적고 가볍다.

```go
go f(x, y, z)
```
- f와 x, y, z의 evaluation 은 현재의 goroutine 에서 일어나고, f 의 실행은 새로운 goroutine 에서 일어난다.
- goroutine은 같은 주소의 공간에서 실행되고, 따라서 공유된 메모리는 synchronous(동기적) 해야합니다.

<br>

### Channel

> 채널 연산자인 `<-` 를 통해 값을 주고 받을 수 있는 하나의 분리된 통로다.

```go
ch <- v // 채널 ch에 v 를 전송
v := <- ch // ch 로부터 값을 받고, v에 대입한다.
```

- channel 은 map 과 slice처럼 사용하기 전에 생성되어야 한다.
```go
ch := make(chan int)
```

- Channel 은 `buffered` 될 수 있다. (=버퍼를 가질 수 있다.)
```go
ch := make(chan int, 100) // 두번째 인자로 buffer 길이를 받을 수 있다.
```
- buffer 로부터의 수신은 그 buffer 가 비어있을 때 block

<br>

### Range 와 Close

- 전송자는 더 이상 보낼 데이터가 없다는 것을 암시하기 위해 channel 을 close 할 수 있다.
- channel 을 닫는 것은 range 반복문을 종료시키는 것과 같이 수신자가 더 이상 들어오는 값이 없다는 것을 알아야 하는 경우에만 필요하다.
	```go
	v, ok := <-ch
	```
	- 수신할 값이 없고, channel 이 닫혀있다면 ok 는 false다.

> 절대로 수신자가 아닌 전송자만이 channel 을 닫아야 한다. 닫힌 channel 에 전송하는 것은 panic 을 야기한다.

<br>

### Select

> goroutine 이 다중 커뮤니케이션 연산에서 대기할 수 있게 해준다.

- `select`는 자의 case들 중 하나가 실행될 때까지 block 된다.
	- 만약 다수의 case가 준비되는 경우에는 select 가 무작위로 하나를 선택한다.
```go
// fibonacci 함수는 두 개의 채널을 받아서 피보나치 수열을 생성합니다.
// c 채널로 수열을 전달하며, quit 채널로 종료 요청을 받습니다.
func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		// select 구문을 사용하여 c나 quit 채널 중 하나가 값을 보낼 때까지 기다립니다.
		select {
		// c 채널로 값을 보냅니다.
		case c <- x:
			// 피보나치 수열의 다음 값을 계산합니다.
			x, y = y, x+y
		// quit 채널로 값이 전송되면 함수를 종료합니다.
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}
func main() {
	// 두 개의 채널을 생성합니다.
	c := make(chan int)
	quit := make(chan int)
	// 익명 함수를 고루틴으로 실행합니다.
	go func() {
		// 10개의 피보나치 수열 값을 c 채널에서 받습니다.
		for i := 0; i < 10; i++ {
			fmt.Println(<-c) // c 채널에서 값이 올때까지 block 상태
		}
		// quit 채널로 종료 요청을 보냅니다.
		quit <- 0
	}()
	// fibonacci 함수를 호출합니다.
	fibonacci(c, quit)
}
```

- `default` 를 사용하면 case 들이 모두 준비되지 않았을 때 실행
	- block 없이 전송이나 수신을 수행할 때 사용

#### Mutex

> 하나의 goroutine 만이 어떤 변수에 접근할 수 있도록 `mutual exclusion` 상태로 만들어주는 기능

- `Lock(), Unlock()` 을 통해 mutex 를 관리할 수 있다.
