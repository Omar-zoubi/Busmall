'use strict'

let maxClick =25;
let attempt=0;

let img1= document.getElementById('firstimg');
let img2=document.getElementById('secondimg');
let img3=document.getElementById('3rdimg');

let button=document.getElementById('B1')
let cont =document.getElementById('div1');
let ulist= document.getElementById('unlist');
let objArr =[];



function Market(name ,source){
    this.name= name ;
    this.source=source;
    objArr.push(this);
    this.vote=0;
    this.show=0;


}

new Market('Bag','img/bag.jpg');
new Market('Banana','img/banana.jpg');
new Market('Bathroom','img/bathroom.jpg');
new Market('Boots','img/boots.jpg');
new Market('Breakfast','img/breakfast.jpg');
new Market('Bubblegum','img/bubblegum.jpg');
new Market('Chair','img/chair.jpg');
new Market('Cthulhu','img/cthulhu.jpg');
new Market('Dog-duck','img/dog-duck.jpg');
new Market('Dragon','img/dragon.jpg');
new Market('Pen','img/pen.jpg');
new Market('Pet-sweep','img/pet-sweep.jpg');
new Market('Scissors','img/scissors.jpg');
new Market('Shark','img/shark.jpg');
new Market('Sweep','img/sweep.png');
new Market('Tauntaun','img/tauntaun.jpg');
new Market('Unicorn','img/unicorn.jpg');
new Market('Usb','img/usb.gif');
new Market('Water','img/water-can.jpg');
new Market('Win','img/wine-glass.jpg');


let firstIn =0;
let secondIn=0;
let theirdIn=0;

function random_poss()
{
    let randomIndex = Math.floor(Math.random() * objArr.length); 
    return randomIndex;

}


function renderThree()
{
    firstIn=random_poss();
    secondIn=random_poss();
    theirdIn=random_poss();

    while ((firstIn===secondIn)||(firstIn===theirdIn)||(theirdIn===secondIn))
    {
        firstIn=random_poss();
        secondIn=random_poss();
        theirdIn=random_poss();
    }
    objArr[firstIn].show++;
    objArr[secondIn].show++;
    objArr[theirdIn].show++;


    img1.setAttribute('src',objArr[firstIn].source);
    img2.setAttribute('src',objArr[secondIn].source);
    img3.setAttribute('src',objArr[theirdIn].source);



}
renderThree();

function choosImg(event)
{    

    attempt++;
    if (attempt<=maxClick)
    {
        if (event.target.id==="firstimg")
        {
            objArr[firstIn].vote++;
        }else if (event.target.id==="secondimg")
        {
            objArr[secondIn].vote++;
        }else {
            objArr[theirdIn].vote++;
        }
        renderThree();

    }else
    {
        cont.removeEventListener('click', choosImg);

        button.addEventListener('click',resultFun);
    }
}


cont.addEventListener('click',choosImg);
let a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,1,15,16,17,18,19,20,21,22,23,24,25];
function resultFun()
{
    let unorList =document.getElementById('unlist');
    let li
    for (let i = 0; i<objArr.length;i++)
    {li =document.createElement('li')
     unorList.appendChild(li);
     li.textContent=`${i+1}. ${objArr[i].name} has ${objArr[i].vote} vote and it had been showen ${objArr[i].show} times.`;

    }
    button.removeEventListener('click',resultFun);

}