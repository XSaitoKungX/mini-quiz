const quizDB = [
    {
        question: "Frage 1: Was ist genau ein Client?",
        a: "Ein Kunde, welcher Infos in Form von Daten bekommt",
        b: "Ein Rechner, welcher Daten und Dienste von anderen Rechner bekommt",
        c: "Ein Netzwerk, welches sich mit den Rechen verbindet",
        d: "Ein Client, welcher man braucht, um ein Spiel zu starten",
        ans: "ans3"
    },

    {
        question: "Frage 2: Welche Konfigurationen müssen vor der Integration eines Clients vorgenommen werden?",
        a: "Netzwerkdokumentation erstellen",
        b: "Leitungen überprüfen",
        c: "Patchfelder dokumentieren",
        d: "WLAN-Passwort eingeben",
        ans: "ans2"
    },

    {
        question: "Frage 3: Warum ist es wichtig, den Netzwerkzustand vor der Integration eines Clients zu dokumentieren?",
        a: "Zur Überprüfung der IP-Konfiguration",
        b: "Zur Identifizierung des DNS-Servers",
        c: "Um spätere Veränderungen nachvollziehen zu können",
        d: "Um den Standardgateway zu finden",
        ans: "ans3"
    },

    {
        question: "Frage 4: Was ist der Zweck der LAN-Ausbauüberprüfung?",
        a: "Überprüfung des DHCP-Servers",
        b: "Sicherstellung, dass das Netzwerk in der Praxis der Dokumentation entspricht",
        c: "Identifizierung der MAC-Adresse des Clients",
        d: "Suche nach versteckten WLAN-Access-Points",
        ans: "ans2"
    },
    {
        question: "Frage 5: Was ist die Hauptfunktion der IP-Konfiguration?",
        a: "Zuweisung eindeutiger IP-Adressen an Clients",
        b: "Identifizierung der DNS-Adresse",
        c: "Überprüfung der Signalstärke des WLANs",
        d: "Ermittlung der Subnetzmaske",
        ans: "ans1"
    },
    {
        question: "Frage 6: Warum ist die Dokumentation von Leitungen und Anschlussdosen wichtig?",
        a: "Um Passwörter zu speichern",
        b: "Zur Identifizierung des Standardgateways",
        c: "Zur Verfolgung und Fehlerbehebung von Verbindungsproblemen",
        d: "Um die WLAN-Feldstärke zu messen",
        ans: "ans3"
    },
    {
        question: "Frage 7: Welche Informationen sollten in der Netzwerkdokumentation festgehalten werden?",
        a: "IP-Adressen der Clients",
        b: "Namen der Benutzer",
        c: "Standorte von WLAN-Access-Points",
        d: "Wetterberichte",
        ans: "ans3"
    },
    {
        question: "Frage 8: Warum benötigt ein Client ein WLAN-Passwort?",
        a: "Um den DNS-Server zu finden",
        b: "Um die Subnetzmaske einzustellen",
        c: "Um Zugang zum drahtlosen Netzwerk zu erhalten",
        d: "Um die IP-Konfiguration zu überprüfen",
        ans: "ans3"
    },
    {
        question: "Frage 9: Welche Informationen kann der Befehl 'ipconfig' anzeigen?",
        a: "IP-Adresse, Subnetzmaske, Standardgateway, DNS-Server",
        b: "WLAN-Passwort, MAC-Adresse, E-Mail-Adresse",
        c: "Standort des Routers, CPU-Temperatur, Uhrzeit",
        d: "Leitungslänge, Patchfeldbelegung, Farbe der Anschlussdosen",
        ans: "ans1"
    },
    {
        question: "Frage 10: Wofür ist 'ipconfig' nützlich?",
        a: "Zur Identifizierung von WLAN-Access-Points",
        b: "Zur Überprüfung der Hardware-Treiber",
        c: "Zur Diagnose von Netzwerkproblemen und Überprüfung der IP-Konfiguration",
        d: "Zur Verwaltung von E-Mails",
        ans: "ans3"
    }
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const startQuizButton = document.getElementById('startQuiz');

quizScreen.style.display = 'none';

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> Your Score is ${score}/${quizDB.length} ✌ </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

startQuizButton.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
});
