
let b = Math.floor(Math.random() * 10 + 1);


let attamp = 3;
 
document.getElementById("guesbtn").onclick = function(){
    let a = document.getElementById("guessNumber").value;

  
 if(a==b){
    alert ("Congraculation !! You Right Choise" +" "+ attamp);
   

 }else if (a>b){
    attamp++;
    alert(" Try Again!! Lass Number");
  
 }
 else{
    attamp++;
    alert(" Try Again!! Greater Number"); this is change   
 }



}
    
