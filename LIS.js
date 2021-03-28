let a=[10, 22, 9, 33, 21, 50, 41, 60, 80];



for(let i=0;i<a.length;i++){
    if(a[i]>a[i+1]) {
        a.splice(i+1,1)
    }
}

console.log(a.length)