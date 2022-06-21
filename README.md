# QuickUseChat

## 프로젝트 설명

- 인게임 채팅과 에브리타임이라는 앱에서 영감을 받아 기획하게 되었고 대학생들을 주 타겟으로 설정했습니다.
- 기본적으로 자신이 설정한 닉네임(익명)으로 활동 가능한 채팅 웹사이트이며 ROOM을 구현하여 지역 채팅을 가능토록 했습니다.

## 사용 기술

- 백엔드
  - Node.js
  - Sequelize
  - Express
  - MySQL

- 프론트 엔드
  - React
  - Proxy

## 구현 주의사항

![캡처](https://user-images.githubusercontent.com/84797433/174744962-4e7c40df-600a-442a-9b33-a56f20181054.PNG)

- client와 server는 각각 실행시켜야 합니다. 터미널을 2개 띄워서 진행하면 됩니다.
- DB 정보는 지워놨습니다. 위 사진에서 나온 대로 개인 DB 정보 입력 후 사용하시면 됩니다.
- 창 닫기 버튼은 맨 처음 서버 실행시 열린 창에선 동작하지 않습니다. 이점 주의해주시길 바랍니다.
- 채팅 내역은 DB에 쌓이지만 채팅창에 복구되는 기능은 없습니다. 인게임 채팅을 모티브로 제작했으니 이 점 주의 바랍니다.  

## 기능 설명

- Room 기능이 있어 서버를 옮겨다니며 사용할 수 있습니다.
- 기본 채널은 1번방입니다.
- 채팅 삭제를 원하시면 채팅 옆 x 표시를 누르시면 됩니다.
- 단, 위 기능은 모두가 사용할 수 있으니 조심하시길 바랍니다.
- 상단 왼쪽 화살표는 나가기 버튼입니다. 종료하고 싶다면 화살표 혹은 닫기를 누르시면 됩니다.
- 맨 처음 접속할 때 Prompt로 닉네임을 입력받습니다. 원하시는 닉네임을 입력하시길 바랍니다.
