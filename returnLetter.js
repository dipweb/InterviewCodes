function returnLetter(a,c){
   let len=a.length;
   let count=0
   for(let i=0;i<len;i++){
       if(a[i]==c){
          count++
       }
   }
   if(count>=len/2){
       return c
   }else{
       return -1
   }
}

console.log(returnLetter(["a","a","b","b","a"],"b"))


