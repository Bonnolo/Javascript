const squareNumber = (numA) => {
  let result = numA * numA;
  console.log(
    `Il risultato dell'elevazione al quadrato del numero ${numA} è ${result}`
  );
  return result;
};

const halfNumber = (numA) => {
  let result = numA / 2;
  console.log(`Half of ${numA} is ${result}`);
  return result;
};

const percentof = (numA, numB) => {
  let result;
  //più piccolo fratto più grande * 100
  if (numA > numB) {
    result = (numB / numA) * 100;
    console.log(`${numB} è il ${result} di ${numA} `);
  } else {
    result = (numA / numB) * 100;
    console.log(`${numA} è il ${result}% di ${numB} `);
  }
  return `${result}%`;
};

const area0fCircle = (range) => {
  let result = range * range * Math.PI;
  console.log(`L'area per un cerchio con raggio ${range} è ${result}`);
  return result;
};

export { squareNumber, halfNumber, percentof, area0fCircle };
