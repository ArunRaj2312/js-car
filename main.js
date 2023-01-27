let obj={
    carName:"Mercedez Benz c300 2002",
    milleage:"4,000miles",
    fuel:"25mpg",
    safety:"5",
    rate:"$134,450",
    strikeRate:"$140,500"
}
let card=document.querySelector(".card");
let imgDiv=document.createElement("div");
card.appendChild(imgDiv);

let image=document.createElement("img");
image.setAttribute("src","black.jpg");
imgDiv.appendChild(image);

let div=document.createElement("div");
div.classList.add("card-con");
card.appendChild(div);

let p=document.createElement("p");
p.innerText="CAR";
p.classList.add("car")
div.appendChild(p);

let head=document.createElement("h1");
head.innerText=obj["carName"];
head.style="margin:15px 0px";
div.appendChild(head);

let mill=document.createElement("p");
let millIcon=document.createElement("i");
millIcon.classList.add("bi-car-front-fill");
millIcon.style="color:black";
mill.appendChild(millIcon);
let span1=document.createElement("span");
span1.innerText="Milleage:";
mill.style="margin:5px 0px";
mill.appendChild(span1);
let span2=document.createElement("span");
span2.innerText=obj["milleage"];
mill.appendChild(span2);
div.appendChild(mill);

let fuel=document.createElement("p");
let fuelIcon=document.createElement("i");
fuelIcon.classList.add("bi-fuel-pump-fill");
fuelIcon.style="color:black";
fuel.appendChild(fuelIcon);
let span3=document.createElement("span");
span3.innerText="Fuel:";
fuel.style="margin:5px 0px";
fuel.appendChild(span3);
let span4=document.createElement("span");
span4.innerText=obj["fuel"];
fuel.appendChild(span4);
div.appendChild(fuel);

let safe=document.createElement("p");
let safeIcon=document.createElement("i");
safeIcon.classList.add("bi-shield-fill");
safeIcon.style="color:black";
safe.appendChild(safeIcon);
let span5=document.createElement("span");
span5.innerText="Safety:";
safe.style="margin:5px 0px";
safe.appendChild(span5);
let span6=document.createElement("span");
for(i=0;i<obj["safety"];i++){
    let icon=document.createElement("i");
    icon.classList.add("bi-star-fill");
    icon.style.color="yellow";
    span6.appendChild(icon);
}
safe.appendChild(span6);
div.appendChild(safe);

let color=document.createElement("p");
color.innerText="pick a color:";
color.style="margin:15px 0px";
div.appendChild(color);

let div1=document.createElement("div");
div1.classList.add("color-rate");
div.appendChild(div1);

let btn1=document.createElement("button");
btn1.setAttribute("id","color-1");
div1.appendChild(btn1);
btn1.addEventListener("click",function(){
    image.setAttribute("src","blue.jpeg");
    p.style="background-color:blue";
});

let btn2=document.createElement("button");
btn2.setAttribute("id","color-2");
div1.appendChild(btn2);
btn2.addEventListener("click",function(){
    image.setAttribute("src","yellow.jpg");
    p.style="background-color:yellow";
})

let btn3=document.createElement("button");
btn3.setAttribute("id","color-3");
div1.appendChild(btn3);
btn3.addEventListener("click",function(){
    image.setAttribute("src","black.jpg");
    p.style="background-color:black";
})

let rate=document.createElement("span");
rate.innerText=obj["rate"];
rate.classList.add("rate");
div1.appendChild(rate);

let strike=document.createElement("span");
strike.innerText=obj["strikeRate"];
strike.style="text-decoration:line-through";
div1.appendChild(strike);

let cart=document.createElement("p");
cart.style="padding:10px 15px;background-color:black;display:inline-block;border-radius:5px;margin:15px 0px";
div.appendChild(cart);

let cartIcon=document.createElement("i");
cartIcon.classList.add("bi-cart-fill");
cart.appendChild(cartIcon);

let cartText=document.createElement("span");
cartText.innerText="Add To Cart";
cart.appendChild(cartText);
