function capitilizeFirst(str){
    if(str.lengh == 0){
        return str;
    }
    const firstChar = str.charAt(0);
    if(firstChar === firstChar.toUpperCase() ){
        return str;
    }else{
        return firstChar.toUpperCase()+str.slice(1);
    }
}

console.log(capitilizeFirst("Knckjefnkjen"))