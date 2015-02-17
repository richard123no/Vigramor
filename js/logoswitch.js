$('.top-nav-collapse').waypoint(function() {
   alert('do something');
});

$( document ).ready(function() {
    if ($('#hovedmeny').hasClass('top-nav-collapse')) {
          $("img#svartlogo").hide();
          $("img#hvitlogo").show();
    } else {
          $("img#hvitlogo").hide();
          $("img#svartlogo").show();
}
});