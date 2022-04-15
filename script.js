const num = [1,2,3,4,5,6,7];

function rec(num, index){
    if(index === 0){
        return num[index]
    }else{
        return num[index] + rec(num, --index )
    }
}

console.log(rec(num,5))