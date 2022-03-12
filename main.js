
let scorePlayer = 0;
let scorePc = 0;
let cards=[1,2,3];
let dic={
    1:"Mini_PK.png",
    2:"Valquiria.png",
    3:"ejercito_esqueletos.png"
}
function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}


function Play(card){
    let player1=parseInt(card);
    let player2=get_random(cards);
    let match=Math.abs(player2-player1);
    console.log(dic[player1],dic[player2],player1,player2);
    if(match===0){console.log("empate")}
    else if(match===1){
        let min=Math.min(player1,player2);
        if (min===player1){scorePlayer+=1;console.log("gana jugador")}
        else{scorePc+=1;console.log("gana pc")}
        
    }
    else{
        let max=Math.max(player1,player2);
        if (max===player1){scorePlayer+=1;console.log("gana jugador")}
        else{scorePc+=1;console.log("gana pc")}
    }
    document.getElementById('player1').src="./images/"+dic[player1];
    document.getElementById('player2').src="./images/"+dic[player2];
    alert("jugador:"+scorePlayer+" pc:"+scorePc)

}