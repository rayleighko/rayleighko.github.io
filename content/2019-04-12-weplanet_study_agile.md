---
layout: post
title: WePlanet Intern - study agile
date: '2019-04-12'
path: '/blog/2019-04-12-weplanet_study_agile'
tags: infra
---

# WePlanet Intern - study - Agile

## 이번 스터디 목표

이번에 진행할 프로젝트인 node 웹 크롤러에 대한 설계를 진행하고자 한다. 더불어 현재는 계획이 러프하게 되어있어서 [Agile 개발 방법론](https://ko.wikipedia.org/wiki/%EC%95%A0%EC%9E%90%EC%9D%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C)을 통해 개발을 진행할 것이다.

그렇다면 가장 기본적으로 Agile이란 무엇인지, 어떻게 수행해야 하는지에 대해 학습하고 이를 실천해보도록 하자.

### Agile Software Develpments란?

우선 Agile은 아무런 계획이 없는 개발 방법(주먹구구식 개발)과 계획이 지나치게 많은 개발 방법(계획 기반 개발) 사이에서 타협점을 찾고자 하는 방법론이다.

앞서 설명한 양 극단의 개발 방법론은 각각의 단점이 존재했기 때문에 개발을 진행함에 있어 걸림돌이 되곤 했다. 그래서인지 사람들은 이를 해결하기를 원했고 Agile을 생각하게 된다.

우선 계획이 없는 방법론의 경우에는 앞으로의 일을 예측하기 힘들고 효율적이지 못하다는 취약점을 가지고 있으며, 계획에 의존적인 경우는 그 형식적인 절차(업무 보고부터 구체적인 시간 관리 계획 수립 등)를 따르는데 필요한 시간과 비용, 업무적 스트레스를 무시할 수 없었기 때문에 전체적인 개발의 흐름 자체가 느려지는 단점을 가지고 있다.

그렇기 때문에 앞서 언급한 Agile, 애자일을 활용해 이를 해결하고자 한 것이다. 물론 개발 방법론은 은 총알(Silver Bullet)이 존재하지 않기 때문에 각 상황에 따라 앞서 언급한 방법이 옳을 때가 있으니 애자일이라고 마냥 옳은 것이 아니라는 점을 염두해두자.

애자일의 가장 큰 특징은 문서를 통한 개발 방법(기획서, 요구 명세서 등)이 아닌 실질적인 코딩을 통한 방법론이라는 점이다.

그러므로 애자일은 계획을 통해서 주도해 나갔던 과거의 방법론들과는 다르게 앞을 예측하며 개발하지 않고, 일정한 주기를 가지고 끊임없이 프로토 타입을 만들어내며 그때 그때 필요한 요구를 더하고 수정하여 하나의 커다란 소프트웨어를 개발해나가는 것이라고 할 수 있다.

그래서 많은 스타트업 혹은 소규모 팀에서는 하나의 주기를 버전으로 삼아 버저닝을 진행하기도 한다.

그리고 하나 중요한 사실은 애자일 개발 프로세스는 하나의 방법론을 이야기하는 것이 아닌 "Agil(기민한) 개발을 가능하게 하는 다양한 방법들"을 이야기 한다는 것이다.

그래서 XP니 칸반이니 스프린트니 하는 다양한 방법들이 모두 애자일에 속한다고 할  수 있다. 그래서 "우리 회사는 칸반만 하는데 이것도 애자일이냐?"라고 하면 당연히 맞다고 할 수 있다.

### 종류

이제는 애자일 개발 프로세스로 불리는 개발 방법론들을 살펴보고 지금 나에게 맞는 방법론은 무엇이 있을까에 대해 고민해보도록 하려고 한다.

물론 여기서는 모든 애자일 방법론을 적지는 못하고, 가장 유명한 XP(Extreme Programming)과 스크럼에 대해서만 알아보려고 한다.

둘의 특징은 다음과 같다.

* 익스트림 프로그래밍(XP): 애자일 개발 프로세스의 대표자로 애자일 개발 프로세스의 보급에 큰 역할을 하였다. 이 방법은 고객과 함께 2주 정도의 반복개발을 하고, 테스트 주도 개발(TDD)을 특징으로 하는 명시적인 기술과 방법을 가진다.

* 스크럼: 30일마다 동작 가능한 제품을 제공하는 스프린트를 중심으로 한다. 매일 정해진 시간에 정해진 장소에서 짧은 시간의 개발을 하는 작은 팀을 위한 프로젝트 관리 중심의 방법론이다.

### 결론

정리해보면, 전자의 경우는 2주 정도의 반복 개발과 TDD를 중심으로 개발하고, 후자의 경우는 30일을 기점으로 동작 가능한 제품을 제공하고, 매일 일정과 현황을 공유한다고 한다.

지금 내가 구현하려고 하는 웹 크롤러는 초기 완성물(MVP)의 완성도가 낮기 때문에 전자와 같이 2주 정도의 기간동안 개발하는 것으로 하려고 한다.

더불어 WePlanet에서는 매일 아침 일정과 현황을 공유한다. 따라서 조금 정리해보면, 2주동안 동작 가능한 제품을 제공하는 스프린트를 중심으로 하되, 매일 정해진 시간에 정해진 장소에서 일정과 현황을 공유할 것이다.

물론 TDD를 하면 좋지만, MVP의 완성도가 낮기 때문에 처음에는 TDD가 아닌(사실 잘 하지 못하기 때문) 일반적인 개발 플로우를 따르려고 한다.