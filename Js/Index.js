let innerbox = document.querySelector(".inner-box");
let btn = document.querySelectorAll('button');
let value = document.getElementById("value");
let i;

for(i=0;i<btn.length;i++) {
 btn[i].addEventListener("click", function() {
  value.style.opacity="1";
  value.style.transition="1s";
  value.innerHTML="";
   if(this.innerHTML == "=") {
     value.innerHTML= eval(value.innerHTML);
   } 
   else {
     if(this.innerHTML=="AC" || this.innerHTML=="CE") {
       value.innerHTML="";
     }
     else {
       value.innerHTML+=this.innerHTML;
     }
   }
 })
}
