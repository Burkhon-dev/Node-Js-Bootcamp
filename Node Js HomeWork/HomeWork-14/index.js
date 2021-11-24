// == 1-Problem ==
/*
function legs(chicks,cows,pigs){
    return (chicks *2)+(cows*4)+(pigs*4)
}
console.log(legs(2,3,5))
*/

// == 2-Problem ==

/*
let arr = ["Turing", "Einstein", "Jung"];
let j = arr.sort(function(a,b){
    return a.length - b.length
});
console.log(j);
*/


// == 3-Problem ==

/*
let arr = [[3,1, 4], [8, 3,1 ,1,2], [4,1,3], [9,1, 3], [5, 1,3], [4, 1,3]]
function check(arr,b){
    let arr2 = [];
    for(let i of arr){
        if(i.includes(b)){
            arr2.push(1);
        }
    }
    return (arr.length === arr2.length)
}
let j = check(arr,1);
console.log(j);
*/


// == 4-Problem ==

/*
function highLow(num){
    let a = num.split(' ');
    let b = a.sort((a,b) => a - b)
    console.log(b[0],b[b.length - 1])
}

console.log(highLow("-3 3 2 1 4 7 6"))

*/

// == 5-Problem ==

/*
arr = [1,2,3,4,5,6,7,8,9]

function missing_number(arr){
    for(let i = 1; i <=10; i += 1){
        if(!(arr.includes(i))){
            return i
        }
    }
}


console.log(missing_number(arr))
*/