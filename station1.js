function checkAnswer(){

let answer =
document.getElementById("answer").value
.toLowerCase()
.trim();


if(answer === "Pharaoh") {


localStorage.setItem(
"kopfhoerer",
"true"
);


document.getElementById("result").innerHTML =

`
<h2>🎉 Красава!</h2>

<p>
Ты нашёл:
</p>

<img src="img/kopfhoerer.jpg"
width="120">

<p>
🎧 Наушники
</p>

<a href="map.html">
Вернуться к карте
</a>

`;


}

else {


document.getElementById("result").innerHTML =
"❌ Лошара, подумай ещё";


}

}
