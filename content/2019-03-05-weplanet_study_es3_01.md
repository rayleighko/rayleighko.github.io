---
layout: post
title: WePlanet Intern - JS study_01 ES3(스코프, 호이스팅)
date: '2019-03-05'
path: '/blog/2019-03-05-weplanet_study_es3_01'
tags: js
---

# WePlanet Intern - study - ES3(스코프, 호이스팅)



## 이번 스터디 목표

**JS 문법 학습**: 구현만 가능하다고 적재적소에 원하는 코드를 삽입할 수는 없을 것이라는 생각이 있었기 때문에, 이를 해결하기 위해서 JS의 문법을 다시 한 번 학습하고자 하는 필요성을 느꼈다. 하지만 아주 기본적인 단계를 다시 학습하는 건 불필요하다는 생각이 있기 때문에 기본 문법 및 매커니즘 등의 이해는 건너뛴다.

1. ES3(ES1999): 기본적인 문법을 제외한 함수 단위의 스코프, 호이스팅, 클로저, 프로토타입 등
   - [참고자료1 - ES3 vs ES5](http://www.incodom.kr/ECMAScript_5_%EC%A0%95%EC%9D%98#h_a4098c75da114a2ee7591548f11e4a10)
   - [참고자료2 - Scope 이해](http://www.nextree.co.kr/p7363/)

2. ES5(ES2009): forEach, map, reduce, filter, some, every와 같은 순환 메소드, 객체의 프로퍼티 설정(생성, 수정, 복사하는 표준 메소드<Object.Create(), Object.defineProperty(), Object.freeze(), Object.assign()> 등과 getter, setter, Object.key() 메소드), strict 모드(use strict), bind() 메소드 등
   - [참고자료1 - ES3 vs ES5](http://www.incodom.kr/ECMAScript_5_%EC%A0%95%EC%9D%98#h_a4098c75da114a2ee7591548f11e4a10)

3. ES6(ES2015): 호이스팅이 사라진 것 같은 효과, 함수 단위 스코프에서 블록 단위 스코프로 변경됨, this를 동적으로 바인딩하지 않는 화살표 함수, 모듈화 지원, 콜백 지옥에서 구원해줄 Promise, Default와 Rest 파라미터, 해체 할당, Spread 연산자, 템플릿 리터럴, 클래스, 기타 여러 사항(브라우저에서 지원하지 않는 문법 등을 처리하는 트랜스파일러(Babel)과 모듈화를 사용하기 위한 모듈 번들러(WebPack)의 등장, Nodejs의 부상 JS 진영의 생태계 진화에 따라 만들어진 문법) 등

4. ES7(ES2016): 제곱 연산자(**), Array.includes 배열에 해당 요소가 존재하는지 확인하는 메소드

5. ES8(ES2017): async와 await, 객체의 심화된 메소드(Object.entries(), Object.getOwnPropertDescriptors()(Object.getOwnPropertyDescriptor의 복수 형태), 문자열(편의 기능 추가 -> 문자열 앞부분에 공백을 넣어 자리수를 맞추는 String.padStart(), 문자열 뒷부분에 공백을 넣어 자리를 맞추는 String.padEnd()), 매개변수 마지막에 콤마를 붙이는 걸 허용

6. ES9(ES2018): 구조 분해 할당(Spread)(… 키워드), Promise finally(then과 catch 외에도 finally가 추가되었다. 성공, 실패 여부와 상관없이 무조건 실행되는 메서드), Async iteration(async 문법을 생성기랑 for of 문에서도 사용 가능해졌다.), 정규표현식의 강화(lookbehind가 생기고 캡쳐링 그룹에 이름을 지정해 줄 수 있다.)

나는 자바스크립트로 개발을 해왔지만 아직도 ES3조차 익숙하지 않다. 이 스터디는 본격적으로 JS로 개발한지 6개월이 되지 않았다는 점을 빌미로 그동안 미뤄왔던 주제이지만, 이번 기회에 ES3부터 ES9까지의 문법을 학습 및 정리하고, 이를 치트시트의 형태로 사용하면 좋을 것이라고 생각해 결심을 하게 됐다.

추가적으로 각 문법의 특성에 맞게 서술하려고 했기 때문에, 현재에는 다른 방식으로 쓰이는 문법 혹은 더이상 쓰이지 않는 문법들에 대한 해설이 불편할 수 있다. 그래서 이는 시대적 흐름에 맞춰 결론에 이르러서는 어떤 문법을 써야 하고, 쓰지 말아야 하는지를 알게 하기 위함이기 때문에 모든 것을 아는 사람이 읽기에는 다소 불편할 수 있음을 미리 경고한다.

## ES3(ES1999)

우선 ES3는 우리가 흔히 알고있는 JS(이하 JS는 ES3의 문법을 나타냄)라고 이해하면 쉽다. 그렇기 때문에 가장 기본적이라고 할 수 있으며, 그만큼 많은 이들이 사용하고 있다. 물론 필자처럼 사용한다고 아는 것은 아니기 때문에 이번 기회에 같이 학습해보도록 하자.



### 함수단위 스코프(Scope)

Scope은 '유효범위'(이하 스코프)라고 해석할 수 있다. 유효범위는 JS뿐만 아니라 모든 프로그래밍 언어의 가장 기본적인 개념의 하나로 반드시 이해해야 하는 개념이다. 더불어 JS의 유효범위는 조금 특별하다. 이것은 언어적인 특성과 더불어 JS를 JS답게 사용할 수 있도록 하는 중요한 요소이기 때문에 각자 자신이 자신있는 언어와 비교하며 살펴보도록 하자.

일반적인 프로그래밍 언어에서의 스코프는 참조의 범위를 나타낸다. 즉, 변수와 매개변수(parameters)의 접근성과 생존기간을 의미한다. 따라서 스코프를 통해 변수와 매개변수의 접근성과 생존기간을 제어할 수도 있다. 그리고, 일반적인 언어에서의 유효범위는 크게 '**전역 유효범위(global scope)**'와 '**지역 유효범위(local scope)**'의 2가지로 나눌 수 있다.

이 두 가지는 각각 다음과 같은 의미를 지닌다.

```
전역 유효범위: 스크립트의 스코프 가장 바깥쪽에서 정의하며, 스크립트 내 어느 곳에서든 참조될 수 있다.
지역 유효범위: 하나의 메서드 안에서 정의하며, 정의된 메서드 안에서만 참조될 수 있다.
```

```js
var global_scope="global"
function A(a_scope_param){
    var local_scope_a = "local_a"
    
    function B(){
        var local_scope_b = "local_b"
        function (){
            var local_scope_c = "local_c"
            console.log(local_scope_a) // false
            console.log(local_scope_b) // false
            console.log(local_scope_c) // true -> local_c 출력
            console.log(global_scope) // true -> global 출력
        }
    }
}
```



### 1. JS 스코프만의 특징

앞선 개념은 JS를 제외한 대부분의 프로그래밍 언어에서 갖는 스코프의 형태이다. 더불어 JS(ES3)의 스코프는 다음과 같은 추가적인 이해가 필요하다.

* 함수 단위의 유효범위
* 변수명의 중복 허용
* var 키워드의 생략
* 렉시컬 특성



이제부터 천천히 위의 특성들을 살펴보도록 하자.

```js
// 함수 단위의 유효범위
function scopeTest() {  
    var a = 0;
    if (true) {
        var b = 0;
        for (var c = 0; c < 5; c++) {
            console.log("c=" + c);
         }
         console.log("c=" + c);
    }
    console.log("b=" + b);
}
scopeTest();  

/* 실행결과
c = 0  
c = 1  
c = 2  
c = 3  
c = 4  
c = 5  
b = 0  
*/
```



위 코드에서는 JS의 유효범위가 블록 단위가 아닌 함수 단위로 정의된다는 것을 보여주기 위한 코드이다. 다른 프로그래밍 언어들은 유효범위의 단위가 블록 단위이기 대문에 위의 코드와 같은 if문, for문 등 구문들이 사용되었을 때 중괄호 밖의 범위에서는 그 안의 변수를 사용할 수 없다.

하지만, JS의 유효 범위는 함수 단위이기 때문에 예제코드의 변수 a, b, c 모두 같은 유효범위를 갖는다. 그 결과 실행화면처럼 모든 변수가 정상적으로 출력되는 것을 알 수 있다.



```js
// 변수 명 중복
var scope = 10;  
function scopeExam(){  
    var scope = 20;
    console.log("scope = " +scope);
}
scopeExam();  

/* 실행결과
scope =20  
*/
```



JS는 다른 프로그래밍 언어와는 달리 변수명이 중복되어도 에러를 발생하지 않는다. 단, 중복된 변수명을 참조할 때는 가장 가까운 범위의 변수를 참조하도록 한다. 그래서 위의 코드처럼 scope를 호출했을 때, 전역 변수가 아닌 가까이에 있는 지역 변수를 참조한 것이다.



```js
// var 키워드 생략
function scopeExam(){  
    scope = 20;
    console.log("scope = " +scope);
}

function scopeExam2(){  
    console.log("scope = " + scope);
}
scopeExam();  
scopeExam2();  

/* 실행결과
scope=20  
scope=20  
*/
```



대부분의 컴파일 언어의 경우에는 변수를 선언할 때 int나 char과 같이 타입을 명시적으로 선언해줘야 한다. 하지만 JS는 컴파일링을 거치지 않는 스크립트 언어이기 때문에  모든 변수가 명시적으로 선언되지 않더라도 인터프리터를 거친 후에 값에 따라 자동적으로 변수의 타입이 정해진다. 그래서 변수의 자료형이 하나(var)로 통일될 수 있는 것이고, 이는 '생략'해도 무관하다는 것과 동일한 의미를 지닌다. 

그래서 위와 같이 'var' 키워드를 생략하더라도 정상적으로 동작할 수 있는 것이다.



```js
// 렉시컬 특성 Code1
function f1(){  
    var a= 10;
    f2();
}
function f2(){  
    return console.log("호출 실행");
}
f1();

/* 실행결과
호출실행
*/
```

```js
// 렉시컬 특성 Code2
function f1(){  
    var a= 10;
    f2();
}
function f2(){  
    return a;
}
f1();

/* 실행결과
Uncaught Reference Error  
: a is not defined
*/
```



렉시컬 특성이란 함수 실행 시 유효범위를 함수 실행 환경이 아닌 함수 정의 환경으로 참조하는 특성을 말한다. Code1의 경우에는 f1에서 f2를 호출하면 정상적으로 실행된다. 이는 f1과 f2 모두 전역에서 생성된 함수이기 때문에 서로를 참조할 수 있는 것이다.



하지만 Code2처럼 함수 f1안에서 f2를 호출했다고 해서 f2가 f1안에 들어온 것처럼 f1의 내부 변수 a를 참조할 수 없다. 이는 렉시컬 특성으로 인해 f2가 실행될 때가 아닌 정의 될 대의 환경을 보고 a라는 변수를 참조하기 때문에 찾을 수 없는 것이다.



다음으로는 또다른 ES3의 특성 중 하나인 호이스팅(Hoisting)을 살펴보도록 하자.



### 호이스팅(Hoisting)

직역하면 '끌어올리기' 혹은 '들어 올려 나르기'라고 부를 수 있다. JS에서의 호이스팅도 이와 유사한 의미를 가지고 있다. 간단히 JS의 호이스팅은 변수 선언문을 끌어올린다는 뜻으로 이해하면 된다.

```js
// 호이스팅 Code1
function hoistingExam(){  
    console.log("value="+value);
    var value =10;
    console.log("value="+value);
}
hoistingExam();

/* 실행결과
value= undefined  
value= 10  
*/
```

```js
// 호이스팅 Code2
function hoistingExam(){  
    var value;
    console.log("value="+value);
    value =10;
    console.log("value="+value);
}
hoistingExam();  

/* 실행결과
value= undefined  
value= 10  
*/
```



위 두 예제를 통해 호이스팅을 간단하게 이해해보도록 하자. Code1을 보면 hoistingExam 안에서 변수 value의 호출이 2번 일어난다. 한 번은 변수 선언문 전에, 또 한 번은 변수 선언 후에 호출되는데, 다른 프로그래밍 언어의 경우에는 선언문 전에 호출됐을 때 에러가 발생하지만, Js의 경우에는 호이스팅을 통해 Code2와 같은 의미로 구동된다. 즉, 변수 선언문이 유효범위 안의 제일 상단부로 끌어올려지게 되고, 선언문이 있던 자리에서 초기화가 이루어지는 결과를 갖는 것이다. 이때 선언에서는 따로 값을 정해주지 않았기 때문에 undefined가 출력된다.

````js
var value=30;  
function hoistingExam(){  
    console.log("value="+value); 
    var value =10; 
    console.log("value="+value); 
}
hoistingExam();  

/* 실행결과
value= undefined  
value= 10  
*/

````



그렇다면 위 코드에서는 어떤 결과가 나타날까? 다른 프로그래밍 언어에 익숙하다면 첫 번째 호출에서는 전역 변수의 값인 '30'이, 두 번째 호출에서는 지역 변수의 값인 '10'이 들어간다고 생각할 수 있다. 하지만 이 경우에는 JS의 호이스팅으로 인해서 선언 부가 함수 hoistingExam의 최 상단에서 끌어올려 짐으로써 전역변수가 아닌 지역변수를 참조하게 되는 것이다.

다음으로는 함수의 호이스팅을 살펴보도록 하자. 이때는 여러 가지의 함수 정의 방법 중 '오직 함수 선언문 방식만 호이스팅이 가능하다'라는 점을 기억하도록 하자. 다음을 살펴보자.



```js
// 함수 호이스팅 - 함수 선언문
hoistingExam();  
function hoistingExam(){  
    var hoisting_val =10;
    console.log("hoisting_val ="+hoisting_val);
}
/* 실행결과
hoisting_val =10  
*/
```



```js
// 함수 호이스팅 - 함수 표현식
hoistingExam2();  
var hoistingExam2 = function(){  
    var hoisting_val =10;
    console.log("hoisting_val ="+hoisting_val);
}
/* 실행결과
hoistingExam2 of object is not a function  
*/
```



```js
// 함수 호이스팅 - Function 생성자
hoistingExam3();  
var hoistingExam3 = new Function("","return console.log('Ya-ho!!');");  
/* 실행결과
hoistingExam3 of object is not a function  
*/
```



오직 함수 선언문 방식만 호이스팅이 되고 함수 표현식과 function 생성자 방식은 호이스팅되지 않는다. 그 이유는 함수 표현식과 Function 생성자를 통한 함수 정의 방법은 변수에 함수를 초기화시키기 때문에 선언문이 호이스팅되어 상단으로 올려진다 하더라도 함수가 아닌 변수로써 인지하기 때문이다.



