package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)
	people := [2]string{"Nico", "hong"}
	for _, person := range people {
		go isSexy(person, ch)
	}
	fmt.Println("Received this message:", <-ch)
	fmt.Println("Received this message:", <-ch)
}

func sexyCount(person string) {
	for i := 0; i < 10; i++ {
		fmt.Println(person, "is sexy", i)
		time.Sleep(time.Second)
	}
}

func isSexy(person string, ch chan string) {
	time.Sleep(time.Second * 5)
	ch <- person + " is sexy"
}
