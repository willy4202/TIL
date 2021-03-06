## 들어가며

지금같은 디지털 시대에선, 모든 일을 인터넷으로 처리할 수 있습니다. 함께 공부를 하거나, 소셜 미디어에서 친구를 만들 수 있으며, 전세계에 있는 사람들과 온라인 게임을 하거나, 음악을 들으며, 비디오를 볼 수 있고, 프리젠테이션을 동료와 함께 공유하거나, 심지어는 비즈니스 미팅을 하는 것도 모두 인터넷으로 할 수 있습니다.

모든 사람들이 인터넷을 이용할 수 있게 된 이후로, 많은 이 인터넷이 어떻게 작동하는지에 대해서 궁금증이 많았습니다.

어떻게 클릭 한번으로 전 세계 어느 곳이든 정확하게 내가 원하는 정보로 이동할 수 있게 된 것인지에 대해서 말이죠.

이번 글에서는 웹 브라우저에 URL을 입력하고 엔터키를 누르면 어떤일이 발생하는지에 대해서 궁금증을 풀어보고자 합니다.

---

## 개념

시작하기 전에, 웹페이지가 무엇인지부터 설명해야겠군요. 웹페이지는 브라우저가 사용할 수 있도록 특정 방식으로 만들어진(포맷된) 텍스트 파일입니다. 대표적으로 `크롬`, `IE`, `FireFox` 등에서 해당 파일을 사용할 수 있습니다. 이 포맷을 `HyperText Markup Language` (이하 HTML)이라고 합니다.

이런 파일들은 서비스를 제공하는 컴퓨터 안에 저장되어, 누군가가 호출하기 전까지 기다리게 됩니다. 그리고 누군가가 호출 할 때! 해당 컴퓨터에서 콘텐츠를 가져다주게 됩니다. 그래서 이를 두고 `server`라고 합니다.

이러한 서버는 클래스에 따라 다를수 있습니다. 가장 일반적이고, 해당 기사에서 주로 이야기할 것은 웹페이지 서비스인 `web server`입니다.

또한, 웹 브라우저나 다른 앱과 상호작용하는데 필요한 코드를 보유하는 어플리케이션 서버를 찾을 수 있습니다. 필요한 데이터를 제공해줄 수 있는 데이터베이스 서버도 있습니다.

현실에 있는 택배와 비슷하게 생각하면 됩니다. 이러한 서버는 해당 콘텐츠를 전달하기 위해 주소를 가지고 있어야하며, 콘텐츠를 이용하려는 사람 또한 서버가 보내주는 콘텐츠를 받을 수 있는 주소가 필요합니다. 이러한 주소를 IP(internet Protocol)이라고 합니다. 마침표로 구분된 0에서 255 사이 4개의 숫자 집합입니다. (127.0.0.1)

다른 중요한 개념은 이런 전송(마치 택배) 서비스가 두가지로 나뉜다는 점입니다. `Transmission Control Protocol (TCP)`,`User Datagram Protocol (UDP)`입니다. 각각의 방법은 내용이 서비스되거나 전달되는 방법을 결정합니다.

### TCP

TCP는 일반적으로 위키피디아나 Google과 같은 정적 웹 사이트와 전자 메일 서비스를 제공하고 컴퓨터에 파일을 다운로드하는 데 사용됩니다. 작은 데이터 패킷으로 파일을 전송하고 각 패킷이 전달되었음을 확인하는 메시지를 함께 전송합니다.

특히, 인터넷에서 어떤 것을 다운로드 받을때, 갑자기 인터넷 연결이 끊겨도 사용자의 패킷 수와 받아야할 패킷 수를 정확하게 알고 있기 때문에, 처음부터 다운로드 받아야할 필요가 없다는 장점이 있습니다.

단점이 있다면, 다음 패킷을 보내기 전에 해당 패킷을 받았는지 여부를 확인하기 때문에 속도가 느린 경향이 있습니다.

### UDP

