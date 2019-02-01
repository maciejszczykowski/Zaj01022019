$(document).ready(function(){
// alert("test");
//Opcje
var szybkosc = 500; //szybkosc przesuwania sie slajdu
var automatycznaZmiana = true; //czy sam przechodzi do kolejnego slajdu
var czasZmianySlajdu = 3000;

// ustawiam 1 slajd jako aktywny
$(".slajd").first().addClass("active");

//ukrywam wsztstjue slajdy
$(".slide").hide();

//pokazuje aktywny

$(".active").show();

//podpinamy klika pod strzalke

$("#next").click(nastepnySlajd);
 

$("#prev").click(poprzedniSlajd);

if (automatycznaZmiana == true) {
    setInterval(nastepnySlajd, czasZmianySlajdu);
}

function nastepnySlajd() {
 //  alert("nastepne");
  //zmieniam nazwe klasy elementu z active na oldActive
  $(".active").removeClass("active").addClass("oldActive");
  //sprawdzam czy ten slajd nie jest przypadkiem ostatni
  if ($(".oldActive").is(":last-child")) {
      //jest ostatni to ustawiam klasę active na 1 slajdzie
    $(".slide").first().addClass("active");
  } else {
    //nie jest ostatni
    //kolejnemu elementowi nadaje klase active
  $(".oldActive").next().addClass("active");
  
  }
  //szukam oldactiva i usuwamy go bo jest juz zbedny
  $(".oldActive").removeClass("oldActive");

  //chowamy slajd fadem (var szybkosc)

  $(".slide").fadeOut(szybkosc);
  //pokazuję aktywny
  $(".active").fadeIn(szybkosc);
}

function poprzedniSlajd() {
//  alert("nastepne");
  //zmieniam nazwe klasy elementu z active na oldActive
  $(".active").removeClass("active").addClass("oldActive");
  //sprawdzam czy ten slajd nie jest przypadkiem ostatni
  if ($(".oldActive").is(":first-child")) {
      //jest ostatni to ustawiam klasę active na 1 slajdzie
    $(".slide").last().addClass("active");
  } else {
    //nie jest ostatni
    //kolejnemu elementowi nadaje klase active
  $(".oldActive").prev().addClass("active");
  
  }
  //szukam oldactiva i usuwamy go bo jest juz zbedny
  $(".oldActive").removeClass("oldActive");

  //chowamy slajd fadem (var szybkosc)

  $(".slide").fadeOut(szybkosc);
  //pokazuję aktywny
  $(".active").fadeIn(szybkosc);
}

});
