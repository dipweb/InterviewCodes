// let alp=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//NOT WORKING CODE

let arr='1236'

//(1 2 3 6 )  (12 3 6) (1 23 6 )  (1 2 36)
const getTotalCombination=(str,length)=>{
    let arr=str.split("");
    let string=[]
    for(let i=0;i<length;i++){
        
        let char1="";
        let char2="";
       if(arr[i]<=26){
          char1+= String.fromCharCode(arr[i]+64);
       }
       if((arr[i]+arr[i])<=26){
        char2+= String.fromCharCode(arr[i]+arr[i]+64);
       }
    }
}


