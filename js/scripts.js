$(document).ready(function() {

  var fVeggie;

  $("h1").click(function() {
    alert("Dicks dicks dicks");
  });

  $("p").click(function() {
    alert("LOREM IPSUM LOREM IPSUM");
  });

  $("h2").dblclick(function(){
    alert(fVeggie + ", who eats that?");
  });

  $("img").hover(function(){
    alert("WATCH OUT");
    alert("NAKED LADY");
  });

  $("ul").click(function(){
    fVeggie = prompt("What's your fav veg?");
    alert(fVeggie + ", wow cool.");
  });

});