// Activity on color changer by  onclick => in bgchanger.html folder it is there

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    //console.log("color updated");
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
})

function getRandomColor(){
  //we have to form rgb value that is red,green,blue //it has range from 0-255
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);

  let color=`rgb(${red},${green},${blue})`;
  return color;

}