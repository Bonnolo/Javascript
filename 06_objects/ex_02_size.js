const getSize = (object) => {
    let size = 0
    for(let key in object) {
        size++
    }
    return size
}

let student = {
    a: 1,
    b: 2
}

console.log(getSize(student))