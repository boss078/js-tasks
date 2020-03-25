$(document).ready(() => {
  $('.choose-list').click(() => {
    $('.choose-list').css('background-position', '0 -431px');
    $('.choose-grid').css('background-position', '0 -327px');
    $('.list-main__list-item').css('width', '100%');
    $('.list-main__list-item').css('padding', '0');
    $('.list-item__upper-block').css('padding', '30px 2.5% 15px');
    $('.list-item__list-header').css('padding', '30px 2.5% 15px');
    $('.list-item__info-block').css('padding', '30px 2.5% 15px');
  });
  $('.choose-grid').click(() => {
    $('.choose-list').css('background-position', '0 -469px');
    $('.choose-grid').css('background-position', '0 -289px');
    $('.list-main__list-item').css('width', '20%');
    $('.list-main__list-item').css('padding', '30px 2.5% 15px');
    $('.list-item__upper-block').css('padding', '0');
    $('.list-item__list-header').css('padding', '0');
    $('.list-item__info-block').css('padding', '0');
  });
});
