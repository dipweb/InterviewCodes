function getMaxWordCount(str) {
    let a = str.split(" ");
    let obj = {}
    let maxCountWord;
    let maxCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (!(a[i] in obj)) {
            obj[a[i]] = 1;
        } else {
            obj[a[i]] = obj[a[i]] + 1
        }
    }

    for (let property in obj) {
        if (obj[property] > maxCount) {
            maxCount = obj[property]
            maxCountWord = property
        }
    }
    console.log(maxCountWord)
    return maxCountWord
}

getMaxWordCount("How do you do")