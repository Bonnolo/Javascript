const getKeys = (object) => {
    let keys = []
    if(typeof object != 'object') {
        return keys
    }
    if (Object.keys) {
        keys = Object.keys(object)
        return keys
    }
    for (const property in object) {
        keys.push(property)
    }
    return keys
}

let students = [
    {
        name: 'Giorgio',
        surname: 'Moroder',
        studentClass: 'V',
        school: 'Mohole',
        rollNumber: 1234
    },
    {
        name: 'Mario',
        surname: 'Rossi',
        studentClass: 'VI',
        school: 'Mohole',
        rollNumber: 5678
    }
]
for (const student of students) {
    let keys = getKeys(student)
    console.log(keys) 
}

let keysFromString = getKeys('mohole')
console.log(keysFromString)


let keysFromNumber = getKeys(2)
console.log(keysFromNumber)

export {
    getKeys
}
// ['name', 'surname', 'studentClass', 'school', 'rollNumber']