const stations = {

    kopfhoerer: {

        title: "Станция 1",
        type: "text",
        question:
        "Соня прилегла по дороге домой отдохнуть и кайфово послушать музыку. Как зовут самого культового артиста того времени? Введите оригинальное написание его псевдонима. Подсказка: скрррр-скрррр",

        answer:
        "pharaoh",

        reward: {

            id: "kopfhoerer",

            name: "Наушники",

            image: "img/kopfhoerer.jpg",

        }

    },
    phone: {

        title: "Станция 2",

        type: "matching",
        images: ["img/col1.jpg", "img/col2.jpg", "img/col3.jpg", "img/col4.jpg"],
        question: "Определи по коллажам о ком идёт речь:",

        pairs: [
            {
                left: "Коллаж 1",
                right: "Фейс"
            },
            {
                left: "Коллаж 2",
                right: "Пошлая Молли"
            },
            {
                left: "Коллаж 3",
                right: "Фараон"
            },
            {
                left: "Коллаж 4",
                right: "Скриптонит"
            }
        ],
        options: [
            "Хаски",
            "Фараон",
            "GONE.Fludd",
            "Фейс",
            "ATL",
            "Пошлая Молли",
            "Моргенштерн",
            "Баста",
            "Скриптонит",
            "Кизару",
            "Егор Крид",
            "Boulevard Depo",
            "Оксимирон",
            "Noize MC",
            "ЛСП",
            "Макс Корж"
        ],
        reward: {

            id: "iphone",

            name: "Мобила",

            image: "img/iphone.jpeg",

        }

    },
    glasses: {

        title: "Станция 3",

        image: "img/epoche.jpg",

        question:
        "Как называется эта эстетика?",

        type: "multiple",
        options: ["Tumblr", 
                  "VSCO", 
                  "Винишко-тян", 
                  "Vaporwave"],
        answer: "Винишко-тян",

        reward: {

            id: "glasses",

            name: "Очки",

            image: "img/glasses.png",

        }

    },
    spinner: {

        title: "Станция 4",

        question: "Продолжи фразу:",
        image: "img/collage.jpg",
        type: "multiple",
        options: ["А я не чай", 
                  "Так что бухаем", 
                  "А смерть не соль", 
                  "Пошли все нахуй"],
        answer: "А я не чай",

        reward: {

            id: "spinner",

            name: "Спиннер",

            image: "img/spinner.png",

        }

    },
    rosathing: {

        title: "Станция 5",
        type: "text",
        question:
        "Принеси этому персонажу его любимый напиток, родом из главного города Верхней Франконии. Персонаж ожидает вас на метке 5b и получив эликсир выдаст вам предмет.",
        image: "img/danja.jpg",
        answer:
        "420",

        reward: {

            id: "rosathing",

            name: "Бальзам для губ",

            image: "img/rosathing.png",

        }

    },
    vans: {

        title: "Станция 6",

        question:
        "Какое название этой инсталляции, которая стала мемом Ждун?",
        image: "img/zdun.jpg",
        type: "multiple",
        options: ["Gigas Proboscis", 
                  "Homunculus Loxodontus", 
                  "Morosus Manatus", 
                  "Mimus Cetaceus"],
        answer: "Homunculus Loxodontus",

        reward: {

            id: "vans",

            name: "Кроссовок",

            image: "img/vans.png",

        }

    },
    arizona: {

        title: "Станция 7",

        question:
        "Как называется этот мем?",
        image: "img/putler.jpg",
        type: "multiple",
        options: ["путлер капут", 
                  "широкий путин", 
                  "блэт нэвэльный", 
                  "когда надел папин пиджак"],
        answer: "блэт нэвэльный",

        reward: {

            id: "tea",

            name: "Аризона",

            image: "img/arizona.png",

        }

    }
}

