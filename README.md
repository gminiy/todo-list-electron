# Todo App on electron

### Usage
* build 
~~~shell
npm install
npm run package-mac
~~~

### 설명
* 기능

  * 회원가입
  * 로그인
  * Todo, doing, done 3개의 status
  * 각 status 별로 추가/이동/삭제 가능
  * 로그인/회원가입/메인 세개의 page로 구성
  * 서버없이 먼저 구현해본 후에 TCP 서버로 구현해볼것.

* file list

  * html : login, signup, main

  * js : main

    * View : login,  signup, main

    *  controller : login-controller, signup-controller, add-controller, update-controller, delete-controller
    * model: model

  * json

    * login-user, members, item-list

* view js
  * main
    * Electron browser 생성
  * login
    * Id, pw data 받아 loginController 에 전달.
    * login 실패시 안내 메세지 출력
  * signup
    * Id, pw data 받아 signupController에 전달.
    * signup 실패시 안내 메세지 출력(중복 아이디)
  * main
    * Login-user file을 읽어서 user 인식
    * User가 가지고 있는 item list를 item-list.json에서 받아와서 보여줌.
    * data 추가 및 status update, delete 발생 시 각 controller 를 호출하여 해당 기능 수행.
* controller js
  * Login-controller
    * login(id, pw) 메서드
      * members.json 에서 id-pw 쌍이 맞는지 확인
      * login 성공시 model 에게서 user:id 기록된 login-user.json 만들 것을 요청
      * True/false 로 성공 실패 결과 return
  * signup-controller
    * signup(id, pw) 메서드
      * Members.json 에 id가 있는지 확인. 이미 존재하는 아이디면 return false.
      * model 에게 members.json 에 id/pw 쌍 추가할 것을 요청
  * add-controller
    * add(id, item) 메서드
      * Id 에 맞는 items를 item-list에서 받아옴
      * items에 item add
      * Model 에 item-list update 요청
  * update-controller
    * update(id, item, status)
      * id에 맞는 items를 item-list에서 받아옴
      * items에 item status update
      * model에 item-list update 요청
  * delete-controller
    * delete(id, item)
      * Id 에 맞는 items를 item-list에서 받아옴
      * items에 item delete
      * Model 에 item-list update 요청