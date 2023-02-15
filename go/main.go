package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}

	s0 := &s[0]
	fmt.Println(s0)

	s = s[:4]
	printSlice(s)

	s = s[1:]
	printSlice(s)

	s = s[:5]
	printSlice(s)

	fmt.Println(s0)
	fmt.Println(*s0)
}

func printSlice(s []int) {
	// fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
	fmt.Println("len= ", len(s)," cap=" ,cap(s), s)
}