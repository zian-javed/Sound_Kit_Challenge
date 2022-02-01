//div boxes
let box1 = document.querySelector(".pokemon1")
let box2 = document.querySelector(".pokemon2")
let box3 = document.querySelector(".pokemon3")
let box4 = document.querySelector(".pokemon4")
let box5 = document.querySelector(".pokemon5")
let box6 = document.querySelector(".pokemon6")
let box7 = document.querySelector(".pokemon7")
let box8 = document.querySelector(".pokemon8")


//sound
let pokemon1 = document.querySelector("#sound1")
let pokemon2 = document.querySelector("#sound2")
let pokemon3 = document.querySelector("#sound3")
let pokemon4 = document.querySelector("#sound4")
let pokemon5 = document.querySelector("#sound5")
let pokemon6 = document.querySelector("#sound6")
let pokemon7 = document.querySelector("#sound7")
let pokemon8 = document.querySelector("#sound8")



box1.addEventListener("click", () =>{
    pokemon1.pause();
    pokemon1.currrentTime = 0;
    pokemon1.play();
    box1.animate();

})

box2.addEventListener("click", () =>{
    pokemon2.pause();
    pokemon2.currrentTime = 0;
    pokemon2.play();
    box2.animate();

})
box3.addEventListener("click", () =>{
    pokemon3.pause();
    pokemon3.currrentTime = 0;
    pokemon3.play();
    box3.animate();

})
box4.addEventListener("click", () =>{
    pokemon4.pause();
    pokemon4.currrentTime = 0;
    pokemon4.play();
    box4.animate();

})
box5.addEventListener("click", () =>{
    pokemon5.pause();
    pokemon5.currrentTime = 0;
    pokemon5.play();
    box5.animate();

})
box6.addEventListener("click", () =>{
    pokemon6.pause();
    pokemon6.currrentTime = 0;
    pokemon6.play();
    box6.animate();

})
box7.addEventListener("click", () =>{
    pokemon7.pause();
    pokemon7.currrentTime = 0;
    pokemon7.play();
    box7.animate();

})
box8.addEventListener("click", () =>{
    pokemon8.pause();
    pokemon8.currrentTime = 0;
    pokemon8.play();
    box8.animate();

})