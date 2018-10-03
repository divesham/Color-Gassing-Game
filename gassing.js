var numsquare=6;
var colors=[]; //reset gernerate the colors
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var clickedButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");


init();

function init(){
  setupModeButtons();
   setupSquare();
   reset();
}

 function setupModeButtons(){
  for(var i=0;i<modeButton.length;i++){
    modeButton[i].addEventListener("click",function(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent==="Easy" ? numsquare=3:numsquare=6;//terniary operator work same work like if else
    reset();
  });
  }
  
 }

 function setupSquare(){
   for(var i=0; i<squares.length; i++){
   //add click listener to squares 
     squares[i].addEventListener("click",function(){
      //grab color of clicked color
      var clickedcolor=this.style.backgroundColor;
      if(clickedcolor===pickedcolor){
      //we can use for loop for make backgroundColor same
          var color=clickedcolor;
          changeColor(color);
          messageDisplay.textContent="correct";
          h1.style.backgroundColor=color;
          //code for button is clicked
          clickedButton.textContent="Play Again";
     }
      else{
        this.style.backgroundColor="#272727";//color"" ke ander degeye;
               messageDisplay.textContent="try again";//try again ko double quetes ke ander rakhna hai
      }
     });
}
 }
 
 function reset(){
  //figure out how many squares to show
    //pick new colors
    //pick a new pickedcolor
    //genrate randaom colors
   colors=generateRandomColors(numsquare);
  //pick the color
  pickedcolor=pickColor();
  //update h1 color
 colorDisplay.textContent=pickedcolor;
  //update the square
   for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    if(colors[i]){
    squares[i].style.display="block";
    }
    else{
      squares[i].style.display="none";
    }
  }
  clickedButton.textContent="new color"
  //h1 background set to original
  h1.style.backgroundColor="rgb(141, 162, 215)"
  messageDisplay.textContent="      ";
    //update page to refresh changes 

 }

 
clickedButton.addEventListener("click",function(){
 reset();
});
 

function changeColor(color){
     for(var i=0;i<squares.length;i++){
          squares[i].style.backgroundColor=color;
     }
}
function pickColor(){
     var random=Math.floor(Math.random()*colors.length);//here i missed * initially
     return colors[random];
}
function generateRandomColors(num){
     var a=[];// don't use it a[]
     for(var i=0; i<num;i++){
          a.push(randomColor());//don't use a[i] insted of a in array method and what ever your have to add take inside push method;
     }
     return a;
}
function randomColor(){
   var r=Math.floor(Math.random()*256);  
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);
   return "rgb("+r+", "+g+", "+b+")";
}
