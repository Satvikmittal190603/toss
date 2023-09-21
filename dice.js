
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;


var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

if(n1>n2){
  document.firstElementChild.lastElementChild.firstElementChild.innerHTML="🚩Player 1 Wins!";
}
else if(n2>n1){
  document.firstElementChild.lastElementChild.firstElementChild.innerHTML="Player 2 Wins!🚩";
}
else if(n1=n2){
  document.firstElementChild.lastElementChild.firstElementChild.innerHTML="🚩DRAW!🚩";
}
switch (n1) {
  case 1:document.querySelector(".white_circle1").style.visibility="hidden";
         document.querySelector(".white_circle2").style.visibility="hidden";
         document.querySelector(".white_circle3").style.visibility="hidden";
         document.querySelector(".white_circle4").style.visibility="hidden";
         document.querySelector(".white_circle6").style.visibility="hidden";
         document.querySelector(".white_circle5").style.visibility="hidden";
         break;
  case 2:document.querySelector(".white_circle1").style.visibility="hidden";
         document.querySelector(".white_circle4").style.visibility="hidden";
         document.querySelector(".white_circle3").style.visibility="hidden";
         document.querySelector(".white_circle7").style.visibility="hidden";
         document.querySelector(".white_circle6").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 3:document.querySelector(".white_circle1").style.visibility="hidden";
         document.querySelector(".white_circle3").style.visibility="hidden";
         document.querySelector(".white_circle4").style.visibility="hidden";
         document.querySelector(".white_circle6").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 4://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         document.querySelector(".white_circle3").style.visibility="hidden";
         document.querySelector(".white_circle4").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         document.querySelector(".white_circle7").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 5://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         document.querySelector(".white_circle3").style.visibility="hidden";
         document.querySelector(".white_circle4").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 6://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[2].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[3].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         document.querySelector(".white_circle7").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
}


switch(n2){
  case 1:document.querySelector(".white_circle11").style.visibility="hidden";
         document.querySelector(".white_circle12").style.visibility="hidden";
         document.querySelector(".white_circle13").style.visibility="hidden";
         document.querySelector(".white_circle14").style.visibility="hidden";
         document.querySelector(".white_circle16").style.visibility="hidden";
         document.querySelector(".white_circle15").style.visibility="hidden";
         break;
  case 2:document.querySelector(".white_circle11").style.visibility="hidden";
         document.querySelector(".white_circle14").style.visibility="hidden";
         document.querySelector(".white_circle13").style.visibility="hidden";
         document.querySelector(".white_circle17").style.visibility="hidden";
         document.querySelector(".white_circle16").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 3:document.querySelector(".white_circle11").style.visibility="hidden";
         document.querySelector(".white_circle13").style.visibility="hidden";
         document.querySelector(".white_circle14").style.visibility="hidden";
         document.querySelector(".white_circle16").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 4://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         document.querySelector(".white_circle13").style.visibility="hidden";
         document.querySelector(".white_circle14").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         document.querySelector(".white_circle17").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 5://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         document.querySelector(".white_circle13").style.visibility="hidden";
         document.querySelector(".white_circle14").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
  case 6://document.querySelectorAll(".dots1")[0].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[2].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[3].style.visibility="hidden";
         //document.querySelectorAll(".dots1")[5].style.visibility="hidden";
         document.querySelector(".white_circle17").style.visibility="hidden";
         //document.querySelectorAll(".dots1")[6].style.visibility="hidden";
         break;
}
