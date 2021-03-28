let sentence="this is crazy and fun".split(" ");

let nam=["is", "fun"];

let newArr=[]

for(let i=0;i<sentence.length;i++){
    if(nam.findIndex(el=>el==sentence[i])<0){
        //console.log(sentence[i]);
      //  let firsCharUpper=sentence[i].split('')[0].toUpperCase();
       // console.log(sentence[i].split('')[0].toUpperCase() + sentence[i].split('').splice(0,1))
       const nameCapitalized = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1)
       newArr.push(nameCapitalized)
    }
}

console.log(newArr.join(" "))
