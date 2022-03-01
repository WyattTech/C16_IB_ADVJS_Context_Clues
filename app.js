document.addEventListener("DOMContentLoaded", function(){

   var newDiv = document.createElement('div');
   newDiv.id = 'container';
   document.body.prepend(newDiv);
   var accusations = "Accusation ";
   var count = 1;

   for (var i = 0; i < 200; i++) {
    
    var newSpan = document.createElement('span');
    var newH3 = document.createElement('h3');
    i++;
    newH3.className = "ahaMoment"
    newH3.textContent = accusations;
    newSpan.innerHTML = count;
    count++;
    newH3.appendChild(newSpan);
    var h3Text = newH3.textContent;
    
    newDiv.append(newH3)
    newH3.style.fontFamily = 'PT Sans Narrow';

    
    newH3.addEventListener('click', function(){
      function myFunction() { 
       i++;  
       var friendArr = ['Ronnie', 'Ricky',  'Bobbie', 'Mike', 'Ralph'];
       var locationArr = ['hallway', 'garage', 'kitchen', 'patio', 'car', 'pool', 'bedroom', 'den', 'study', 'rec room'];
       var weaponArr = [ 'scissors', 'knife', 'frying pan', 'ice pick', 'pen', 'hammer', 'axe', 'gun', 'boomerang', 'microphone', 'curtains', 'golf clubs', 'bowling ball', 'ice pick', 'tomahawk', 'drum sticks', 'baseball bat', 'tennis racket', 'guitar', 'SonicCare toothbrush'];
       
      
       
       var whoDidIt = h3Text  + " : " + " I accuse " + friendArr[i % 5] + " with the " + weaponArr[i % 20] + " in the " + locationArr[i % 10] + " .";
       
       alert(whoDidIt);
       
       console.dir(myFunction);
   } myFunction(); 
   
});


   }  
var header = document.createElement('header');
var newH1 = document.createElement('h1');
var newImg = document.createElement('img');
newImg.id = 'newImg';
header.append(newImg);
newImg.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F20somethingfinance.com%2Fwp-content%2Fuploads%2F2015%2F10%2FCLUE-Report.jpg&f=1&nofb=1';

newH1.textContent = 'Advanced Javascript  Context Clues';
newH1.id = 'header';
header.appendChild(newH1);
document.body.prepend(header);
newImg.style.height = "550px";
newImg.style.width = "100%";
});









































































































