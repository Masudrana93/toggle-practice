 let boxOneId = document.getElementById("box-one-id");
 let boxTwoId = document.getElementById("box-two-id");
 let box3Id = document.getElementById("box-3-id");
 let box4Id = document.getElementById("box-4-id");
 let box5Id = document.getElementById("box-5-id");
 let box6Id = document.getElementById("box-6-id");


 boxOneId.addEventListener('click' , function(){
    boxTwoId.classList.toggle("d-none")
})

boxTwoId.addEventListener('click', function(){
    box3Id.classList.toggle("d-none")
})

box3Id.addEventListener('click', function(){
    box4Id.classList.toggle("d-none")
})

box4Id.addEventListener('click', function(){
    box5Id.classList.toggle("d-none")
})

box5Id.addEventListener('click', function(){
    box6Id.classList.toggle("d-none")
})

