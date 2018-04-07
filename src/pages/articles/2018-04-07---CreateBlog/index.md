---
title: "Gatsby로 블로그 만들기"
date: "2018-04-04T16:13:00.000Z"
layout: post
draft: false
path: "/posts/createblog/"
category: "Blog"
tags:
  - "Blog"
  - "Gatsby"
  - "Lumen"
description: "Gatsby로 블로그 뚝딱 만드는 이야기입니다."
---

## Gatsby

[Gatsby](https://www.gatsbyjs.org/)는 Static Site 생성기이다. React로 코드가 구성되어있어,
React 덕후인 나는 다른 도구보다 더 친근하게 다가갈 수 있었다.
[React공식 사이트](https://reactjs.org/)도 gatsby로 만들었다는...

## 설치하기

#### install Gatsby<br/>
npm 명령어로 Gatsby를 설치한다.
```
npm install --global gatsby-cli
```

#### [Starter](https://www.gatsbyjs.org/docs/gatsby-starters/) 이용하여 설치하기(테마포함)<br/>
이미 잘 만들어진 Starter를 이용하여 시작하면 해야하는 고생을 조금 줄일 수 있다.
가장 보편적으로 보이는 [Lumen Starter](https://github.com/alxshelepenok/gatsby-starter-lumen) 를 이용하여 시작했다.
만들고자 하는 폴더에 가서 하기 명령어를 실행하면 폴더가 생성되고 폴더안에 파일들이 생성된다.
```
gatsby new [블로그명] https://github.com/alxshelepenok/gatsby-starter-lumen
```

#### 실행하기 - 로컬<br/>
생성된 폴더로 이동해서 하기 명령어를 치면 로컬에 블로그가 실행된다.
```
gatsby develop
```

블로그가 실행되서 localhost:8000 으로 접속하면... 모르는 사람의 블로그가 나온다.
![lumen blog](./firstblog.png)
여기서 부터 모르는 사람의 블로그를 내 블로그로 만드는 작업을 해야한다.ㅠㅠ(화이팅!)

