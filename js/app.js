'use strict';


let maximumClicks = 25;
let attempts = 0;

let leftImageElement = document.getElementById('leftImage');
let middleImageElement = document.getElementById('midleImage');
let rightImageElement = document.getElementById('rightImage');
let containerEl = document.getElementById('container');


let arrOfObjects = [];
function Market(name, source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.showen=0;
    arrOfObjects.push(this);
}
new Market('bag','img/bag.jpg');
new Market('banana','img/banana.jpg');
new Market('bathroom','img/bathroom.jpg');
new Market('boots','img/boots.jpg');
new Market('breakfast','img/breakfast.jpg');
new Market('bubblegum','img/bubblegum.jpg');
new Market('chair','img/chair.jpg');
new Market('cthulhu','img/cthulhu.jpg');
new Market('dog-duck','img/dog-duck.jpg');
new Market('dragon','img/dragon.jpg');
new Market('pen','img/pen.jpg');
new Market('pet-sweep','img/pet-sweep.jpg');
new Market('scissors','img/scissors.jpg');
new Market('shark','img/shark.jpg');
new Market('sweep','img/sweep.png');
new Market('tauntaun','img/tauntaun.jpg');
new Market('unicorn','img/unicorn.jpg');
new Market('usb','img/usb.gif');
new Market('water','img/water-can.jpg');
new Market('win','img/wine-glass.jpg');










let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
function renderThreeRandomImages(){
    leftImageIndex = generateRandomIndex(); //1
    middleImageIndex =generateRandomIndex();
    rightImageIndex = generateRandomIndex(); 
    

 
    while((leftImageIndex === rightImageIndex)||(leftImageIndex=== middleImageIndex)||(rightImageIndex === middleImageIndex))
    {
        leftImageIndex = generateRandomIndex(); 
        middleImageIndex= generateRandomIndex();
        rightImageIndex=generateRandomIndex();

     
    }
    arrOfObjects[leftImageIndex].showen ++;
    arrOfObjects[middleImageIndex].showen ++;
    arrOfObjects[rightImageIndex].showen ++;
    
  


    leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source); 
    middleImageElement.setAttribute('src',arrOfObjects[middleImageIndex].source);
    rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);


}
renderThreeRandomImages();



function generateRandomIndex(){
            
     let randomIndex = Math.floor(Math.random() * arrOfObjects.length); 
     return randomIndex;
}


containerEl.addEventListener('click', handleClicking);


function handleClicking(event){
    attempts++;
  
    if(attempts <= maximumClicks){
        if(event.target.id === 'leftImage'){
            arrOfObjects[leftImageIndex].votes++;
            
        }else if(event.target.id === 'rightImage'){
            arrOfObjects[rightImageIndex].votes++;
            
        }else {
            arrOfObjects[middleImageIndex].votes++;
            
            }
        renderThreeRandomImages();
        console.log(arrOfObjects);
    }else{
        let unorderdList = document.getElementById('unList');
        let li;
        for(let i = 0 ; i < arrOfObjects.length; i++){
            li = document.createElement('li');
            unorderdList.appendChild(li);
                                             
            li.textContent = `${arrOfObjects[i].name} it has ${arrOfObjects[i].votes} Votes. and also it had been showen  ${arrOfObjects[i].showen}`
        }

        containerEl.removeEventListener('click', handleClicking);
          
    }

}