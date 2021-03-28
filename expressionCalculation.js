let str = '1+3-3*3+2-29'

function getResult(str) {
    let a = str.match(/[^\d()]+|[\d.]+/g);
    let result = 0;
    for (let i = 0; i < str.length;) {
        result = i == 0 ? result + Number(a[i]) : result;

        switch (a[i + 1]) {
            case "*":
                result = result * Number(a[i + 2]);
                break;
            case "+":
                result = result + Number(a[i + 2])
                break;

            case "-":
                result = result - Number(a[i + 2])
                break;

            case "/":
                result = result / Number(a[i + 2])
                break;

        }
        i = i + 2;

    }
    return result;

    //return eval(str);
}

console.log(getResult(str))