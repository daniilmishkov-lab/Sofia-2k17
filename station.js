console.log("stations geladen:", stations);
const params =
new URLSearchParams(window.location.search);


const stationID =
params.get("id");

const station =
stations[stationID];
if (!station) {

    document.body.innerHTML =
        "<h1>❌ Station nicht gefunden</h1>";

    throw new Error(
        "Station existiert nicht: " + stationID
    );

}
document.getElementById("title").innerHTML = station.title;
if (station.image) {

    document.getElementById("questionImage").innerHTML = `

        <img
            src="${station.image}"
            class="question-image">

    `;

}
if (station.images) {

    document.getElementById("questionImage").innerHTML = `

        <div class="question-images">

            ${station.images.map(image => `

                <img
                    src="${image}"
                    class="question-image-many">

            `).join("")}

        </div>

    `;

}
document.getElementById("question").innerHTML = station.question;
const answerArea =
    document.getElementById("answerArea");


/* TEXT */

if (station.type === "text") {

    answerArea.innerHTML = `

        <div class="answer-box">

        <input
        id="answer"
        type="text"
        placeholder="Deine Antwort..."
        autocomplete="off">

        </div>
    `;

}


/* MULTIPLE CHOICE */

if (station.type === "multiple") {

    station.options.forEach(option => {

        answerArea.innerHTML += `

            <label class="option">

                <input
                    type="radio"
                    name="answer"
                    value="${option}">

                ${option}

            </label>

        `;

    });

}


/* ZUORDNUNG */

if (station.type === "matching") {

    station.pairs.forEach((pair, index) => {

        answerArea.innerHTML += `

            <div class="matching-row">

                <strong>
                    ${pair.left}
                </strong>

                <select id="match${index}">

                    <option value="">
                        auswählen
                    </option>

                    ${station.options.map(option => `
                        <option value="${option}">
                            ${option}
                        </option>
                    `).join("")}

                </select>

            </div>

        `;

    });

}


function checkAnswer() {

    let correct = false;


    /* TEXT */

    if (station.type === "text") {

        const answer =
            document.getElementById("answer")
            .value
            .trim()
            .toLowerCase();


        correct =
            answer ===
            station.answer.toLowerCase();

    }


    /* MULTIPLE CHOICE */

    if (station.type === "multiple") {

        const selected =
            document.querySelector(
                'input[name="answer"]:checked'
            );


        if (selected) {

            correct =
                selected.value === station.answer;

        }

    }


    /* ZUORDNUNG */

    if (station.type === "matching") {

        correct = true;


        station.pairs.forEach((pair, index) => {

            const selected =
                document.getElementById(
                    "match" + index
                ).value;


            if (selected !== pair.right) {

                correct = false;

            }

        });

    }


    /* FALSCH */

    if (!correct) {

        document.getElementById("result").innerHTML =
            "❌ Лошара, башкой ещё подумай.";

        return;

    }


    /* RICHTIG */

    localStorage.setItem(
        station.reward.id,
        "true"
    );


    document.getElementById("result").innerHTML = `

        <h2>🎉 Красавцы!</h2>

        <p>Вы нашли:</p>

        <img
            src="${station.reward.image}"
            width="120">

        <p>
            ${station.reward.name}
        </p>

        <a href="map.html" class="map-button">
            🗺️ Назад к карте
        </a>

    `;

}
