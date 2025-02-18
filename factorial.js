function factorial(n){
    if(n==0){
        return 1;
    }
    else if(n<0){
        return "Negative input not accepted"
    }else{
        return n*factorial(n-1);
    }
}

console.log(factorial(3));