반면에 `UDP` 방식은 라이브 영상이나 온라인 게임에 주로 사용됩니다.`UDP`방식은 정보가 수신되었는지에 대한 체크가 중요하지 않기 때문에`TCP` 방식보다 훨씬 빠릅니다.

`UDP`방식은 정보 전송에만 집중합니다. 그렇기 때문에, 라이브 영상을 보다가 인터넷 연결이 끊기게 된다면 더 이상 해당 콘텐츠가 이어지지 않는 것입니다. 연결이 되면 현재 진행중인 방송 화면만 볼 수 있게되고, 이전에 연결이 끊겨서 놓친 부분은 볼 수 없게됩니다. (이는 온라인 게임에서도 마찬가지입니다.)

## 그래서 주소창에 google.com을 입력하게 된다면?

그렇다면 다시 원래 질문으로 돌아가봅시다. 웹 브라우저 주소창에 www.google.com이나 다른 URL을 입력한 후 엔터키를 누르면 어떤 일이 생기게 될까요?

먼저, 브라우저에서 캐시를 뒤져봅니다. 해당 웹사이트가 이전에 방문한적이 있거나 IP 주소를 알고 있는지를 확인합니다.

만약, 요청된 URL의 IP 주소를 찾을 수 없는 경우 운영 체제에 웹 사이트를 찾으라고 요청합니다. 운영 체제에서 지정한 URL의 주소를 먼저 확인하는 위치는 호스트 파일입니다.

> (Linux 및 Mac의 경우 /etc/hosts, 윈도우즈의 경우 c:\windows\system32\drivers\etc\hosts)

URL이 이 파일이 없으면 OS는 웹페이지의 IP 주소를 찾기위해 DNS 요청을 진행합니다. 첫번째론, `Resolver(or internet server provider)`에게 IP 주소를 알고 있는지 캐시에서 찾아보도록 요청합니다. 만약 찾지 못한다면, 루트 서버는 요청하여 확인합니다.

만약 URL의 끝부분이 `.NET` 이라면, `TLD`서버에서는 캐시를 다시 체크해서 요청된 IP 주소가 있는지 확인합니다. 그렇지 않으면, 해당 URL과 연결된 네임 서버로 이동한 후 URL과 연결된 IP 주소를 반환합니다. 이 작업은 몇 밀리초만에 완료됩니다. WOW!

OS가 IP주소를 브라우저에게 준 후, GET 요청을 만듭니다. 요청이 다시 만들어지면 브라우저는 OS에 요청을 하고, OS는 앞에서 설명한 TCP 트래픽 프로토콜에 요청을 담아 IP 주소로 전송합니다. 도중에 OS와 서버의 방화벽에 의해 보안 위반이 없는지 확인합니다.

요청을 수신하면 서버(일반적으로 해당 웹 사이트의 사용 가능한 모든 서버로 트래픽을 전송하는 로드 밸런서)는 SSL(Secure Sockets Layer) 인증서와 함께 응답을 보내 보안 세션(HTTPS)을 시작합니다.

마지막으로, 선택한 서버는 HTML, CSS, 자바스크립트 파일(있는 경우)을 OS로 다시 전송하고 OS는 이를 브라우저에 전달하여 해석합니다. 그리고 나서 당신이 알고 있는 당신의 웹사이트를 얻게 됩니다.

## 결론

웹사이트에 접속하기 위해 생기는 복잡성에 대해 아는 것은 놀라운 일이다. 이 과정은 빠르게 이루어져서 극소수만이 해당 과정을 이해하기 시작할 것이다.

이 짧은 기사를 통해 브라우저에서 www.google.com을 입력하고 Enter 키를 누를 때 발생하는 모든 일에 대해 더 많은 통찰력을 얻었기를 바랍니다.

읽어주셔서 감사합니다!

출처 : what happen s when you type google.com in your Browser And Press Enter - https://www.linkedin.com/pulse/what-happens-when-you-type-googlecom-any-other-url-buitrago-vargas
