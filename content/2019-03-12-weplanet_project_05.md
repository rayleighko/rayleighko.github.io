---
layout: post
title: WePlanet Intern - project NextJS_05
date: '2019-03-12'
path: '/blog/2019-03-12-weplanet_project_05'
tags: next
---

## ViewMore(더보기) 동작 구현

### 현재 상황

1. API 서버에는 대략 80개 이상의 Comments(댓글 및 답글)에 대한 정보가 담겨있다.  
2. 이때 API 서버는 20개의 Array 정보를 ApiRoute이라는 추상화된 액션 함수를 통해 하나의 액션 함수(getComments)를 만들고, 이를 프론트 엔드에 Axios로 전달한다. 이때 전달되는 데이터의 형태는 다음과 같이 제공된다(댓글과 답글은 형식 구분없이 스타일만 다르게 제공).  

```json
{
  "list": [
    {
      "id": number, not null, // 모든 comments는 id를 갖는다.
      "content": string, // 내용
      "parent_id": number or null, // 댓글은 null, 답글은 number
      "created_at": string, // 만들어진 시기
      "author_name": string, // 작성자
      "author_image": string, // 작성자 프로필 사진
      "total_count": number, // 답글의 갯수, 답글의 경우는 해당 데이터가 존재하지 않음.
      },
      ...
    ],
    "total_count": number, // 해당 게시글의 댓글 및 답글의 수
    "parent_count": number, // 해당 게시글의 댓글 수
    "limit": number, // 한 번에 전달되는 데이터의 수(default: 20)
}
// 서버에서 전달하는 Parameters는 Id(해당 게시글의 Id), last_created_at(첫 번째로 전달받을 comments의 생성 일자)임.
```

3. 프론트 엔드는 액션 함수를 통해 받은 데이터를 Array.prototype.map으로 뿌려준다.  
4. 이런 상황에서 유저는 viewMore(더보기) 버튼을 눌렀다.  
5. 현재 우리는 viewMore 버튼이 클릭되면 현재를 뷰를 기준으로 다음 20개의 Comments 정보를 유저의 뷰에 전달하고 싶다.  

### 가정 및 의문

1. props를 통해 받은 20개의 Array를 props.comment.list라고 칭하고, 이 props.comment.list에 concat을 통해 다음 20개의 Array를 이어 나가는 게 맞나?
2. props를 통해 받은 20개의 Array를 하나의 로컬 Array
3. props를 통해 받은 20개의 Array를 하나의 로컬 Array로 만들고, 다음 20개의 Array를 다른 로컬 Array로 만들고 둘을 cancat해 렌더하는 게 맞을까?

### 해결 과정

1. 우선 가정 및 의문을 해결하기 위해 [참고자료](https://stackoverflow.com/questions/41616376/concat-vs-push-adding-new-array-in-react-best-practice)를 읽음. 결론: 리액트 컴포넌트의 상태(state)는 직접 변경(setState가 아닌 직접적인 대입(=, push, 등)하면 안된다(불변성 문제). ([docs](https://reactjs.org/docs/react-component.html#state) 참고)
2. 고민하던 와중에 API 서버에서 던져주는 데이터의 구조가 바뀌었다(DOM이 리랜더링하더라도 사용자가 현재 보고 있는 페이지의 구조가 변하면 안되기 때문에 기존의 방식(20개씩 받아 concat하려고 했던 방식)이 아닌 create_at대신 page를 받아 page * limit을 사용자가 보는 comments의 View로 뿌려주도록 하고자 한다). 

```json
{
  "list": [
    {
      "id": number, not null, // 모든 comments는 id를 갖는다.
      "content": string, // 내용
      "parent_id": number or null, // 댓글은 null, 답글은 number
      "created_at": string, // 만들어진 시기
      "author_name": string, // 작성자
      "author_image": string, // 작성자 프로필 사진
      "total_count": number, // 답글의 갯수, 답글의 경우는 해당 데이터가 존재하지 않음.
      },
      ...
    ],
    "total_count": number, // 해당 게시글의 댓글 및 답글의 수
    "parent_count": number, // 해당 게시글의 댓글 수
    "limit": number, // 한 번에 전달되는 데이터의 수(default: 20)
}
// 서버에서 전달하는 Parameters는 Id(해당 게시글의 Id), page(1부터 시작, 1개의 페이지는 total_count까지 limit의 배수만큼 증가, Ex. page가 3이고, limit이 20이면 총 60개의 comments를 보여줌)임.
```
3. concat이 아닌, props로 넘겨 받는 데이터를 state로 변환(직접적이지 않게)해 list를 만들고 이걸 map해서 page가 증가함에 따라 mapping하자!
4. 중간에 props의 list로 map해서 state는 바뀌는데, 이에 따라 View가 변하지 않아서 한참을 삽질했지만, 결국 해결!