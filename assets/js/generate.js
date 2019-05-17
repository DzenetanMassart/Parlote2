let generate = " ";



for (let ii = 0; ii < head.length; ii++) {
    let heads = (head[ii]);

    generate += '<div class ="cadre">' +
        '<div id ="' + heads.bougeable + '">' +
        '<img src = "' + heads.head_link + '" id ="' + heads.head_id + '"/>' +
        '<img src = "' + heads.bouche_zero_link + '" id ="' + heads.bouche_zero_id + '"/>' +
        '<img src = "' + heads.bouche_link + '" id ="' + heads.bouche_id + '"/>' +
        ' </div>' +
        '</div>';



}

document.getElementById("generate").innerHTML += generate;