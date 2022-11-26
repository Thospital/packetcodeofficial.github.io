const reviews = [{
    id: 1,
    name: 'علبه درفتين برف',
    text:'علبه درفتين برف',
    img:'./1',
    ganp:'',
    ardea:'',
    sakf:'',
    raf:'',
    darfa:'',
    dahr:'',
},
   { id: 2,
    name: 'وحده 4 أدراج',
    img:'./2',
    text:'وحده أربع أدراج',
    ardShaseahDorg:'',
    aumikDorg:'',
},
 /*  { id: 3,
    name: '',
    img:'',
    text:'ر'
    
},
   { id: 4,
    name: '',
    img:'',
    text:'ص'
}*/
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
let tol = document.getElementById('tol');
let ard = document.getElementById('ard');
let aomik = document.getElementById('aomik');



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const ganp = document.querySelector('#ganp');
const sakf = document.querySelector('#sakf');
const raf = document.querySelector('#raf');
const dahr = document.querySelector('#dahr');
const darfa = document.querySelector('#darfa');
const ardea = document.querySelector('#ardea');

const ardShaseahDorg = document.querySelector('#ardShaseahDorg');
const aumikDorg = document.querySelector('#aumikDorg');




let currentItem = 0;

function showPerson(){
    const item = reviews[currentItem];
    console.log(item);
    img.src = item.img;
    ganp.textContent = item.ganp;
    ardea.textContent = item.ardea;
    sakf.textContent = item.sakf;
    raf.textContent = item.raf;
    darfa.textContent = item.darfa;
    dahr.textContent = item.dahr;
    info.textContent = item.text;

    ardShaseahDorg.textContent = item.ardShaseahDorg;
    aumikDorg.textContent = item.ardShaseahDorg;
    
    

}



nextBtn.addEventListener('click', function(){

   
    currentItem++
   if(currentItem > reviews.length-1){
       currentItem = 0;
   }
   showPerson(currentItem);
})


prevBtn.addEventListener('click', function(){
 
 
   currentItem--
   if(currentItem < 0){
       currentItem = reviews.length-1;
   }
  showPerson(currentItem);
})


setInterval(update, 900);
function update() {
   switch(currentItem){
       case 0:
           ganp.innerHTML = "الجنب: " + tol.value + "*" + aomik.value;
           ardea.innerHTML = "الأرضية: " + (ard.value-3.6)+'*'+aomik.value;
           sakf.innerHTML = "السقف: " + 7+'*'+(ard.value-3.6);
           raf.innerHTML = "الرف: " + (ard.value-3.6)+'*'+(aomik.value-1.5);
           dahr.innerHTML = "الضهر: " + (ard.value-2.7)+'*'+(tol.value-2.7);
           break;
       case 1:
           ardShaseahDorg.innerHTML = " عرض شاسيه الدرج : " + 7+'*'+(ard.value-9.9);
           aumikDorg.innerHTML = "عمق الدرج: " + 7+'*'+(aomik.value-5);    
           console.log(currentItem);

   }
}
window.addEventListener('DOMContentLoaded', showPerson());
