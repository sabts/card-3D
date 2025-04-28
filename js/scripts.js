let uniqueNumber = [];

const generateUniqueNumbers = () => {
  while (uniqueNumber.length < 6) {
    const randomNumber = Math.floor(Math.random() * 11);
    if (!uniqueNumber.includes(randomNumber)) {
      uniqueNumber.push(randomNumber);
    }
  }
  const pairNumbers = [...uniqueNumber, ...uniqueNumber];
  uniqueNumber.sort(() => Math.random() - 0.5);
  console.log(pairNumbers);
};
console.log(uniqueNumber);
generateUniqueNumbers();
