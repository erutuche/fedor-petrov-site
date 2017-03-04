function switchToPage(id) {
  $(".page").hide();
  $("[data-page='" + id + "']").show();
  $(".menu-button").removeClass('selected');
  $(".menu-button[data-page-id='" + id + "']").addClass("selected");
}

function switchPageByHash() {
  var hash = location.hash.replace('#','');
  if (hash) {
    switchToPage(hash);
  } else {
    switchToPage('about');
  }
}

$(function() {
  switchPageByHash();

  window.onpopstate = function(event) {
    switchPageByHash();
  };
})

$(function() {
  var x = $(".mobile-menu-button");
  x.click(function() {
    $(".menu-button").toggleClass("visible");
  })
  var y = $(".menu-button");
  y.click(function() {
    y.removeClass("visible");
  })
})