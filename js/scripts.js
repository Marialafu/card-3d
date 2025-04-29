const rootStyles = document.documentElement.style

//cuando generemos las card de los pokemon, hay que evitar que se puedan relacionar las card con el mimso numero, nombre...

const gameContainer = document.getElementById('game-container')
const totalPointsMarkerElement = document.getElementById('total-points')
const totalFailsMarkerElement = document.getElementById('total-fails')

const resetMessageElement = document.getElementById('reset-message')
const resetButtonElement = document.getElementById('reset-button')
const resetGameContainer = document.getElementById('reset-game-container')

const amountPairsOdCards = 9
const amountImages = 151

let imagesNumbers = []
let cardsSelectedGroup = []

let totalPoints = 0;
let totalFails = 0;

const finishGame = () => {

  setTimeout(()=> {
    if (totalFails === 10){
    resetGameContainer.classList.remove('hide')
    resetMessageElement.textContent = 'YOU LOSE'
    gameContainer.classList.add('hide')
    
  } else if (totalPoints === imagesNumbers.length/2) {
    resetGameContainer.classList.remove('hide')
    resetMessageElement.textContent = 'YOU WIN'
    gameContainer.classList.add('hide')
  }}, 800)
  
}

const defineTotalPoints = () => {
    totalPoints++
    totalPointsMarkerElement.textContent = `Total Points: ${totalPoints}`
    finishGame()
}

const defineTotalFails = () => {
  totalFails++
  totalFailsMarkerElement.textContent = `Total Fails: ${totalFails}`
  finishGame()
}

const hideSelectedWrongCards = () => {
  const firstImageSelected = cardsSelectedGroup[0]
  const secondImageSelected = cardsSelectedGroup[1]

  firstImageSelected.classList.remove('card-clicked')
  secondImageSelected.classList.remove('card-clicked')

  cardsSelectedGroup = []
}

const verifyIfCardsAreEqual = () => {
  const firstImageSelected = cardsSelectedGroup[0]
  const secondImageSelected = cardsSelectedGroup[1]
  
  if (firstImageSelected.id === secondImageSelected.id){
    firstImageSelected.classList.add('correct-answer')
    secondImageSelected.classList.add('correct-answer')
    defineTotalPoints()
    
    cardsSelectedGroup = []

  } else {
    setTimeout(hideSelectedWrongCards, 900)
    defineTotalFails()
  }
  
}

const showSelectedCard = (event) => {

  const cardSelected = event.target
  cardSelected.classList.add('card-clicked')
  cardsSelectedGroup.push(cardSelected)

  if (cardsSelectedGroup.length === 2){
    
    verifyIfCardsAreEqual()
  }
}

const showAllCards = () => {
  
  for (let i = 0; i < imagesNumbers.length; i++){
    gameContainer.children[i].classList.add('card-clicked')
  }

}

const hideAllCards = () => {

  for (let i = 0; i < imagesNumbers.length; i++){
    gameContainer.children[i].classList.remove('card-clicked')
  }

}

const addCardsToGrid = () => {
  const fragment = document.createDocumentFragment();

  imagesNumbers.forEach(number => {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    //cambiar id por uno no conocido
    cardContainer.id = number
    cardContainer.addEventListener('click', (event) => showSelectedCard(event, number))

    const cardFront = document.createElement('div')
    cardFront.classList.add('card-front')
    cardContainer.append(cardFront)

    const cardBack = document.createElement('div')
    cardBack.classList.add('card-back')
    cardBack.style.setProperty('--background-image', `url(../assets/images/${number}.png)`)
    cardContainer.append(cardBack)

    fragment.append(cardContainer)
  })

  gameContainer.append(fragment)

}

const generateRandomNumber = () => {
  
  while (imagesNumbers.length < amountPairsOdCards){
    const aleatoryNumber = Math.floor(Math.random() * amountImages)
    
    if (!imagesNumbers.includes(aleatoryNumber)){
      imagesNumbers.push(aleatoryNumber)
    }
  }
  imagesNumbers = [...imagesNumbers, ...imagesNumbers]
  imagesNumbers.sort(()=> Math.random() -0.5)

  addCardsToGrid()
}

const resetGame = () => {
  gameContainer.textContent = ''
  imagesNumbers = []
  
  gameContainer.classList.remove('hide')
  resetGameContainer.classList.add('hide')

  totalFails = 0;
  totalPoints = 0;
  totalFailsMarkerElement.textContent = `Total Fails: ${totalFails}`
  totalPointsMarkerElement.textContent = `Total Points: ${totalPoints}`
  
  generateRandomNumber()
}

generateRandomNumber()
setTimeout(showAllCards, 1000)
setTimeout(hideAllCards, 3000)

resetButtonElement.addEventListener('click', resetGame)

