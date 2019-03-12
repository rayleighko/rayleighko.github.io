---
layout: post
title: WePlanet Intern - project NextJS_03
date: '2019-03-06'
path: '/blog/2019-03-06-weplanet_project_03'
tags: next

---

# NextJS 실습하기 - 기본 예제 따라하기

먼저 NextJS에서 제공하는 기본 튜토리얼을 따라 NextJS를 이해하도록 하자. 기본 튜토리얼은 NextJS의 문서에서 Learn을 통해 진행할 수 있으며, GitHub 로그인을 통한 연동이 가능하기 때문에 어렵지않게 진행할 수 있을 것이다.

[NextJS 기본 튜토리얼](https://nextjs.org/learn/basics/getting-started/)에서 로그인 후 실습을 진행하도록 하자. 실습 진행은 각자의 몫이기 때문에 여기에 별도의 글을 작성하지는 않고, 그저 후기를 작성하도록 할 것이다.

> 후기: NextJS의 튜토리얼은 단순히 NextJS를 이해하는 것을 넘어 SSR 그 자체를 이해할 수 있는 튜토리얼이었다. 물론 앞으로도 NextJS의 문서를 많이 살펴봐야겠지만, 이번에 진행한 튜토리얼을 통해 얻은 지식 혹은 의문의 해결을 바탕으로 React에서의 SSR에 대해 보다 깊이 이해할 수 있었다.
>
> 또한, SSR을 이해함과 동시에 React의 심화 기술(HOC, Hooks 등)에 대한 관심이 생겼고, 이를 공부하는 과정에서 얻은 인사이트는 웹 프론트 엔드 엔지니어로 한걸음 더 성장할 수 있는 동력이 되었다고 말할 수 있을 것이다.
>
> 아무튼 문서에 나오는 것처럼 꽤 괜찮은 튜토리얼이었다.

[참고자료 1 - NextJS Learn](https://nextjs.org/learn)

[참고자료 2 - React HOC](https://reactjs.org/docs/higher-order-components.html)

[참고자료 3 - 리액트(React) 이해 4 - Higher Order Component(HOC)로 컴포넌트 재사용 하기](https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EC%9D%B4%ED%95%B4-4-higher-order-component) 

이번에 실습을 진행하며 다음과 같은 키워드에 주목했고, 이 키워드를 공부하며 한걸음 더 성장할 수 있었다. 그 키워드는 다음과 같다.

## Navigate Between Pages - HOC(Higher-order component)

Link에 대한 이야기를 하기 전에 고차원 컴포넌트라고 부를 수 있는 HOC에 대해 알아보도록 하자. HOC는 컴포넌트 로직을 재사용하기 위한 React의 응용(고급) 기술이다. 이 기술은 하나의 React API가 아닌 하나의 패턴으로 사용된다. 조금 더 설명하면, HOC는 컴포넌트를 가져와 다음과 같이 다시 반환하는 기술(패턴)이다.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

이는 일반적으로 함수를 반환하는 [HOF](https://en.wikipedia.org/wiki/Higher-order_function)와 유사하지만, 함수 대신 컴포넌트를 반환한다고 할 수 있다. 이렇게 함으로써 HOC는 리앧ㄱ트 컴포넌트를 인자로 받아서 모종의 처리를 한 후 새로운 리액트 컴포넌트를 리턴하는 컴포넌트라고 할 수 있다.

HOC는 다음과 같이 활용할 수 있다([참고자료2의 내용](https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-react-%EC%9D%B4%ED%95%B4-4-higher-order-component))

- [**Container 컴포넌트와 Presentational 컴포넌트**](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) **분리**: 비지니스 로직을 담당하는 컴포넌트(Container 컴포넌트)와 디스플레이를 담당하는 컴포넌트(Presentational 컴포넌트)를 분리하여 사용 할 때, 컨테이너 컴포넌트를 HOC로 만들어서 사용 할 수 있다.  
- **로딩 중 화면 표시**: 보통 SPA(Single Page App)에서 화면이 로딩 중일 때, Skeleton 화면을 보여주고, 로딩이 완료되면 데이터를 보여줄 때 사용 할 수 있다.
- **유저 인증 로직 처리**: 컴포넌트 내에서 권한 체크나 로그인 상태를 체크하기 보다는 인증 로직을 HOC로 분리하면 컴포넌트 재사용성도 높일 수 있고, 컴포넌트에서 역할 분리도 쉽게 할 수 있다.
- **에러 메세지 표시**: 컴포넌트 내에서 분기문(if/else 등)을 통해 처리 할 수도 있지만, 분기문을 HOC로 만들어 처리 하면 컴포넌트를 더욱 깔끔하게 사용 할 수 있다.

## Navigate Between Pages - Link

> Link is Just a Higher Order Component (HOC)
>
> Actually, the style prop on `next/link` has no effect. That's because `next/link`is just a [higher order component](https://facebook.github.io/react/docs/higher-order-components.html) which only accepts the "href" and some similar props. If you need to style it, you need to do it to the underlying component.

NextJS의 Link는 HOC이다. 위와 같은 문서의 내용에서도 알 수 있듯이 Link는 단순히 HOC이기 때문에 이미 지정된 props에 대해서만 반응한다. 그래서 `<a> 태그`와 같은 일종의 테그로 인식해 사전에 지정된 props가 아닌 style 등의 props를 전달한다면 Link에서 그 결과를 기대하기는 힘들다.

## Create Dynamic Pages - Passing Data via Query Strings

Link에서는 문자열 매개변수(string parameter)를 통해 데이터를 전달한다. NextJS에서는 다음과 같이 질의 문자열(query strings)을 통해 어떤 데이터던지 전달할 수 있다. 

```js
const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

반대로 데이터를 받는 입장은 다음과 같이 `withRouter` 메서드를 사용해서 값을 전달받는다.

```js
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Page = withRouter((props) => (
    <Layout>
       <h1>{props.router.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
))

export default Page
```

위 코드는 서로 문서에서 다음과 같은 동작을 주고받고 있다고 한다.

> * We import and use the "withRouter" function from "next/router" this will inject the Next.js router as a property
> * In this case, we are using the router's “query” object, which has the query string params.
> * Therefore, we get the title with `props.router.query.title`.

이처럼 NextJS에서는 `Link`와 `withRouter` 통해 클라이언트 측 라우팅을 진행하고, 질의(query) 객체를 이용해 매개변수를 주고받는다. 

## Clean URLs with Route Masking - Route Masking

Route Masking은 사용자의 입장에서 URL을 보다 깔끔하게(Clean) 받을 수 있는 기법이다. 두 URL을 비교해보자.

```js
http://localhost:3000/post?title=Hello%20Next.js
```

```js
http://localhost:3000/p/hello-nextjs
```

두 URL은 같은 곳을 라우팅하고 있지만, 서로 다른 모습을 가진다. 이렇게 변화한 것은 Route Masking을 통해 앞선 Link의 예제가 다음과 같이 수정되어 제공됐기 때문이다.

```js
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

`as` 키워드를 통해 href의 질의 문자열(query string)의 별명을 지어준 것이라고 이해하면 되겠다.

## Server Side Support for Clean URLs - Create our Custom Route

여기서부터 본격적으로 서버 측(Server Side)에 대한 설명이 시작된다. 우선적으로 이번 파트에서 주목한 키워드는 다음 3가지이다.

* next({ dev }).prepare(): App의 이벤트 리스너
* next({ dev }).render(): App의 렌더링
* next({ dev }).getRequestHandler(): 리퀘스트 핸들러

위 3가지 키워드는 보통  `const app = next({ dev })`을 통해 사용된다. 위 함수 중 prepare의 내용은 [여기](https://github.com/zeit/next.js/blob/fb08e8a1fc452ed4d9d7bda747964cd5c4a7e661/packages/next/server/next-dev-server.js#L54)를 살펴보자. 잠깐 살펴보면 이전 버전과의 호환성을 위해 [next-server.ts의 prepare](https://github.com/zeit/next.js/blob/e52508fbf655872085d10904f77eaf35846a0ea2/packages/next-server/server/next-server.ts#L142)을 상속받아 사용되고, NextJS를 사용하기 위한 이벤트 리스너의 개념이라고 볼 수 있다. 일명 '사전 준비'를 위해 사용되며 `then`과 `catch`를 이용할 수 있고, then에서 http server의 동작을 수행할 수 있고, catch를 통해 에러를 받을 수 있다.

다른 메서드는 다음에 NextJS의 코드를 까보도록 하자.

## Fetching Data for Pages - getInitialProps

NextJS에서는 getInitialProps라는 비동기 함수를 통해 페이지의 데이터를 가져올 수 있다. 즉, 렌더링된 정적 페이지의 데이터를 가져오기 위해 사용되는 것이다. 이렇게 얻어진 데이터는 당연히 서버와 통신(axios)할 수도 있으니 아마도 가장 많이 사용될 함수라고 생각했다.

이는 다음과 같이 사용할 수 있다.

```js
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}
```



## Export into a Static HTML App

-> No Need to Always Build

한 번 빌드를 해놓으면 그 안의 내용(contents)만 달라질 경우 따로 빌드할 필요가 없기 때문. 따라서 전체 빌드를 진행하는 것이 아니라 'export'를 이용해 내용을 내보내는 것이다. 하지만, 내용만 달라지는 게 아니라 앱 자체가 바뀌는 경우에는 따로 빌드를 해줘야 함.

## Lazy Loading Modules

> Next.js does automatic code splitting and it is based on the pages in your app. For example, if one of your modules is used at-least in half of your pages, then it moves into the main JavaScript bundle. If not, that module stays inside the page's bundle.

기본적으로 SPA는 싱글 페이지이기 때문에 모든 모듈이 하나로 합쳐진다. 그래서 이를 해결하기 위해 '코드 스플리팅'이라는 작업을 진행한다는 것을 앞선 문서에서 살펴보았을 것이다. 하지만, 이 코드 스플리팅은 기본적으로 사용자가 정의하지 않기 때문에 SPA를 처음 만들거나 코드 스플리팅을 의식하지 않는다면 코드를 적절하게 나누지 못해 모듈의 크기가 커짐에 따라 페이지의 로딩 속도가 느려질 수 있다.

그래서 NextJS에서는 ['동적 불러오기(dynamic import)](https://github.com/zeit/next.js#dynamic-import)'를 통해 크기가 큰 모듈에 대해 따로 번들링을 시킬 수 있다.

> 이때 동적 불러오기를 통해 불려진 모듈을 '게으르게 로드된 모듈(Lazy loaded module)'이라고 부른다. 

물론 기본적인 설정만 가지고도 자동 코드 스플리팅이 되지만, NextJS가 똑똑하게 스플리팅을 하지 않기 때문에 사용자의 dynamic import를 활용한 코드 스플리팅이 필요하다고 생각한다. 

> 기본적으로 NextJS가 모듈을 스플리팅하는 기준은 절반 이상의 페이지에서 사용되는 모듈은 app.js, main.js 혹은 common.js의 번들 파일로 스플리팅되고, 한 페이지 정도의 작은 규모로 사용되는 모듈은 해당 페이지의 번들 파일로 스플리팅한다.

그래서 다음의 코드를 보고 둘의 차이를 확인해보도록 하자.

```js
export default async () => {
  const firebase = require('firebase')

  try {
    firebase.initializeApp({
      databaseURL: 'https://hacker-news.firebaseio.com'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref('v0')
}
```

```js
export default async () => {
  // const firebase = require('firebase')
    const firebase = await import('firebase')

  try {
    firebase.initializeApp({
      databaseURL: 'https://hacker-news.firebaseio.com'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database().ref('v0')
}
```



이 두 코드는 db를 로드하기 위해 사용되는데, 코드 상으로는 이 둘의 실행 결과가 크게 다를 것 없는 것처럼 보인다. 하지만, 하단의 모듈과 같이 동적으로 불러오기(import)를 하면, 해당 모듈이 필요할 때만 불러와서 사용할 수 있다. 

그렇기 때문에 페이지의 로딩 속도를 개선할 수 있는 것이다. 추가적으로 하단의 경우는 번들링될 때 `chunks/firebase-[a-random-string].js `의 형태로 저장되기 때문에 청크된 모듈이 필요해질 때마다 불려간다고 이해하면 될 것이다.

하지만, 이 예제는 Lazy loading을 위한 완벽한 사례는 아니라고 설명한다. 다음의 설명을 보자.



> Frankly, this example is not the perfect use case for lazy loading. That is simply because,
>
> * You need the `firebase` module in all of the pages.
> * Lazy loaded firebase module reduces the size of the main JavaScript bundle `app.js`,
>   but it doesn't affect the initial page loading time since the page is server rendered.
> * Loading of the main JavaScript bundle doesn't block the initial HTML rendering

그 이유를 정리하면, 게으르게 로드된 firebase 모듈(Lazy loaded firebase module)은 app.js의 크기를 줄이긴 했지만, 이 동작이 초기 페이지 로딩에 영향을 주는 것이 아니고 줄어든 app.js가 더 빨리 로드되기 때문에 빠른 상호작용을 제공하는 것이라고 이야기한다. 그렇기 때문에 게으른 로딩을 위한 사례는 아니라고 이야기하는 것이다.

어찌됐든, 이것은 완벽하지는 않지만, 괘 괜찮은 예제임에 틀림없으니 지금은 이정도만 이해하고 넘어가도록 하자.

## Lazy Loading Components

앞선 Lazy Loading Modules의 사례와 마찬가지로 이번에는 꽤 큰 모듈이 아닌 꽤 큰 컴포넌트를 불러오는 것에 대한 이야기이다. 이번 예제는 HOC가 적용된 예제이기 때문에 HOC가 익숙하지 않다면 상대적으로 어렵게 느낄 수 있다. 그렇기 때문에 최대한 HOC에 대한 내용은 배제하고 Lazy Loading Components 개념에 대해 알아보도록 할 것이다.

```js
import React from 'react'
import MyLayout from '../components/MyLayout'
import marked from 'marked'
import Highlight from 'react-highlight'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

export default function WithPost (options) {
  return class PostPage extends React.Component {
    render () {
      return (
        <MyLayout>
          <h1>{options.title}</h1>
          <div>
            <Highlight innerHTML>
              {marked(options.content)}
            </Highlight>
          </div>
        </MyLayout>
      )
    }
  }
}
```

위의 코드에서 다음과 같이 선언부를 수정해보자.

```js
//import Highlight from 'react-highlight'
import dynamic from 'next/dynamic'

const Highlight = dynamic(import('react-highlight'))
```

이것은 NextJS의 dynamic을 이용한 import 방식으로, 이렇게 하면 `react-highlight`가 별도의 파일(chunks/react-hightlight-[a-random-string].js)로 번들링된다.

하지만, 이것에는 문제가 있다. 원하지 않을 때(코드를 하이라이팅 하지 않는 상황)에도 로드되는 것이 그 원인인데, 이를 해결하기 위해서는 HOC를 통해 조건 검사를 하고, 조건에 맞을 때에만 하이라이트를 시켜줘야 한다. 그래서 다음과 같이 HOC를 구성하면 이를 해결할 수 있다.

```js
import React from 'react'
import MyLayout from '../components/MyLayout'
import marked from 'marked'
import Highlight from 'react-highlight'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

export default function WithPost (options) {
    return class PostPage extends React.Component {
        renderMarkdown () {
            // If a code snippet contains in the markdown content
            // then use Highlight component
            if (/~~~/.test(options.content)) {
                return (
                    <div>
                        <Highlight innerHTML>
                            {marked(options.content)}
                        </Highlight>
                    </div>
                )
            }

            // If not, simply render the generated HTML from markdown
            return (
                <div
                    dangerouslySetInnerHTML={{__html: marked(options.content)}}
                />
            )
        }

        render () {
            return (
                <MyLayout>
                    <h1>{options.title}</h1>
                    { this.renderMarkdown() }
                </MyLayout>
            )
        }
    }
}
```

이처럼 정규표현식 검사 코드`/~~~/.test(options.content`를 활용해 하이라이트 여부를 지정해주면 앞선 문제가 해결된다. 앞서 언급한 것처럼 이제 애플리케이션이 필요할 때에만 클라이언트에서 react-hightlight를 다운로드하고, 로드하는 동안 로딩 컴포넌트가 표시된다.

지금까지 설명한 Lazy loading dynamic components는 고성능 애플리케이션에서 꽤 중요한 역할을 한다. 필요할 때마다 컴포넌트를 로드하고, 그 결과 페이지가 다운로드 하는 JS의 양이 줄어들고 애플리케이션을 더 빨리 로드할 수 있으며, 보다 나은 사용자 경험을 제공할 수 있는 것이다.

더불어 NextJS는 동적 컴포넌트에 대해서도 SSR을 제공하기 때문에 동적 컴포넌트로 인한 자원 손실은 우려하지 않아도 되기 때문에 앞선 HOC의 활용 가능한 사례처럼 이용할 수 있을 것이다.



지금까지 NextJS 문서의 아주 기본적인 내용을 알아보았다. 지금까지 설명한 것은 정말로 NextJS에서 제공하는 가장 기본적이고 핵심적인 내용이기 때문에 NextJS에 입문하고자 한다면 위의 내용을 포함한 기본적인 메커니즘을 이해하는 것이 효율적일 것이다.

그러면 다음에는 NextJS를 활용한 실습을 통해 보다 NextJS에 빠져보는 시간을 갖도록 하겠다.