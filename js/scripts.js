$(document).ready(function() {


  $("h1").click(function() {
    alert("Dicks dicks dicks");
  });

  $("h2").dblclick(function(){
    alert(fVeggie + ", who eats that?");
  });

  $("p").click(function(){
    $(".lady-shown").toggle();
    $(".lady-hidden").toggle();
  });

  $("ul").click(function(){
    fVeggie = prompt("What's your fav veg?");
    alert(fVeggie + ", wow cool.");
  });

});