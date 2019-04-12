---
layout: post
title: Puppeteer vs. Selenium
date: '2019-04-12'
path: '/blog/2019-04-12-puppeteer_vs_selenium'
tags: infra
---

# Puppeteer vs. Selenium

이 글에서는 6개월 전에 올라온 [Puppeteer vs. Selenium](https://linuxhint.com/puppeteer_vs_selenium/)을 바탕으로 둘을 비교해보려고 한다.

우선 둘의 가장 큰 특징은 Headless Chrome을 제어할 수 있도록 도와주는 도구이다. Headless Chrome은 뒤에서 언급할 Headless browser의 한 종류로 Chrome 59부터 지원하기 시작한 브라우저이다.
 
그래서 현 시점에서 가장 대중적인 Node.js - Puppeteer와 Python - Selenium을 중심으로 Headless Chrome을 제어하는 도구들을 비교해보도록 할 것이다.

* [Puppeteer](https://pptr.dev/)

* [Selenium](https://selenium-python.readthedocs.io/)

### 비교

가장 주목해야 할 부분은 사람들의 관심도일 것이다. 이런 관심도를 알 수 있는 가장 단편적인 척도는 GitHub을 통해 얻을 수 있는 정보들일테니 이 둘의 현재(17:00) GitHub 정보를 살펴보자.

Star 수: Puppeteer: 47,872, Selenium: 13,981
master 브랜치의 마지막 커밋 날짜: Puppeteer: 6시간 전, Selenium: 8시간 전
마지막으로 merge된 풀리퀘스트 날짜: Puppeteer: 7시간 전, Selenium: 1일 전

단편적으로나마 Puppeteer가 우세하다는 것을 알 수 있다. 하지만 이 결과는 정말 단편적인 결과이기 때문에 '그렇구나'하고 넘어가도록 하자.

다음으로 살펴볼 내용은 주요 특징이다. 위 글을 토대로 주요 특징을 비교하다보면 자연스럽게 어떤 도구를 선택하면 좋을지가 떠오를 것 같다.

* Puppeteer: Easy Automation, Screenshot Testing, Performance Testing, Web Scraping

> 장점
>
> 1. Works fine for visual testing.
>
> 2. Great for end to end testing.
>
> 3. Fast when compared to Selenium.
> 
> 4. Can take screenshots of webpages.
> 
> 5. More control over tests through Chrome.
>
> 6. Can test offline mode.

> 단점
> 
> 1. Supports only JavaScript (Node)
> 
> 2. Supports only Chrome

* Selenium: Multi-Language Support, Multi-Platform Support, Recording Tool, Web Scraping

> 장점
>
> 1. Multi-platform support.
>
> 2. Multi-language support.
>
> 3. Ability to record tests.
> 
> 4. Can take screenshots too.
> 
> 5. Huge community of users.

> 단점
> 
> 1. Slow when compared to Puppeteer.
> 
> 2. Limited control over tests when compared to Puppeteer.

살펴보다보니 가장 큰 키워드는 속도(셀레니움 < 퍼피티어), 확장성(셀레니움 > 퍼피티어)이라고 생각한다. 속도적으로는 Chrome과 연동해 가장 효율적으로 사용할 수 있는 Puppeteer가 우세하고, 확장성 측면에서는 다양한 언어와 다양한 플랫폼을 지원하는 Selenium이 좋아보인다.

내가 만들고자 하는 웹 크롤러는 국내만이 아닌 중국을 겨냥하고 있기 때문에, 크롬이 아닌 다른 플랫폼에서도 동작 가능해야 할 것 같다.

그래서 결론을 내보자면 속도나 트렌드적으로는 Puppeteer가 맞는 선택이겠지만, 내가 구현하려고 하는 크롤러는 확장성을 완전히 배제할 수 없기 때문에 Selenium쪽으로 포커싱해서 구현하고, 언어는 Python을 이용해야 하는 것이 좋아보인다.