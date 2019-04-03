let tete_moche = document.getElementById("tete_moche");
let bouche_fixe_moche = document.getElementById("bouche_zero_moche");
let bouche_moche = document.getElementById("bouche_moche");


// On gère l'intensité
let values_moche;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext_moche = new AudioContext();
        analyser_moche = audioContext_moche.createAnalyser();
        microphone_moche = audioContext_moche.createMediaStreamSource(stream);
        javascriptNode_moche = audioContext_moche.createScriptProcessor(2048, 1, 1);

        analyser_moche.smoothingTimeConstant = 0.8;
        analyser_moche.fftSize = 1024;

        microphone_moche.connect(analyser_moche);
        analyser_moche.connect(javascriptNode_moche);
        javascriptNode_moche.connect(audioContext_moche.destination);
        javascriptNode_moche.onaudioprocess = function() {
            array_moche = new Uint8Array(analyser_moche.frequencyBinCount);
            analyser_moche.getByteFrequencyData(array_moche);
            values_moche = 0;

            length_moche = array.length;
            for (let i = 0; i < length; i++) {
                values_moche += (array_moche[i]);
            }

            average_moche = values_moche / length_moche;
            //On impose une limite à la machoire !
            if (average_moche < 60) {
                bouche_moche.style.top = Math.round(average_moche) / 2 + "px";
                tete_moche.style.transform = "scale(" + (Math.round(average_moche) / 100 + 1) + "," + (Math.round(average_moche) / 500 + 1) + ")"
            } else {
                bouche_moche.style.top = 30 + "px";
                tete.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
            }
        }
    })
    .catch(function(err) {});





// Pour rendre draggable un élément et pouvoir donc le bouger à la souris !
let BOUGE_moche = document.getElementById("bougeable_moche");
BOUGE_moche.style.position = "absolute";

dragElement(document.getElementById("bougeable_moche"));


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