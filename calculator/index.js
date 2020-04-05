let $inp = document.forms['cal'];
let $input = $inp.getElementsByTagName('input');
let $cls_btn = document.getElementsByClassName('cls_btn')[0];
let $result_btn = document.getElementsByClassName('result_btn')[0];

// 계산기 입력 처리 함수

function calc(value) {
    // 입력이 들어가면 0을 지운다.
    if ($inp['result'].value == 0) {
        $inp['result'].value = '';
    }

    // 입력 값을 결과창에 출력한다.
    $inp['result'].value += value;
}

// 계산기 초기화 clear

function clr() {
    $inp['result'].value = 0;
}

// 계산 결과 처리 함수

function my_result() {
    var result = document.forms['cal']['result'];

    var calc = eval(result.value);

    $inp['result'].value = calc;
}

// 이벤트 핸들러

// 숫자 및 사칙 연산 버튼

for (let i = 0; i < $input.length; i++) {
    if ($input[i].value != '=' && $input[i].value != 'clear') {
        $input[i].onclick = function() {
            calc(this.value);
        }
    }
}

// 초기화 버튼
$cls_btn.onclick = function() {
    clr();
}

// 결과 버튼
$result_btn.onclick = function() {
    try {
        my_result();
    } catch (error) {
        var $result = $inp['result'];
        $result.value = '입력 오류';
    }
}