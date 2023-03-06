const stringLength = (string) => {
  let stringLength = string.length;
  if (stringLength == 0) {
    console.log(`La stringa ${string} è vuota`);
  } else if (stringLength > 10) {
    console.log(`La stringa ${string} è più lunga di 10 caratteri`);
  } else {
    console.log(`La stringa ${string} è lunga ${stringLength} caratteri`);
  }
};

const greaterNum = (a, b) => {
  if (a > b) {
    console.log(`Il numero maggiore di ${a} e ${b} è ${a}`);
  } else {
    console.log(`Il numero maggiore di ${a} e ${b} è ${b}`);
  }
};

greaterNum(5, 10);

const helloWorld = (lang) => {
  if (lang == "en") {
    console.log("HelloWorld");
  } else if (lang == "de") {
    console.log("Hallo Welt");
  } else if (lang == "es") {
    console.log("pepega");
  } else {
    console.log("non conosco la lingua sveglia");
  }
};
helloWorld("en");
helloWorld("de");
helloWorld("es");
helloWorld("it");

const assignGrade = (grade) => {
  if (grade > 90) {
    return "Voto A";
  } else if (grade >= 81) {
    return "Voto B";
  } else if (grade >= 71) {
    return "Voto C";
  } else if (grade >= 66) {
    return "Voto D";
  } else {
    return "Voto E";
  }
};

assignGrade(91);
assignGrade(81);
assignGrade(71);
assignGrade(66);
assignGrade(50);
assignGrade(20);

/* const pluralize = (string, num) => {
  let animals = {
    dog: [cane, cani],
    sheep: [pecora, pecore],
    cat: [gatto, gatti],
  };
  if (string == "cane" && num == 1) {
    console.log(`${num} `, animals.dog[0]);
  } else if (string == "cane" && num > 1) {
    console.log(`${num} `, animals.dog[1]);
  } else if (string == "gatto" && num == 1) {
    console.log(`${num} `, animals.cat[0]);
  } else if (string == "gatto" && num > 1) {
    console.log(`${num} `, animals.cat[1]);
  }
}; */

const pluralize = (string, num) => {
  if (num != 1) {
    console.log(`${num}` + " " + `${string}` + "s");
  } else {
    console.log(`${num}` + " " + `${string}`);
  }
};
pluralize("cat", 1);

pluralize("dog", 5);

const oddOrEven = (i, length) => {
  for (i; i <= length; i++) {
    if (i % 2 != 0) {
      console.log(`${i} is odd`);
    } else {
      console.log(`${i} is even`);
    }
  }
};
oddOrEven(0, 20);

for (let i = 0; i <= 10; i++) {
  for (let k = 0; k <= 10; k++) {
    let result = k * i;
    console.log(`${i} * ${k} = ${result}`);
  }
}

for (let i = 60; i <= 100; i++) {
  console.log(`Per ${i}, hai ottenuto ${assignGrade(i)}`);
}
