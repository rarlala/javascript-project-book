# 계산기 프로젝트

일반적으로 제공되는 윈도우 계산기 프로그램을 웹으로 구현해보는 프로젝트



## 주요 구성 및 기능

- 숫자 입력 버튼 : button 요소에 **클릭 이벤트 핸들러**를 적용해 입력을 판별한다.
- 사칙 연산 버튼 : 사칙 연산 부호를 입력한다.
- 초기화(clear) 버튼 : 현재 입력된 내용을 초기화한다.
- 결과(=) 버튼 : 계산 결과를 표시한다.
- 결과창 : 버튼에서 입력한 내용을 표시하거나 계산 결과를 표시한다.



## 작업 순서

1. HTML과 CSS
2. 주요 변수 선언
3. 숫자 및 사칙 연산 버튼 처리
4. 계산기 입력 처리
5. 계산기 초기화 및 버튼 처리
6. 계산 결과 및 버튼 처리
7. 오류 처리(기능 개선)
8. javaScript code -> jQuery code로 변환



## 프로젝트를 통해 학습한 것들

### [javaScript]

#### form 요소

form 객체는 document 객체의 직계 객체로 자바스크립트에서 'forms'라는 객체명과 name 속성으로 참조할 수 있다.

- `document.formName.typeName.속성(또는 메서드)`
  
  - document 객체의 직계로 form 속성에 정의된 name의 값이 form 요소의 객체명이 되므로 이를 통해 접근
  
  - 코드 예시
  
    ```javascript
    const frm = document.frm;
    const myId = frm.myId;
    const pwd = frm.pwd;
    const send_btn = document.frm.send;
    ```


- `document.forms['formName']['typeName'].속성(또는 메서드)`
  
  - forms라는 객체명을 통해 접근한다. forms 객체의 배열 값에 form에서 지정한 name 속성의 값을 지정하면 해당하는 form에 접근할 수 있다.
  
  - 코드 예시
  
    ```javascript
    const frm = document.forms['frm']['text'].value;
    ```



#### this 객체
this는 **현재 호출한 객체**를 의미하기 때문에 상황이 달라진다.

this 키워드를 사용하면 현재 이벤트 핸들러를 적용한 부모 객체를 의미한다. this 객체는 현재 지정된 문서 객체의 경로를 기억한다.

```javascript
li[0].onclick = function(){
  this.style.backgroundColor = 'red';
}
```

> 프로그램의 매커니즘상 같은 document 객체를 재지정하는 것은 성능 향상에 좋지 않다. 따라서 this 객체는 현재 지정된 문서 객체의 경로를 기억하기 때문에 자주 사용된다.



#### DOM 선택자

`getElementsByTagName('')`

`getElementsByClassName('')`  : 실시간으로 업데이트되는 해당 클래스명을 가진 요소 목록의 HTMLCollection이 반환된다.



#### eval()

eval()은 문자로 표현된 javaScript 코드를 실행하는 함수입니다.



#### 예외 처리: try~catch

```javascript
try {
    처리문
} catch (err) {
    에러 발생 시 처리문
}
```



### [HTML]

#### form 구조

```html
<form>
    <input type="text" id="fname" name="fname">
</form>
```

`input`과 `label`을 사용할 때는 `label`의 `for` 값과 `input`의 `id`값을 맞추면 해당 `label` 클릭 시  `input` 요소도 선택된다. 또한, screen-reader가 load를 읽기 때문에 screen-reader를 사용하는 user들에게도 유용하다.



#### table 구조

`<caption>`을 통해 제목을 나타낼 수 있다.



### [jQuery]

jQuery를 사용하려면 라이브러리를 추가해야한다. jQuery로 처리하면 가장 편한 부분은 선택자 지정과 이벤트 핸들러 처리이다. 



#### find()

현재 지정된 선택자의 후손을 찾는 제이쿼리 메서드이다.



#### val()

입력 요소의 value 값을 읽거나 지정하는 메서드이다. 제이쿼리는 모든 것을 함수 값으로 전달하므로 자바스크립틔 value 속성과 혼동하지 않도록 주의한다.

```javascript
$input.val()		// 읽기
$input.val('write')	// 쓰기
```

