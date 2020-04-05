$(function() {
    const $indicator = $('.indicator button');
    const $lightbox = $('#lightbox');
    const $block = $('#block');

    // 라이트 박스 표시
    function lightbox_open(num) {
        $lightbox.addClass('active');
        $block.addClass('active');
        // 이미지 전환 함수 추가
        change_img(num);
        $indicator.eq(num).focus();
    }

    // 라이트 박스 닫기
    function lightbox_close() {
        $lightbox.removeAttr('class');
        $block.removeAttr('class');
    }

    // 이미지 전환 함수
    function change_img(num) {
        const $imgs = $('figure > img');

        for (let i = 0; i < $imgs.length; i++) {
            $imgs.eq(i).removeAttr('class');
        }

        $imgs.eq(num).attr('class', 'active');
    }

    // 이미지 목록 click 이벤트 | 라이트 박스 열기
    $('img.thumb').click(function() {
        let $img_num = $('img.thumb').index(this);
        lightbox_open($img_num);
    })

    // 라이트 박스 닫기 버튼 click 이벤트
    $('.btn-close').click(function() {
        lightbox_close();
    });

    // 인디케이터 클릭 시 click 이벤트 | 라이트 박스 이미지 변경
    $indicator.click(function() {
        let img_num = $(this).index();
        change_img(img_num);
    });

})