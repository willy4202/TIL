github의 master와 내 Local의 master 상태가 다르기 때문이다.
이럴 땐, checkout master로 이동해주고, github의 최신화된 master를 pull 해와야한다.
그 이유는 내 local master 브랜치는 언제나 remote된 상태와 똑같아야하기 때문이다.

컨플릭트는 어떤 파일에서 났는지 알려준다.

내 `feature/branch`에 pull 해 온 `local master`를 붙여줘야 한다.
이는 `git merge master`를 통해 `feature/branch`에 붙일 수 있다.
만약 최신화된 상태가 돼있다면, conflict가 발생한다.

다시 `git commit -m "Fix: conflict complete"`
`git push origin feature/branch`

---

```
git conflict는 그러면 터미널에서는 확인할 수 없고,
github 홈페이지에서만 확인할 수 있는 문제인 건가?

>>>
컨플릭트 체크를 로컬에서 할 수 있다.
master 최신화 이전에 푸쉬하면 컨플릭트 오류를 마주할 수 있다.
PR을 만들기 이전에 conflict를 방지하고 싶다면
미리 이 과정을 진행해보면 된다.

```

터미널의 컨플릭트 메시지는 다음과 같이 나온다.

![](https://velog.velcdn.com/images/willy4202/post/62576f74-0265-4804-a2c5-a877529f2e86/image.png)

자동으로 머지하는 것에 실패했으니, 너희가 커밋의 결과를 선택해서 다시 알려줘! 라는 뜻

컨플릭트 발생 지점은 vsc를 활용해서 확인 가능하다.
![](https://velog.velcdn.com/images/willy4202/post/3e883b7f-0005-4b4a-87d7-534a4d2bdd27/image.png)

![](https://velog.velcdn.com/images/willy4202/post/06d6162b-d00f-4c85-b115-625c7bec598b/image.png)

이런식으로 알려주는데, `current change`는 지금 내가 수정한 것
`incoming change`는 다른사람이 작업해서 들어온 것을 나타낸다.

---

팁
라우터는 파일 자체가 짧지만,
실제로 파일이 길어진다면, 같은 파일이여도 하단에 다른 컨플릭트가 있을 수 있다.
이땐 컨플릭트를 구분해주는 텍스트를 복사해서 검색해, 다른 컨플릭트를 찾을 수 있다.
무서워 보여도 결국은 텍스트다.

![](https://velog.velcdn.com/images/willy4202/post/c951508b-151d-4ba0-aa14-00ee73cbb37a/image.png)

---

실제 컨플릭트 예제
깃헙상에서 확인할 수 있는 문제다.

![](https://velog.velcdn.com/images/willy4202/post/22beab41-df76-488b-87f6-386e4966e9a7/image.png)

컨플릭트가 발생하면, main/ master에서 Pull로 최신화 해주고
개인 브랜치로 머지하는 방식으로 업데이트 할 수 있다.
거기서 어떤 코드를 사용할 것인지 이야기하고, 다시 push해주면 된다.

![](https://velog.velcdn.com/images/willy4202/post/fec8e712-f0ef-4f81-8243-60bae1926087/image.png)
