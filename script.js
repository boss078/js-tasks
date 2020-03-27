$(document).ready(() => {
  $('.choose-list').bind('touchstart click', () => {
    $('.choose-list').css('background-position', '0 -431px');
    $('.choose-grid').css('background-position', '0 -327px');
    $('.list-main__list-item').css('width', '100%');
    $('.list-main__list-item').css('padding', '0');
    $('.list-main__list-item').css('flex-wrap', 'nowrap');
    $('.list-item__upper-block').css('padding', '30px 2.5% 15px');
    $('.list-info-block__list-header').css('padding', '30px 2.5% 5px');
    $('.list-info-block__list-header').css('margin-bottom', '0');
    $('.list-info-block__info-block').css('padding', '30px 2.5% 5px');
  });
  $('.choose-grid').bind('touchstart click', () => {
    $('.choose-list').css('background-position', '0 -469px');
    $('.choose-grid').css('background-position', '0 -289px');
    $('.list-main__list-item').css('width', '20%');
    $('.list-main__list-item').css('padding', '30px 2.5% 15px');
    $('.list-main__list-item').css('flex-wrap', 'wrap');
    $('.list-item__upper-block').css('padding', '0');
    $('.list-info-block__list-header').css('padding', '0');
    $('.list-info-block__list-header').css('margin-bottom', '35px');
    $('.list-info-block__info-block').css('padding', '0');
  });
});
