let advice= document.getElementById('advice');
let btn= document.getElementById('btn');
let id= document.getElementById('adviceid');

function getadvice() {
    

fetch('https://api.adviceslip.com/advice').then(res=>{
    return res.json();
}).then(data=>{
    const adviceid=data.slip.id;
    let advicetext= data.slip.advice;

    id.textContent=adviceid;
    advice.textContent=advicetext;



})};


btn.addEventListener('click', function () {
    getadvice();
});
    

