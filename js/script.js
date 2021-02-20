//スムーススクロール
$(function () {
  //移動するスクリプト
  $('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate({ scrollTop: position }, 500, 'swing');
    return false;
  });
});
// サイト・バナー切り替え
$(function () {
  $('.section_b').hide();
  $('#link_b').on('click', function () {
    $('.section_s').fadeOut(100);
    $('.section_b').fadeIn(1000);
  });

  $('#link_s').on('click', function () {
    $('.section_b').fadeOut(100);
    $('.section_s').fadeIn(1000);
  });
});