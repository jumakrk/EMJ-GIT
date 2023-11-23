let btndiv = document.getElementsByClassName('cbtns');
let cards  = document.getElementsByClassName('card');

let btnsarray = []
let cardarray = []

for(let element of btndiv){
    btnsarray.push(element)
}

for(let element of cards){
    cardarray.push(element)
}

cardarray.forEach((element, i) => {

element.addEventListener('mouseover', ()=>{
    btnsarray[i].style.visibility = "visible";
},false)

element.addEventListener('mouseleave', ()=>{
    btnsarray[i].style.visibility = "hidden";
},false)

});
