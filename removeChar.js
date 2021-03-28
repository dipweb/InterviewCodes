let str = "deepak";
let char = "e";

let strArr = str.split("");

let a=[]
for (let i = 0; i < str.length; i++) {
    if(strArr[i]!=="e"){
      a.push(strArr[i])
    }
}

console.log(a)