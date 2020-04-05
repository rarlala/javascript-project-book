// const $inp = document.forms['cal'];
// const $input = $inp.getElementsByTagName('input');
// const $cls_btn = document.getElementsByClassName('cls_btn')[0];
// const $result_btn = document.getElementsByClassName('result_btn')[0];

// jquery로 변수선언
const $inp = $('form[name=cal]');
const $input = $inp.find('input');
const $cls_btn = $('.cls_btn');
const $result_btn = $inp.find('input[name=result]');
const $result = $inp.find('input[name=result]');

// 계산기 입력 처리 함수

function calc(value) {
    // 입력이 들어가면 0을 지운다.
    if ($result.val() == 0) {
        $result.val('');
    }

    // 입력 값을 결과창에 출력한다.
    let val = $result.val() + value;
    $result.val(val);
}

// 계산기 초기화 clear

function clr() {
    $result.value(0);
}

// 계산 결과 처리 함수

function my_result() {
    let calc = eval($result.val());
    $result.val(calc);
}

// 이벤트 핸들러

// 숫자 및 사칙 연산 버튼

$('input').click(function() {
    let $input_value = $(this).val();
    if ($input.value != '=' && $input.value != 'clear') {
        calc(this.value);
    }
});

// 초기화 버튼
$('.cls_btn').click(function() {
    clr();
});

// 결과 버튼
$('.result_btn').click(function() {
    try {
        my_result();
    } catch (error) {
        $result.val('입력 오류');
    }
})