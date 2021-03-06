---
layout: post
title: WePlanet Intern - project NextJS_02
date: '2019-03-05'
path: '/blog/2019-03-05-weplanet_project_02'
tags: next
---

# (아마도)NextJS를 사용하기 위한 사전 지식



앞선 내용에서 NextJS를 왜 사용하는지, 언제 사용하면 좋을지를 살펴봤다. 하지만, 아직까지 NextJS에서 제공하는 기능을 전부 이해하지 못했기 때문에 이번에는 NextJS에서 제공하는 기능을 하나하나 살펴보도록 하자.

[참고자료 1 - Next.js 2.0\] 간단한 React 전용 서버사이드 프레임워크, 기초부터 본격적으로 파보기](https://velopert.com/3293)

[참고자료 2 - NextJS Getting Started](https://nextjs.org/learn/basics/getting-started)

[참고자료 3 - 리액트 프로젝트 코드 스플리팅 정복하기](https://velog.io/@velopert/react-code-splitting)

[참고자료 4 - Webpack2 에서 React HMR(Hot Module Replacement) 설정하기](http://happycodebox.blogspot.com/2017/03/title_4.html)

[참고자료 5 - Webpack Concepts](https://webpack.js.org/concepts/)

[참고자료 6 - Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

우선 앞선 글에서 적은 NextJS가 제공하는 기능을 가져오자.

```markdown
* Server-rendered by default  
* Automatic code splitting for faster page loads
* Simple client-side routing (page based)
* Webpack-based dev environment which supports [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)(HMR)
* Able to implement with Express or any other Node.js HTTP server
* Customizable with your own Babel and Webpack configurations
```

위의 내용을 한글로 보고 싶다면 이전 글을 참고하도록 하자. 그렇다면 가장 첫 번째, 우리가 익히 알고 있던 'Server-rendered by default'에 대해 살펴보자. 말그대로 "NextJS는 서버 사이드 렌더링을 기본적으로 제공한다"라고 할 수 있을 것이다. 이제는 당연한 이야기지만, NextJS는 리액트기반의 SPA에서 SSR을 하기 위한 도구이기 때문에 이 부분은 이견없이 넘어갈 수 있었다.

하지만 다음 문장에 명시된 'Automatic code splitting for faster page loads'에서 'code splitting'이라는 익숙하지 않은 단어가 등장했다. 그 해답은 [참고자료 1](https://velopert.com/3293)에서 어렴풋이 찾을 수 있었다.



## 코드 스플리팅(Code Splitting)

코드 스플리팅(나누기)이란 일반적인 SPA는 어플리케이션이 Single Page로 구성되어 있기 때문에 예를 들어 A라는 페이지를 보고 싶었을 뿐인데도 페이지를 로딩하면서 사용자가 원하지도 않는 B라는 페이지에 대한 정보도 함께 딸려온다. 이때 코드 스플리팅을 이용하면 새 페이지를 불러오지 않으면서 유동적으로 문제를 해결할 수 있다.

조금 더 디테일하게 설명하자면, 우리가 JS로 애플리케이션을 개발하면, 웹 브라우저의 입장에서는 기본적으로 하나의 파일에 모든 로직이 들어가게 된다. 그렇기 때문에 프로젝트의 규모가 커지면 JS의 용량도 커질 것이고 이와 마찬가지로 페이지 로드를 처리하기 위한 작업도 느려질 것이다. 하지만 코드 스플리팅을 하게 되면, 지금 당장 필요한 코드가 아니라면 다른 파일로 분리시켜서, 필요할 때 로드할 수 있다. 따라서 코드 스플리팅을 하게 되면 페이지의 로딩 속도를 개선할 수 있을 것이다.

여기까지 적고 난 다음 드는 생각은 지금까지의 모든 내용이 귀결된다는 것이었다. 우리는 지금까지 SSR과 CSR에 대해 살펴보았고, SPA에서는 기본적으로 CSR을 체택하지만, NextJS를 통해 쉽게 SSR도 가능하다. 또한, NextJS를 쓰면 SSR의 단점이었던 View를 로드하는 시간을 코드 스플리팅으로 극복할 수 있다는 것이 그것이다.

이제 어느정도 코드 스플리팅에 대해 이해할 수 있었다. 이론적인 이해는 여기까지 진행하도록 하고, 이번 글 이후에 실습을 통해 코드 스플리팅에 대해 더 자세히 알아보도록 하자.



다음 문장인 'Simple client-side routing (page based)'는 말 그대로 페이지 기반 간단한 클라이언트 측 라우팅을 제공한다는 것이다. 이는 NextJS를 써보지 않고 들었을 때는 이해하기 어려울 수 있다. 하지만, 입문자의 입장에서 간단하게 이해하면 NextJS는 기본적으로 pages라는 디렉터리에 각각의 페이지를 저장하고 각각의 페이지를 기반으로 클라이언트에서 (react-router를 이용하는 등) 별도의 라우팅 설정 없이 간단하게 라우팅을 제공한다고 이해하면 된다. 즉, 파일만 만들어도 자동으로 라우팅된다!

다음으로 넘어가서, 'Webpack-based dev environment which supports [Hot Module Replacement(HMR)'을 이해해보자. HMR을 지원하는 웹팩 기반의 개발 환경을 제공한다는 의미로 해석할 수 있을 것이다. 하지만 HMR에 대한 기본적인 이해가 없다면 이 문장이 가지는 진정한 의미를 파악하기는 어려울 것이다. 그래서 이번에는 HMR에 대해 살펴보도록 하자.



### HMR(Hot Module Replacement)

우선 HMR을 이해하기 위해서는 Webpack을 이해해야 한다. 일반적으로 Webpack은 JS 애플리케이션을 위한 정적 모듈 번들러이다. 백 엔드에서는 OS가 별도의 모듈 시스템을 제공하지만, 프론트 엔드 환경에서는 별도의 모듈 시스템이 없기 때문에 Webpack을 통해 모든 assets(HTML, CSS, JS, 이미지, … 등)을 하나 이상의 번들(bundle.js) 파일로 통합하고, 그 과정에서 Webpack은 import나 require를 이용해 프로젝트의 의존성 관리를 하기도 한다.

[Webpack Concepts](https://webpack.js.org/concepts/)에 따르면, Webpack은 다음과 같은 Core Concepts(핵심 개념)을 가지고 있다.

* [Entry](https://webpack.js.org/concepts/#entry)
* [Output](https://webpack.js.org/concepts/#output)
* [Loaders](https://webpack.js.org/concepts/#loaders)
* [Plugins](https://webpack.js.org/concepts/#plugins)
* [Mode](https://webpack.js.org/concepts/#mode)
* [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility)



우리는 Webpack을 다룰 일이 거의 없고, 지금 당장 필요하지 않기 때문에 여기서는 짧게 설명하고, 다음에 기회가 되면 다른 글을 통해 살펴보도록 하자. 우선 **Entry**는 Webpack이 번들링을 위해 애플리케이션을 읽어들일 첫 번째 시작점을 의미한다. 다음으로 **OutPut**은 번들링이 끝난 후 결과물을 저장할 경로와 파일 이름에 대한 설정을 의미하고, **Loaders**는 정적 파일을 번들링하기 위한 Webpack의 다양한 로더에 대한 설정을 입력할 수 있다. 다음으로 **Plugins**는 Webpack의 확장 기능을 의미한다. 즉, 원하는 [Plugin](https://webpack.js.org/plugins/)을 추가하면 해당 Plugin을 사용할 수 있다. **Mode**는 production, development, none으로 설정 가능하며, 각각 의미 그대로 프로젝트의 배포 상태를 의미한다. 마지막으로 **Browser Compatibility**는 Webpack이 ES5와 호환되는 모든 브라우저를 지원한다는 것을 의미한다.

핵심 개념을 살펴보았지만, 우리가 원한 HMR에 대한 설명은 어디에서도 찾을 수 없었다. 그래서 나는 Webpack에서 제공하는 [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)를 살펴봐야 했고, 그제서야 HMR을 이해할 수 있었다.



HMR은 '(뜨거울 정도로)빠른 모듈 교체'라고 이해해도 좋을 것이다. 왜냐하면 HMR은 애플리케이션이 동작하는 동안 모듈을 더하고, 지우는 작업을 풀 리로드하지 않고 진행한다. 이렇게 하면 다음과 같은 몇 가지 방법으로 개발 속도를 높일 수 있다.

* Retain application state which is lost during a full reload.
* Save valuable development time by only updating what's changed.
* Modifications made to CSS/JS in the source code results in an instant browser update which is almost comparable to changing styles directly in the browser's dev tools.

이를 한글로 번역하면 다음과 같다.

- 풀 리로드되는 동안 손실되는 애플리케이션 상태를 유지한다.
- 변경된 내용만 업데이트하여 개발 시간을 절약한다.
- 소스 코드에서 CSS/JS를 수정하면, 브라우저의 개발(dev) 도구에서 직접 스타일을 변경하는 것과 거의 유사한 브라우저 업데이트가 이루어진다. (즉, 코드의 변경과 함께 브라우저의 스타일이 실시간으로 변경된다.)

즉, HMR을 통해 개발 속도를 향상시킬 수 있는 것이다. 이로써 HMR을 왜, 언제 사용해야 하는지도 알았다. 이제 다음 문장인 'Able to implement with Express or any other Node.js HTTP server'에 대해서 살펴볼 수 있겠다. 이는 간단하게 'Express 혹은 다른 Node.js HTTP 서버의 지원이 가능하다'는 의미이다. 즉, NextJS는 Express나 NginX 등 어떤 Node.js HTTP 서버 환경에서든 동작한다고 이해하고 넘어가도록 하자.

마지막으로 'Customizable with your own Babel and Webpack configurations'은 NextJS가 바벨과 웹펙 설정으로 NextJS의 설정을 사용자 임의대로 변경할 수 있다고 이해하면 될 것이다. 이에 대해서는 직접적으로 사용해보지 않았기 때문에 확실하게 이해했다고 보기는 어렵지만, 지금은 그렇게 깊은 단계까지 이해할 필요는 없다고 생각하고 넘어가도록 하자.



여기까지 NextJS를 사용하기 위한 사전 준비가 끝났다. 이제 우리는 NextJS를 왜, 언제, 어떻게 사용하면 좋을지를 이론적으로 이해할 수 있었다. 이제부터는 이론적인 내용은 차치하고, 실습 위주로 문서를 작성해보도록 하자.