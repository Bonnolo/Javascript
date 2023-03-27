// ? Task 1: Translate the story into code.

const onMyBirthday = (healty) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (healty) {
        reject(0);
      } else {
        resolve(2);
      }
    }, 2000);
  });
};

const isHealty = () => {
  let random = Math.random();
  return random < 0.5;
};

onMyBirthday(isHealty())
  .then((result) => {
    console.log(`${result} cakes`);
  })
  .catch((result) => {
    console.log(`${result} cake`);
  });
