Array.prototype.bubbleSort = function() {
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < this.length; i++) {
            if(this[i] > this[i + 1]) {
                let x = this[i + 1]
                this[i + 1] = this[i]
                this[i] = x
                isSorted = false
            }
        }
    }
    return this
}

let numbers1 = [2, -3, 4, -5]
numbers1.bubbleSort()
console.log(numbers1)

let numbers = [14, -15, 7]
numbers.bubbleSort()
console.log(numbers)