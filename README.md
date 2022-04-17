# 원티드 프리온보딩 코스

## Toggle.js

useState hook을 사용하여 false에는 switch가 기본에 오도록, true에는 switch가 상세로 오도록 구현했습니다.
선택 스위치는 z-index를 사용하여 toggle클래스 뒤에 오도록 배치하였으며, 뒤에 있는 스위치가 보여야 되므로 앞의 toggle의 배경은 반투명하도록 만들었습니다.

---

## Tab.js

toggle.js처럼 useState를 사용하여, 초기 상태를 'first'로 하고, 아이탬들마다 handler를 붙여서 클릭시마다 각각의 아이탬으로 값을 변경했습니다. margin을 사용한 toggle.js와는 다르게 tab에서는 tanslateX를 사용하여 bar를 옮겨주었습니다.

---

## Slider.js

### 가장 어려웠습니다... 특히 슬라이더의 모양을 변경하는데 가장 어려웠습니다.

range 슬라이더에 useState를 사용하여 value가 바뀌면 setValue로 값을 바꾸고 그 값을 슬라이더 위의 창에 보여줬습니다.
슬라이더의 밑에는 datalist를 두어서 옵션을 클릭하면 setValue로 값을 바꾸도록, 그리고 value가 변경된 것을 슬라이더에 반영하도록 input value={value} 로 작성했습니다.

가장 까다로운 것은 스타일링이었는데 input을 어떻게 스타일링해야할지 몰라 한참 찾아봤습니다.
슬라이드가 지나기 전에는 회색이, 지나고 난 후에는 초록색이 되어야 하는데 브라우저마다 적용되는게 달라 크로스브라우징 안될 것 같아 고민했습니다.
크로스브라우징을 하려면 브라우저에 적용되는 attribute들을 css에 모두 적어줘야 하는데 모든 브라우저마다 일일히 열어서 확인하는 것은 힘들다고 생각했습니다.
그런데 한 블로그를 보니 linear-gradient를 사용해 동적으로 슬라이더의 색을 바꾸는 방법 (input의 value를 중심으로 이전에는 초록색 이후에는 회색) 을 제시해서 이 문제를 해결했습니다.

또 하나의 문제는 슬라이더 위의 동그라미들이었는데, input type='range'의 atrribute들에 관련 attribute가 있는지 없는지 한참 찾았습니다.😭
일단 저는 못찾아서 div로 5개의 점을 만들고 absolute 포지션으로 점을 만들어서 슬라이더 뒤에 두는 방식으로 해결했습니다. 점들에게 색이 들어오는 것은 위의 슬라이더를 스타일링할 때와 마찬가지로 input의 값을 참조해서 인라인 스타일로 동적으로 스타일링 했습니다.

---

# Input.js

Email을 클라이언트에서 validating하는 것은 그냥 '@'문자가 들어가있으면 유효한 것으로 생각했는데, 선발과제 notion을 자세히 보고 생각을 바꿨습니다.

일단 '@'문자가 들어오면 '@'문자를 기준으로 앞의 user와 뒤의 email-provider로 분리했습니다.
그리고 email-provider는 .을 기준으로 앞과 뒤를 나누어서 길이를 구했습니다.
이메일이 유효한 기준은 user의 길이가 0이 아니고 email-provier를 .으로 나눈 앞과 뒤의 길이가 0이 아니면 유효합니다.
이메일이 유효하면 handler에서 setEmail로 이메일을 받습니다. 이메일이 유효하지 않으면 길이가 0인 문자열을 setEmail 합니다.

만약 email이 유효하면, 즉 email === true면 checkmark의 배경색을 초록색으로 바꿔주고 아니면 회색으로 만들었습니다.

password는 absolute로 포지션된 아이콘에 핸들러를 달아서 아이콘을 클릭하면 isVisible이 토글되도록 만들었습니다.
isVisible이 true이면 type을 text로 만들어서 비밀먼호가 보이고 img의 src는 'eye-outline.svg'가 되도록, isVisible이 false이면 type을 password로 만들어서 비밀번호가 안보이고 img의 src가 'eye-off-outline.svg'가 되도록 만들었습니다.

---

## Dropdown.js

처음 보았을 때는 select를 사용해야 되나 고민했습니다.
하지만 toggle된 메뉴 리스트에 검색창이 있고 검색창과 위의 결과창의 거리가 있게 스타일링 되있어서 select는 사용하지 않기로 했습니다. (select에 관련 attribute가 있는지는 잘 모르겠습니다🤔)

우선 버튼을 만들고 버튼을 클릭하면 아래 검색창과 메뉴리스트가 펼처지도록 만들었습니다.
버튼을 눌렀는지 안눌렀는지는 setIsClicked를 사용하여,
메뉴리스트의 아이템을 선택했는지 안했는지는 setSelectedItem을 사용하여,
입력창의 검색어는 setSearchedItem을 사용했습니다.

우선 메뉴리스트의 아이템들은 searchedItem || map으로 만든 아이템리스트, searchedItem === false 이면, 즉 입력 키워드가 없으면 모든 아이템들이 렌더링 됩니다.
여기서 아이템을 클릭하여 선택하면, setSelectedItem을 하면 선택한 아이템이 결과창에 표시됨니다.

만약에 사용자가 키워드를 입력하면 searchHandler에서 입력 키워드르 소문자로 바꾸고 COINS배열에서 키워드를 포함한 coin을 filter해서 나온 값들을 스타일된 리스트로 감싸서 setSearchedItem에 넣었습니다.
setSearchedItem으로 searchedItem은 true가 되고 렌더링 됩니다.

---

### 구현하면서 어려웠던점

- CSS Attribute 찾기
  어? 이런 속성이 있던가? 어 어떻게 쓰더라? 찾는게 가장 어려웠습니다.
  아예 모르면 질문조차 못하는 것처럼의 반대로, 어떤 속성을 활용할려면 일단 이런 속성이 있다는 사실은 인지해야되는데 속성의 존재여부를 찾는게 어려웠습니다...
  없으면 만들어써야겠죠...

- CSS 스타일링
  스타일링은 항상 어려운 것 같습니다. 생각대로 잘 안됩니다... 일단 처음에 reset.css를 안써서 잘 안되는 것도 있었고 오타로 안되는 것도 있었고 재밌지만 어렵달까 그런 것 같습니다.

- CSS 클래스 이름
  BEM으로 할려고 했는데 하다보니깐 네이밍이 뒤죽박죽 되버렸습니다. ㅎㅎ; 클래스 이름짓기도 항상고민됩니다.
