var pa = document.getElementById("pa");


function Changemedmode(){
alert("This is working but now showing.");
var met = document.getElementById("m");
var wm = met.value;
pa.classList.add("na");
if (wm == "4,7,8"){
pa.classList.replace(pa.classList[0],"fse");}

else if (wm == "10,10"){
pa.classList.replace(pa.classList[0],"tt");
}

else if (wm == "11,7"){
pa.classList.replace(pa.classList[0],"es");}                  
else if (wm == "7,4"){ 
pa.classList.replace(pa.classList[0],"sf");}  
             }



function Vchanged(){alert("Value changed");}




    
sb.addEventListener("change",Changemedmode());    
    
