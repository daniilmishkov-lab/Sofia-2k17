console.log("stations geladen:", stations);
const params =
new URLSearchParams(window.location.search);


const stationID =
params.get("id");


const station =
stations[stationID];


document.getElementById("title").innerHTML =
station.title;


document.getElementById("question").innerHTML =
station.question;



function checkAnswer(){


let answer =
document.getElementById("answer")
.value
.toLowerCase()
.trim();



if(answer === station.answer){


localStorage.setItem(
station.reward.id,
"true"
);



document.getElementById("result").innerHTML =

`

<h2>🎉 Красава!</h2>

<p>
Вы нашли:
</p>


<img src="${station.reward.image}"
width="120">


<p>
${station.reward.name}
</p>


<a href="map.html">
🗺️ Zurück zur Karte
</a>

`;

}

else {


document.getElementById("result").innerHTML =

"❌ Лошара, подумай ещё.";

}


}
