let num = prompt('구구단 몇 단을 볼까요?', '1~9의 숫자 입력');

if (num == '' || isNaN(num)) {
    '올바른 값을 입력하세요.'
} else if (num < 1 || num > 10) {
    '1부터 9까지 입력할 수 있습니다.'
} else {
    for (let i = 1; i < 10; i++) {
        document.write(num + '' + i + '=' + num * 1 + '<br>')
    }
}