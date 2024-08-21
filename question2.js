function  checkSign (number){
    let results;
    if (number >0 ){
        results = "positive"
    }
    else if (number < 0){
        results =" negative"

    }
    else{
        results = "zero"
    }
    console.log(results)
}
checkSign(-5)