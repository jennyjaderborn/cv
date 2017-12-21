
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 100 - Math.random() * 100;
  /*
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }*/
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i],
            JSON.parse(toRotate), period);
      }
    }
  };


  $(document).ready(function(){

  //MOUSEOVER AND MOUSEOUT CESOIR
  document.getElementById("cesoir").onmouseover = function(){mouseOverCesoir()};
  document.getElementById("cesoir").onmouseout = function(){mouseOutCesoir()};

function mouseOverCesoir() {

  document.getElementById("cesoirText").innerHTML = "<p class='rubrik'>Cesoir</p> " + "Ett projekt med uppgift att bygga en sida utefter en bestämd design";

}

function mouseOutCesoir() {
  
  document.getElementById("cesoirText").innerHTML = "";
}

//MOUSEOVER AND MOUSEOUT VEGOKÖKET


document.getElementById("vegokoket").onmouseover = function(){mouseOverVegokoket()};
document.getElementById("vegokoket").onmouseout = function(){mouseOutVegokoket()};

function mouseOverVegokoket() {
document.getElementById("vegokoketText").innerHTML = "<p class='rubrik'>Vego-köket</p> " + "Mitt egna skolprojekt med egentänkt idé, design och utformning!";

}

function mouseOutVegokoket() {

document.getElementById("vegokoketText").innerHTML = "";
}

//MOUSEOVER AND MOUSEOUT STORSKOGEN


document.getElementById("storSkogen").onmouseover = function(){mouseOverStorSkogen()};
document.getElementById("storSkogen").onmouseout = function(){mouseOutStorSkogen()};

function mouseOverStorSkogen() {
document.getElementById("storSkogenText").innerHTML = "<p class='rubrik'>Storskogen</p> " + "Här fick vi i uppgift att skapa en infosida för ett populärt skogsområde med SJ:s app som inspiration!";

}

function mouseOutStorSkogen() {

document.getElementById("storSkogenText").innerHTML = "";
}


//MOUSEOVER AND MOUSEOUT VRINK


document.getElementById("vrink").onmouseover = function(){mouseOverVrink()};
document.getElementById("vrink").onmouseout = function(){mouseOutVrink()};

function mouseOverVrink() {
document.getElementById("vrinkText").innerHTML = "<p class='rubrik'>VR-ink</p> " +  "Ett projekt där en hemsida skulle fixas för en VR-arkad, med info om virtual reality och möjlighet till bokning(bokningssystemet gjort av vår lärare). ";

}

function mouseOutVrink() {

document.getElementById("vrinkText").innerHTML = "";
}


//MOUSEOVER AND MOUSEOUT TODO


document.getElementById("todo").onmouseover = function(){mouseOverTodo()};
document.getElementById("todo").onmouseout = function(){mouseOutTodo()};

function mouseOverTodo() {
document.getElementById("todoText").innerHTML = "<p class='rubrik'>TODO</p> " +  "En sida där du kan skapa din egna todo-lista. Lägg till nya todo´s eller radera todo´s genom att klicka på! Användarnamn: test Lösen: password ";

}

function mouseOutTodo() {

document.getElementById("todoText").innerHTML = "";
}



});


  
  