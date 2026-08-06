const pages = [
{
title:"Hey Rasmalai ❤️",
message:"I made something very special just for you. Please read it till the end...🥺",
gif:"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
button:"Continue 💌"
},
{
title:"I'm Sorry... 🥺",
message:"I know I made mistakes. But I never wanted you to feel like I was taking you for granted. That was never my intention.",
gif:"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
button:"Next ❤️"
},
{
title:"Please Forgive Me 🤍",
message:"If my actions made you feel ignored, unimportant or hurt... I'm truly sorry. You mean so much to me, Rasmalai.",
gif:"https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
button:"Keep Reading 🌸"
},
{
title:"One Last Chance 💖",
message:"I'm not asking you to forget everything. I'm only asking for one last chance to prove that I can be better. ❤️",
gif:"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
button:"Final Message ✨"
}
];

let index = 0;

const title = document.getElementById("title");
const message = document.getElementById("message");
const gif = document.getElementById("gif");
const btn = document.getElementById("nextBtn");

btn.onclick = () => {

if(index < pages.length-1){

index++;

title.innerHTML = pages[index].title;
message.innerHTML = pages[index].message;
gif.src = pages[index].gif;
btn.innerHTML = pages[index].button;

}else{

document.querySelector(".container").innerHTML=`

<h1>I Love You Rasmalai ❤️</h1>

<p>
Thank you for reading everything.🥹❤️<br><br>

Please forgive me...

I promise I'll never intentionally make you feel like I was taking you for granted.

Will you give me one last chance? ❤️
</p>

<button id="yes">Yes 💖</button>

<button id="no" style="background:#888;margin-top:15px;">
No 🙈
</button>

`;

const no=document.getElementById("no");

function move(){

no.style.position="absolute";
no.style.left=Math.random()*70+"%";
no.style.top=Math.random()*70+"%";

}

no.addEventListener("mouseover",move);
no.addEventListener("touchstart",move);

document.getElementById("yes").onclick=()=>{

alert("Yayyyy ❤️🥹 Thank You Rasmalai");

};

}

};

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},400);
