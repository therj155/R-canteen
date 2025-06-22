function savemenu1(){
  let  menu1=[ document.getElementById("vegdish1").value,
    document.getElementById("vegprice1").value,
  ];

  localStorage.setItem("todaymenu",JSON.stringify(menu1));
  alert("Menu Saved !");
  document.getElementById("vegdish1").value='';
  document.getElementById("vegprice1").value='';

// put this input data menu in userpage
// dihs and price 
  


}

function loadMenu(){
    let menu1 = JSON.parse(localStorage.getItem("todaymenu"));

if (menu1) {
    document.getElementById("putvegdish1").innerText = menu1[0];
    document.getElementById("putvegprice1").innerText = menu1[1];
}
else {
    console.log("No menu found in localStorage!");
}
}


function savemenu2(){
  let  menu2=[ document.getElementById("vegdish2").value,
    document.getElementById("vegprice2").value,
  ];

  localStorage.setItem("todaymenu2",JSON.stringify(menu2));
  alert("Menu2 Saved !");
  document.getElementById("vegdish2").value='';
  document.getElementById("vegprice2").value='';



}

function savemenu3(){
  let  menu3=[ document.getElementById("vegdish3").value,
    document.getElementById("vegprice3").value,
  ];

  localStorage.setItem("todaymenu3",JSON.stringify(menu3));
  alert("Menu3 Saved !");
  document.getElementById("vegdish3").value='';
  document.getElementById("vegprice3").value='';



}

function savemenu4(){
  let  menu4=[ document.getElementById("vegdish4").value,
    document.getElementById("vegprice4").value,
  ];

  localStorage.setItem("todaymenu4",JSON.stringify(menu4));
  alert("Menu4 Saved !");
  document.getElementById("vegdish4").value='';
  document.getElementById("vegprice4").value='';



}

// store admin data and see in user
function loadMenu2(){
    let menu2 = JSON.parse(localStorage.getItem("todaymenu2"));

if (menu2) {
    document.getElementById("putvegdish2").innerText = menu2[0];
    document.getElementById("putvegprice2").innerText = menu2[1];
}
else {
    console.log("No menu found in localStorage!");
}
}


//user ui 

function loadMenu3(){
    let menu3 = JSON.parse(localStorage.getItem("todaymenu3"));

if (menu3) {
    document.getElementById("putvegdish3").innerText = menu3[0];
    document.getElementById("putvegprice3").innerText = menu3[1];
}
else {
    console.log("No menu found in localStorage!");
}
}

function loadMenu4(){
    let menu4= JSON.parse(localStorage.getItem("todaymenu4"));

if (menu4) {
    document.getElementById("putvegdish4").innerText = menu4[0];
    document.getElementById("putvegprice4").innerText = menu4[1];
}
else {
    console.log("No menu found in localStorage!");
}
}

 

//  dom to change color of btn after click

function btncolor(){
    document.getElementById("order1").style.backgroundColor = "#444444";
     alert("You purchase Dish1 Order-Code:001");
}

function btncolor1(){
    document.getElementById("order2").style.backgroundColor = "#444444";
    alert("You purchase Dish2 Order-Code:002")
}



function btncolor2(){
    document.getElementById("order3").style.backgroundColor = "#444444";
    alert("You purchase Dish3 Order-Code:003")
}

function btncolor3(){
    document.getElementById("order4").style.backgroundColor = "#444444";
    alert("You purchase Dish4 Order-Code:004")
}

function btncolor4(){
    document.getElementById("order5").style.backgroundColor = "#444444";
    alert("This order is not available")
}
function btncolor5(){
    document.getElementById("order6").style.backgroundColor = "#444444";
    alert("This order is not available")
}


function btncolor6(){
    document.getElementById("order7").style.backgroundColor = "#444444";
    alert("This order is not available")
}

function btncolor7(){
    document.getElementById("order5").style.backgroundColor = "#444444";
    alert("This order is not available")

}
