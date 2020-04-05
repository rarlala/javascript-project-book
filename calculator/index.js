let $inp = document.forms['cal'];
let $input = $inp.getElementByTagName('input');
let cls_btn = document.getElementByClassName('cls_btn')[0];
let result_btn = document.getElementsByClassName('result_btn')[0];

// 이벤트 핸들러

// 숫자 및 사칙 연산 버튼
for (var i = 0; i < $input[i].length; i++) {
    if ($input[i].value !== '=' && $input[i].value !== 'clear') {
        $input[i].onClick = function() {
            calc(this.value)
        }
    }
}