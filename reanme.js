

function rename(str) {
    let a = str.split('');
    let a1 = [...a];
    if (a.find(el => el == "_")) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == "_") {

                a1.splice(i, 1)

            }
        }

    } else {
        console.log("Java Variable name")

        let str1=str.split(/(?=[A-Z])/);
        
        let length=str1.length
      
        for(let i=0;i<length;i++){
                str1.splice(i+1,0,"_")
        }

        console.log(str1.join(''))
    }
    return a1
}

console.log(rename("FirstVariable").join(''))