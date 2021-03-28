function frequency(str){
    let a=str.split('');
    let obj={}
    let formatedString="";
    for(let i=0;i<a.length;i++){
        if(!(a[i] in obj)){
            obj[a[i]]=1
        }else{
            obj[a[i]]= obj[a[i]]+1
        }
    }
    for (const property in obj) {
        formatedString=formatedString+property+obj[property]
       // console.log(`${property}: ${object[property]}`);
      }
    return formatedString
}

console.log(frequency("fffbbbaa"))