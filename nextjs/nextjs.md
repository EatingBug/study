# NEXT.js
<!-- TOC -->

- [NEXT.js](#nextjs)
    - [Next.js 란?](#nextjs-%EB%9E%80)
        - [DOM 이란?](#dom-%EC%9D%B4%EB%9E%80)
        - [CSS](#css)
            - [style jsx](#style-jsx)
        - [라우팅](#%EB%9D%BC%EC%9A%B0%ED%8C%85)

<!-- /TOC -->
<br>

## Next.js 란?

> 웹 애플리케이션을 만드는 데 필요한 빌딩 블록을 제공하는 React 프레임워크다.

- Next.js 가 React 에 필요한 도구와 구성을 처리하고 애플리케이션을 위한 추가 구조, 기능 및 최적화를 제공한다
- 라우팅, 데이터 불러오기, 통합과 같은 애플리케이션 요구 사항을 해결하는 동시에 개발자 및 최종 사용자 경험 개선하는 역할
- SSR 을 지원하여 pre-rendering 으로 정적 페이지 로딩이 매우 빠르다.

### DOM 이란?

> DOM 은 HTML 요소의 객체 표현이다. 코드와 사용자 인터페이스 사이의 다리 역할을 하며, 부모와 자식 관계가 있는 트리와 같은 구조를 가진다.

- DOM 메서드와 JS 를 사용하여 사용자 이벤트를 수신하고 UI 에서 특정요소를 변경함으로써 DOM 을 조작할 수 있다.

### CSS

- `_app.js` 는 다른 페이지들이 렌더링 되기전에 먼저 렌더링된다
    - 컴포넌트들을 모든 페이지에서 보여준다.
    - `style jsx` 설정도 글로벌로 적용해줄 수 있다.
- `_app.js` 를 제외한 페이지나 컴포넌트 내에 css를 import 하고싶다면, 반드시 `module.css` 이어야 한다.

#### style jsx

```js
<style jsx>{`
    a {
        text-decoration: none;
    }
    .active {
        color: tomato;
    }
`}</style>
```

### 라우팅

> pages 폴더에서 js 파일을 만들면 파일명 URL 로 자동 라우팅 설정이 된다.

- `index.js` 는 `/` root url 로 라우팅된다.
- Next.js 는 각각 나눠진 페이지를 렌더링한다.

### Layout 패턴

- 같은 형식에 컴포넌트마다 다른 값을 적용하고 싶을 때 Layout 패턴을 이용해서 사용 가능하다.

```js
// index.js
import Seo from "../components/Seo";

export default function Home() {
    return (
        <div>
            <Seo title="Home" />
            <h1 className="active">Hello</h1>
        </div>
    );
}
// Seo.js
import Head from "next/head";

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}
```

## Redirect and Rewrite

- `next.config.js` 에서 Redirect url 을 설정할 수 있다.

```js
API_KEY=12415710AGA@@6143;

module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/old-blog/:path*",
                destination: "/new-blog/:path*",
                permanent: false,
            },
        ];
    },
    // redirect 와 다르게 URL 을 바꾸지않는다.
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: "https://api.themoviedb/movie?apikey=${API_KEY}", // API key를 숨길 수 있다.
            }
        ]
    }
}
```

### Server Side Rendering

```js
export async function getServerSideProps() {
    const { results } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
        props: {
            results,
        },
    }
}
```

## Dynamic Routes

```js
// movies/[id].js
export default function Detail() {
    return "detail";
}
```
- `movies/11414` 방식으로 접근 시 라우팅되는 페이지다.