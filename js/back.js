$("#back-top").hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
#back-top {
  position: fixed;
  bottom: 30px;
  margin-left: 1040px;
}
#back-top a {
  width: 54px;
  height: 54px;
  display: block;
  background: #ddd url(../img/bgs/bg_up_arrow.png) no-repeat center center;
  background-color: #aaa;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  transition: 1s;
}
#back-top a:hover {
  background-color: #777;
}
