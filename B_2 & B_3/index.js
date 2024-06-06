let tagH1 = document.getElementById("title");
tagH1.innerHTML = "Hello Hoang"

document.getElementById("demo").innerHTML="OMG"

tagH1.style.backgroundColor = "pink";
tagH1.style.color="red";
tagH1.style.padding="20px";

document.getElementById("hinhAnh").src ="https://storage.googleapis.com/sticker-prod/BDsAm62DotqLKLqTVjuB/13-2.png"

let tagH3 = document.getElementById("title2").className
document.getElementById("title2").className += " bg-dark text-white text-center"

// TESTDOM 2
document.querySelector(".container button.btn-dark").onclick= function(){    
    let email = document.getElementById("email").value;
    let passsword =document.getElementById("password").value
    console.log(email)
    console.log(passsword)
}

// TESTDOM 3 & 4
let Bulb=document.querySelector(".container img")

document.querySelector(".container button.btn-success").onclick= function(){
    Bulb.src="./img/pic_bulbon.gif"
}
document.querySelector(".container button.btn-danger").onclick= function(){
    Bulb.src="./img/pic_bulboff.gif"
}

Bulb.onmouseenter=function(){
    Bulb.src="./img/pic_bulbon.gif"
}
Bulb.onmouseleave =function(){
    Bulb.src="./img/pic_bulboff.gif"
}

// TESTDOM5

let sumNumber=3+5

let tagImg=document.createElement("img");
tagImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG130x_gKHmnUb3WvH7wqQW31uNsLBs_lmtiq73XvOw&s"
tagImg.className="h-40 w-40"
document.getElementById('Demo5').appendChild(tagImg)
document.getElementById('Demo5').innerHTML+=`<div class='bg-primary'>Hello ${sumNumber}</div><p class='bg-success'>Trung</p>`