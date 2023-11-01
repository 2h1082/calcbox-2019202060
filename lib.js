function avg(numbers){
    let s=numbers.reduce((prev,curr)=>prev+curr,0);
    return s/numbers.length;
}
function prime(num){
    //implement!
    return true;
}

function fact(num){
    return true;
}
module.exports={
    avg,
    prime,
    fact
}
/*
exports.avg=avg;
exports.prime=prime;
exports.fact=fact;
*/
