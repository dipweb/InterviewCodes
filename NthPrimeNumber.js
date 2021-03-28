let n = 5;

let primNumbers = []
let i = 2;

while (primNumbers.length <= 5) {
    if (isPrimeNumber(i)) {
        primNumbers.push(i)
    }

    i++
}

function isPrimeNumber(num) {
    let isPrime = true;
    if (num == 2) {
        return true
    } else {
        for (let j = 2; j < num; j++) {
            if (num % j == 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;

}

console.log(primNumbers[primNumbers.length-1])