let arr=[1,1,1,1];

const getSecomdHigestNum=(arr,length)=>{    

    if(arr.length<2){
        return "Invalid Array"
    }

     let sortedArr=arr.sort((a,b)=>a-b)
      for(let i=sortedArr[length-2];i>0;i++){
          if(sortedArr[length-1]>sortedArr[length-2]){
            return sortedArr[arr.length-2]
          }else{
              return "There is no 2nd largest array array"
          }
      }
     
}

console.log(getSecomdHigestNum(arr,4))