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

/* function max (arr) {
    let max = arr.reduce(acum, item => {
        return (item>acum) ? item : acum;
    }, arr[0]);
    return max;
} */