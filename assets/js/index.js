document.getElementById("infos").innerHTML =
    "<p>Bienvenue dans cette deuxième version de \"Parlote\"! </p><p>Dzénetan Massart vous propose deux bases pour créer un personnage (Canvas & Image) qui parle en fonction de l'intensité du son dans votre microphone ! </p><p> Le répertoire Github associé se trouve ici: <a href=\"https: //github.com/DzenetanMassart/Parlote2\">https://github.com/DzenetanMassart/Parlote2<a>";




//On déssine la tête et la bouche
function setcanvas() {
    let tete = document.getElementById("tete");
    let bouche_fixe = document.getElementById("bouche_zéro");
    let bouche = document.getElementById("bouche");

    let ctx = tete.getContext("2d");
    let bouche_zéro = bouche_fixe.getContext("2d");
    let bouche_un = bouche.getContext("2d");

    drawcanvas(ctx, bouche_un, bouche_zéro);

    function drawcanvas(ctx, bouche_un, bouche_zéro) {

        //Tete_Boule;
        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = 1;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(107, 12);
        ctx.bezierCurveTo(151, 12, 187, 50, 187, 96);
        ctx.bezierCurveTo(187, 142, 151, 180, 107, 180);
        ctx.bezierCurveTo(62, 180, 26, 142, 26, 96);
        ctx.bezierCurveTo(26, 50, 62, 12, 107, 12);
        ctx.closePath();
        ctx.stroke();
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "rgba(0,0,0,0)";
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fill();

        //Tete_bouche_0;
        bouche_zéro.shadowColor = "rgba(0,0,0,0)";
        bouche_zéro.strokeStyle = "rgba(0,0,0,1)";
        bouche_zéro.lineWidth = 1;
        bouche_zéro.lineCap = "butt";
        bouche_zéro.lineJoin = "miter";
        bouche_zéro.beginPath();
        bouche_zéro.moveTo(67, 111);
        bouche_zéro.lineTo(145, 111);
        bouche_zéro.lineTo(145, 150);
        bouche_zéro.lineTo(67, 150);
        bouche_zéro.lineTo(67, 111);
        bouche_zéro.closePath();
        bouche_zéro.stroke();
        bouche_zéro.shadowOffsetX = 15;
        bouche_zéro.shadowOffsetY = 15;
        bouche_zéro.shadowBlur = 0;
        bouche_zéro.shadowColor = "rgba(0,0,0,0)";
        bouche_zéro.fillStyle = "rgba(4,0,0,1)";
        bouche_zéro.fill();

        //Bouche_1;
        bouche_un.shadowColor = "rgba(0,0,0,0)";
        bouche_un.strokeStyle = "rgba(0,0,0,1)";
        bouche_un.lineWidth = 1;
        bouche_un.lineCap = "butt";
        bouche_un.lineJoin = "miter";
        bouche_un.beginPath();
        bouche_un.moveTo(67, 111);
        bouche_un.lineTo(145, 111);
        bouche_un.lineTo(145, 157);
        bouche_un.lineTo(67, 157);
        bouche_un.lineTo(67, 111);
        bouche_un.closePath();
        bouche_un.stroke();
        bouche_un.shadowOffsetX = 15;
        bouche_un.shadowOffsetY = 15;
        bouche_un.shadowBlur = 0;
        bouche_un.shadowColor = "rgba(0,0,0,0)";
        bouche_un.fillStyle = "rgba(250,250,250,1)";
        bouche_un.fill();
    }
}


// On gère l'intensité
let array;
let values;
let length;
let average;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            average = values / length;
            //On impose une limite à la machoire !
            if (average < 60) {
                bouche.style.top = Math.round(average) / 2 + "px";
                tete.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
            } else {
                bouche.style.top = 30 + "px";
                tete.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
            }

            document.getElementById("infos").innerHTML = "<p>Bienvenue dans cette deuxième version de \"Parlote\"! </p><p>Dzénetan Massart vous propose deux bases pour créer un personnage (Canvas & Image) qui parle en fonction de l'intensité du son dans votre microphone ! </p><p> Le répertoire Github associé se trouve ici: <a href=\"https: //github.com/DzenetanMassart/Parlote2\">https://github.com/DzenetanMassart/Parlote2<a>";

            document.getElementById("infos").innerHTML += "<p>L'intensité du son (en décibels) est égale à: </p><p class=\"average\"> " + average + "</p>";
        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });








// Pour rendre draggable un élément et pouvoir donc le bouger à la souris !
let BOUGE = document.getElementById("bougeable");
BOUGE.style.position = "absolute";

dragElement(document.getElementById("bougeable"));

function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}