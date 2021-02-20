

//TOPに戻るボタン　ボタン非表示------
$(function () {
  var pagetop = $('#page_top');
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  //クリックでTOPに戻る
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

//ページの内容（HTMLやCSSなど）を全て読み込み準備が整ったら実行
$(function () {
  $('.btnHamburger').on('click', function () {　//.btnHamburgerがクリックされた時の処理
    $(this).toggleClass('is-active');　//.is-activeを付ける・外す
    $('.menu').toggleClass('is-active');
  });
});


