const verifyLengthString = (string) => {
    let stringLength = string.length;
    if(stringLength == 0) {
        return `La stringa ${string} è vuota`;
    } else if(stringLength > 10) {
        return `La stringa ${string} è più lunga di 10 caratteri`
    } else {
        return `La stringa ${string} è lunga ${stringLength} caratteri`
    }
}

let messageStringEmpty = verifyLengthString('');
console.log(messageStringEmpty)
let messageStringBetweenZeroAndTen = verifyLengthString('mohole');
console.log(messageStringBetweenZeroAndTen)
console.log(verifyLengthString('milano lambrate'));

