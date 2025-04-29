// let uniqueNumbers = [
//   'assets/images/abby.jpg',
//   'assets/images/last-of-us-back.jpeg'
// ];

// const generateUniqueNumber = () => {
//   while (uniqueNumbers.length < 6) {
//     const aleatoryNumber = Math.floor(Math.random() * 10);

//     if (!uniqueNumbers.includes(aleatoryNumber)) {
//       uniqueNumbers.push(aleatoryNumber);
//     }
//   }
//   const duplyUniqueNumbers = [...uniqueNumbers, ...uniqueNumbers];

//   duplyUniqueNumbers.sort(() => Math.random() - 0.5);

//   console.log(uniqueNumbers);
//   console.log(duplyUniqueNumbers);
// };
// generateUniqueNumber();

//cuando generemos las card de los pokemon, hay que evitar que se puedan relacionar las card con el mimso numero, nombre...

const gameContainer = document.getElementById('game-container')

let amountImages = 151
let imageNumbers = []

const generateRandomNumber = () => {
  
  while (imageNumbers.length < 8){
    const aleatoryNumber = Math.floor(Math.random() * amountImages)
    
    if (!imageNumbers.includes(aleatoryNumber)){
      imageNumbers.push(aleatoryNumber)
    }
  }
  imageNumbers = [...imageNumbers, ...imageNumbers]
  imageNumbers.sort(()=> Math.random() -0.5)
}
generateRandomNumber()

const addCardsToGrid = () => {
  
  const fragment = document.createDocumentFragment();

  imageNumbers.forEach(number => {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')

    const cardFront = document.createElement('div')
    cardFront.classList.add('card-front')
    cardContainer.append(cardFront)

    const cardBack = document.createElement('div')
    cardBack.classList.add('card-back')
    cardContainer.append(cardBack)

    fragment.append(cardContainer)
  })

  gameContainer.append(fragment)

/* <div class="card" data-id="1">

<div class="card-front"></div>
<div class="card-back"></div>

</div> */
}
addCardsToGrid()
