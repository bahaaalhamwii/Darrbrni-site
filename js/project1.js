// Navigation Bar

let navigation = document.querySelector('.navigation');
let toogleMenu = document.querySelector('.toogleMenu');
let visible = document.querySelector('.visible')

toogleMenu.onclick = function(){
  navigation.classList.toggle('activeeaa');
  visible.style.display='block'
}




// EXPANDING CRADS
let panels = document.querySelectorAll(".panel");


panels.forEach(panell => {
    panell.addEventListener('click', ()=>{
        removeActiveClasses()
        panell.classList.add('active');
    })
})


function removeActiveClasses(){
  panels.forEach(panell=>{
    panell.classList.remove('active');
  })
}

// ............................................................................................................................................
  let progress = document.querySelector("#progress");
  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");
  let circle = document.querySelectorAll(".circle");

  let currentActive = 1;
  next.addEventListener('click', ()=>{
    currentActive++;
    if(currentActive > circle.length ){
        currentActive = circle.length
    }
    update()
  })

  prev.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive <1){
        currentActive = 1
    }
    update()
  })

  function update(){
    circle.forEach((circles,index) => {
        if(index < currentActive){
            circles.classList.add("active-2");
        }
        else{
            circles.classList.remove("active-2")
        }
    })

    const activ2= document.querySelectorAll(".active-2");
    progress.style.width = ((activ2.length - 1) / (circle.length - 1))*100 + "%"


    if(currentActive ===1){
        prev.disabled = true;
    }
    else if(currentActive === circle.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled=false;
    }
  }

//   *************************************************************************************************************************************  

let countainer33= document.querySelector(".countainer33");
let splitleft= document.querySelector(".split.left");
let splitright= document.querySelector(".split.right");
let splithl= document.querySelector('#splithl');
let splithr= document.querySelector('#splithr');
let btnl= document.querySelector(".btnl");
let btnr= document.querySelector(".btnr");
let form = document.querySelector(".content")

// splitleft.addEventListener('mouseenter',()=>{
//   countainer33.classList.add('hover-left');
//   splithr.style.display = 'none';
//   btnr.style.display = 'none'

// })

// splitleft.addEventListener('mouseleave',()=>{
//   countainer33.classList.remove('hover-left');
//    splithr.style.display = 'block';
//    btnr.style.display = 'block'

// })

// splitright.addEventListener('mouseenter',()=>{
//   countainer33.classList.add('hover-right');
//   form.style.display = 'none'
  
  
// })

// splitright.addEventListener('mouseleave',()=>{
//   countainer33.classList.remove('hover-right');
//   form.style.display = 'block'
  
// })
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// RESPONSIV ACORDION MENU 

let icon1 = document.querySelector("#icon1");
let icon11 = document.querySelector("#icon11");
let panel1 = document.querySelector("#panel-1");
let icon2 = document.querySelector("#icon2");
let icon22 = document.querySelector("#icon22");
let panel2 = document.querySelector("#panel2");
let icon3 = document.querySelector("#icon3");
let icon33 = document.querySelector("#icon33");
let panel3 = document.querySelector("#panel3");
let icon4= document.querySelector("#icon4");
let icon44 = document.querySelector("#icon44");
let panel4 = document.querySelector("#panel4");
icon11.addEventListener('click', ()=>{
  panel1.style.display = 'none';
})

icon1.addEventListener('click', ()=>{
  panel1.style.display = 'block';
})

icon22.addEventListener('click', ()=>{
  panel2.style.display = 'none';
})

icon2.addEventListener('click', ()=>{
  panel2.style.display = 'block';
})

icon33.addEventListener('click', ()=>{
  panel3.style.display = 'none';
})

icon3.addEventListener('click', ()=>{
  panel3.style.display = 'block';
})
icon44.addEventListener('click', ()=>{
  panel4.style.display = 'none';
})

icon4.addEventListener('click', ()=>{
  panel4.style.display = 'block';
})


// BLURIN LOADING
let countainer444 = document.querySelector(".countainer444");
let loadingteast = document.querySelector('.loading-teast');
let bg = document.querySelector('.bg');
 let load = 0;
 let int = setInterval(blurring,30);
 function blurring(){
  load++
  if(load>99){
    clearInterval(int);
  }
  loadingteast.innerHTML = `${load}%`;
  loadingteast.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
 }

 const scale = (num, in_min, in_max, out_min, out_max) =>{
  return((num - in_min) * (out_max - out_min) / (in_max - in_min)) + out_min
 }


//  NUMBER CUNTER


let num1 = document.querySelector("#num1");
let section = document.querySelector(".three");
let stated = false;
let counter1 = 0;
let int2 = setInterval(counter,30);
window.onscroll = function(){
  if(window.scrollY >= section.offsetTop){
  if(!stated){
    counter();
  }
  stated = true;
  }
};
function counter(){
  counter1++;
  if(counter1>99){
    clearInterval(int2);
  }
  num1.innerHTML = `${counter1}`}

  let num2 = document.querySelector("#num2");
let counter3 = 0;
let int3 = setInterval(counter2,30);
function counter2(){
  counter3++;
  if(counter3>149){
    clearInterval(int3);
  }
  num2.innerHTML = `${counter3}`}

  let num3 = document.querySelector("#num3");
  let counter4 = 0;
  let int4 = setInterval(counter5,30);
  function counter5(){
    counter4++;
    if(counter4>119){
      clearInterval(int4);
    }
    num3.innerHTML = `${counter4}`}
// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll',checkBoxes);
function checkBoxes(){
  const triggerBottom = window.innerHeight / 5 *4;
  boxes.forEach((box) =>{
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop <triggerBottom) {
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }

  })
}
// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


let image = document.querySelector('.countdfdfd');
let hearticon=document.querySelector(".heart");
image.addEventListener("click", (e)=>{
  // let xValue = e.clientX - e.target.offsetLeft;
  // let yValue = e.clientY - e.target.offsetTop;
  // console.log(xValue,yValue)
  // hearticon.style.left = `${xValue}px`;
  // hearticon.style.top = `${yValue}px`;


  hearticon.classList.add("active");


  setTimeout(() =>{
    hearticon.classList.remove("active");

  },1000)

})

