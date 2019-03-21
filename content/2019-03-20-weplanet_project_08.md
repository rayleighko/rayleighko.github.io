---
layout: post
title: WePlanet Intern - project Backend_01
date: '2019-03-20'
path: '/blog/2019-03-20-weplanet_project_08'
tags: backend
---

## Node Backend API 서버 - Web Storage

### 현재 상황

이번에 진행하는 프로젝트의 백엔드 부분을 살펴보고 있다. 현재 API 서버를 구현해 Localstorage 방식으로 토큰(AccessToken, refreshToken)을 교환하기 때문에 이에 대해 학습할 필요가 있다고 느꼈다.

[참고자료 - 1 Mozilla, Web_Storage_API ](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

[참고자료 - 2 로컬스토리지, 세션스토리지](https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048)

### Sessionstorage와 Localstorage의 차이

참고자료 1에 따르면 Web Storage는 위의 두 방식이 있고, 이 둘의 차이는 다음과 같다고 한다.

* sessionStorage는 페이지의 세션이 유지되는동안 사용할 수 있는 각 origin별로 별도의 스토리지를 관리합니다. (페이지 리로딩 및 복원을 포함한, 브라우저가 열려있는 한 최대한 긴 시간동안)
* localStorage도 같은 일을 하지만, 브라우저가 닫히거나 다시 열리더라도 유지합니다.

이런 정보를 바탕으로 참고자료 2와 함께 둘의 차이점을 '영구성'이라고 정의할 수 있겠다.