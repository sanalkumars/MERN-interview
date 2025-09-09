
// target =9 , arr = [2,7,11,15 ] = output should be = [ 0,1]

// let twoSum = function (nums , target) {
    
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {
//        let comp = target - nums[i];
//        if (map[comp]) {
//         return [ i , map[comp]]
//        }else{
//         map[nums[i]] =i
//        }
        
//     }
// }

// using hash map

let twoSum = function( nums , target){
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let compli = target - nums[i]
        
        if (map.has(compli)) {
            return [map.get(compli),i ]
        } else {
            map.set(nums[i],i)
        }
    }
}


let arr = [2 , 7 , 11, 9 ,6 ,4]
let res = twoSum(arr , 10);
console.log("result is ",res);
