## 실행 방법

npm install && npm start

http://localhost:3000 접속

## 데모 영상

https://www.youtube.com/watch?v=c-VhhpvmtaI

## 사용 기술

- react + javascript
- react router dom
- axios

## 설명

todolist를 구현하는 과제입니다.

1. 메인 페이지에서 로그인/회원가입 이동이 가능합니다.

2. signup 페이지에서 회원가입을 할 수 있습니다.  
   이메일에는 '@' 포함, 비밀번호는 8자 이상이어야 합니다.  
   회원가입 성공 시 signin 페이지로 리다이렉션됩니다.

3. signin 페이지에서 로그인을 할 수 있습니다.  
   유효성 규칙은 signup페이지와 같습니다.  
   로그인 성공 시 todo 페이지로 리다이렉션됩니다.

4. todo 페이지에서 새로운 할 일을 추가할 수 있습니다.  
   할 일 목록에서 할 일들을 체크하고, 수정 및 삭제를 할 수 있습니다.  
   수정 모드에서 할 일의 내용을 바꿀 수 있습니다. 도중 취소하면 원래 내용으로 돌아갑니다.  
   만약 access_token 없이 todo 페이지로 접근한다면 signin 페이지로 리다이렉션됩니다.
