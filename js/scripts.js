let uniqueNumbers = [
  'assets/images/abby.jpg',
  'assets/images/last-of-us-back.jpeg'
];

const generateUniqueNumber = () => {
  while (uniqueNumbers.length < 6) {
    const aleatoryNumber = Math.floor(Math.random() * 10);

    if (!uniqueNumbers.includes(aleatoryNumber)) {
      uniqueNumbers.push(aleatoryNumber);
    }
  }
  const duplyUniqueNumbers = [...uniqueNumbers, ...uniqueNumbers];

  duplyUniqueNumbers.sort(() => Math.random() - 0.5);

  console.log(uniqueNumbers);
  console.log(duplyUniqueNumbers);
};
generateUniqueNumber();

//cuando generemos las card de los pokemon, hay que evitar que se puedan relacionar las card con el mimso numero, nombre...
