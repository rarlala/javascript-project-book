# 계산기 프로젝트

일반 윈도우 계산기 같은 계산기 프로그램을 만드는 프로젝트를 진행한다.

### form 객체
form 객체는 document 객체의 직계 객체로 자바스크립트에서 'forms'라는 객체명과 name 속성으로 참조할 수 있다.

- document.formName.typeName.속성(또는 메서드)
  - document 객체의 직계로 form 속성에 정의된 name의 값이 form 요소의 객체명이 되므로 이를 통해 접근
  - document.frm.myId.send;


- document.forms['formName'].['typeName'].속성(또는 메서드)
  - forms라는 객체명을 통해 접근한다. forms 객체의 배열 값에 form에서 지정한 name 속성의 값을 지정하면 해당하는 form에 접근할 수 있다.
  - document.forms['frm']['text'];

### this 객체
this 키워드를 사용하면 현재 이벤트 핸들러를 적용한 부모 객체를 의미한다. this 객체는 현재 지정된 문서 객체의 경로를 기억한다.

```
li[0].onclick = function(){
  this.style.backgroundColor = 'red';
}
```

### eval
eval()은 문자로 표현된 JavaScript 코드를 실행하는 함수입니다.