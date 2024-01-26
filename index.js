let wins = 65
let losses = 22

let matchProfit = getBalance(wins, losses)

function getBalance(wins, losses){
    let matchProfit = wins - losses
    return matchProfit
}

getHeroRank(matchProfit)

function getHeroRank(matchProfit){
    let heroRank;
        if (matchProfit <= 10){
            heroRank = "Ferro"}
        else if (matchProfit >= 11 && matchProfit <= 20){
            heroRank = "Bronze"}
        else if (matchProfit >= 21 && matchProfit <= 50){
            heroRank = "Prata"}
        else if (matchProfit >= 51 && matchProfit <= 80){
            heroRank = "Ouro"}
        else if (matchProfit >= 81 && matchProfit <= 90){
            heroRank = "Diamante"}
        else if (matchProfit >= 91 && matchProfit <= 100){
            heroRank = "Lendário"}
        else {heroRank = "Imortal"}
    console.log(`O herói tem saldo de ${matchProfit} e está no nível ${heroRank}`)
}