$(document).ready(function () {
  $(".button-toggle").click(function (e) {
    $(".button-toggle").toggleClass("active");
    $(".navbar-nav").slideToggle("slow").toggleClass("active");
  });
});

$(function () {
  $(".scroll").click(function () {
    $("html, body").animate({ scrollTop: $(".works").offset().top }, "slow");
    return false;
  });
});

$(function () {
  $(".tab-btn").click(function () {
    toggleNav();
  });
});
function toggleNav() {
  if ($("#m-list").hasClass("show-nav")) {
    $("#m-list").removeClass("show-nav");
  } else {
    $("#m-list").addClass("show-nav");
  }
}