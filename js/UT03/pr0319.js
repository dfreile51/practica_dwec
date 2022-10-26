let numbers = [2, 5, 18, 25, 15]; 
let max = ( arr ) => {
    let maxNum = arr.reduce(( acum, item ) => {
        if(acum<item) {
            acum = item;
            
        }
        return acum;
    }, 0 );
    return maxNum;
};

console.log(max(numbers));