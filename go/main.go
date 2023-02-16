package main

import (
	"fmt"
)

type Fetcher interface {
	// Fetch는 URL 본문과 해당 페이지에서 찾은 URL 조각을 반환합니다.
	Fetch(url string) (body string, urls []string, err error)
}

// 크롤링은 Fetcher를 사용하여 URL로 시작하는 페이지를
// 최대 깊이까지 재귀적으로 크롤링합니다.
func Crawl(url string, depth int, fetcher Fetcher) {
	// TODO: URL을 병렬로 가져오기
	// TODO: 같은 URL을 두 번 가져오지 않기
	// 이 구현은 두 가지 모두 수행하지 않습니다:
	if depth <= 0 {
		return
	}
	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("found: %s %q\n", url, body)
	for _, u := range urls {
		Crawl(u, depth-1, fetcher)
	}
	return
}

func main() {
	Crawl("https://golang.org/", 4, fetcher)
}

// fakeFetcher는 미리 준비된 결과를 반환하는 페처입니다.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string
	urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
	if res, ok := f[url]; ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher 는 채워진 fakeFetcher 입니다.
var fetcher = fakeFetcher{
	"https://golang.org/": &fakeResult{
		"The Go Programming Language",
		[]string{
			"https://golang.org/pkg/",
			"https://golang.org/cmd/",
		},
	},
	"https://golang.org/pkg/": &fakeResult{
		"Packages",
		[]string{
			"https://golang.org/",
			"https://golang.org/cmd/",
			"https://golang.org/pkg/fmt/",
			"https://golang.org/pkg/os/",
		},
	},
	"https://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
	"https://golang.org/pkg/os/": &fakeResult{
		"Package os",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
}
