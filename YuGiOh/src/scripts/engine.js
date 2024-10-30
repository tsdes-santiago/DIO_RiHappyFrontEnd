const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points'),
    },
    cardSprites: {
        avatar: document.getElementById('card-image'),
        cardName: document.getElementById('card-name'),
        cardType: document.getElementById('card-type')
    },
    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card')
    },
    playerSides: {
        player1: "player-cards",
        player1Box: document.querySelector('#player-cards'),
        computer: "computer-cards",
        computerBox: document.querySelector('#computer-cards'),
    },
    cardContainer: {
        player: document.getElementById('player-cards'),
        computer: document.getElementById('computer-cards')
    },
    actions: {
        button: document.getElementById('next-duel')
    }
};

const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        image: "./src/assets/icons/dragon.png",
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        image: "./src/assets/icons/magician.png",
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id:2,
        name: "Exodia",
        type: "Scissors",
        image: "./src/assets/icons/exodia.png",
        WinOf: [0],
        LoseOf: [1],
    },
]

async function getRandomCardId() {
    const randomIndex = await Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement('img');
    cardImage.setAttribute('height', "100px");
    cardImage.setAttribute('src', "./src/assets/icons/card-back.png");
    cardImage.setAttribute('data-id', IdCard);
    cardImage.classList.add('card');
    
    if (fieldSide === state.playerSides.player1) {
        cardImage.addEventListener('click', () => {setCardsField(cardImage.getAttribute('data-id'))});
        cardImage.addEventListener('mouseover', () => {drawSelectCard(IdCard)});
    }

    return cardImage;
}

async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "Draw";
    let playerCard = cardData[playerCardId];

    if (playerCard.WinOf.includes(computerCardId)) {
        duelResults = "Win";
        state.score.playerScore += 1;
    } else if (playerCard.LoseOf.includes(computerCardId)) {
        duelResults = "Lose";
        
        state.score.computerScore += 1;
    }
    await playAudio(duelResults);

    return duelResults;
}

async function removeAllCardsImages() {
    let {computerBox, player1Box} = state.playerSides;

    let imgElements = computerBox.querySelectorAll('img');
    imgElements.forEach(element => element.remove());

    imgElements = player1Box.querySelectorAll('img');
    imgElements.forEach(element => element.remove());
}

async function drawSelectCard(IdCard) {
    state.cardSprites.avatar.src = cardData[IdCard].image;
    state.cardSprites.cardName.innerText = cardData[IdCard].name;
    state.cardSprites.cardType.innerText = "Attribute: " + cardData[IdCard].type;
}

async function drawCards(cardsNumber, fieldSide) {  
    for (let i = 0; i < cardsNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function setCardsField(IdCard) {
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();
    
    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.cardSprites.avatar.src = "";
    state.cardSprites.cardName.innerText = "";
    state.cardSprites.cardType.innerText = "";

    state.fieldCards.player.src = cardData[IdCard].image;
    state.fieldCards.computer.src = cardData[computerCardId].image;

    let duelResults = await checkDuelResults(IdCard, computerCardId);

    await updateScore();
    await drawButtons(duelResults);
}

async function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function drawButtons(text) {
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block";
}

async function resetDuel() {
    state.cardSprites.avatar.src = ""
    state.actions.button.style.display = "none"

    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"
    init()
}

async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    try {
        audio.play();
    } catch {}
}

function init(){
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";
    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);

    const bgm = document.getElementById('bgm');
    bgm.play();
}
init();