function compareNumbers  (x, y) {
    let results;
    if (x>y){
        results =  "First is greater"
    }
    else if (x<y) {
        results ="Second is greater"
    }
    else {
        results = "are equal"
    }
    console.log(results)
}
compareNumbers(59,67)