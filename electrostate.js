let amount=[1,3,7,6,2,10]
let charge=["P","N","P","N","P","N"]

const getTotalCharge=(amount,charge)=>{
    let totalCharge=0;
    for(let i=0;i<amount.length;i++){
        if(charge[i]=="P"){
            totalCharge+=amount[i];
        }
        if(charge[i]=="N"){
            totalCharge-=amount[i];
        }
    }

    return totalCharge;
}

console.log(getTotalCharge(amount,charge))
