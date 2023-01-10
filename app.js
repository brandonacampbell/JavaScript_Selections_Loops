
// Exercise 1 Section 

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue; 
//     } else  {
//             console.log(i); 
//         } 
//         }
    
// Exercise 2 

//  for (let i = 0; i <= 100; i++) {
    //  if (i % 3 === 0 && i % 5 === 0){
    //      console.log(`${i} = FIZZBUZZ`);
    //  } else if (i % 3 === 0) {
    //     console.log(`${i} = FIZZ`);
    // } else if (i % 5 === 0) {
    //     console.log(`${i} = BUZZ`)
    // }
//  }

// Exercise 3 

// let i = 0;
// while (i <= 100) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     i++;
// }

// while (i <= 100){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} = FIZZBUZZ`);
//     } else if (i % 3 === 0) {
//        console.log(`${i} = FIZZ`);
//    } else if (i % 5 === 0) {
//        console.log(`${i} = BUZZ`)
//    }
// }

// let i = 0; 

// do {
//     if (i % 2 !== 0) {
//         console.log(i); 
//     }
//         i++
//         }
//         while (i <= 100)

// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} = FIZZBUZZ`);
//     } else if (i % 3 === 0) {
//        console.log(`${i} = FIZZ`);
//    } else if (i % 5 === 0) {
//        console.log(`${i} = BUZZ`)
//    }
//     i++;
// }
//  while (i <= 100); 

// Exercise 4 

// let value = Math.round((Math.random() * 500)); 

// let n = Math.round(Math.random() * (500 - 100) + 100);

// for (let i = 0; i <= n; i++) {
//     if (i == value) {
//     console.log(`found ${value}`);
//     break;
//  }
//  if (i == n) {
//  console.log(`Did not find ${value} between 1 and ${n}.`);
// }
// }

// Exercise 5
// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let n = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);

// for (i = start; i <= n; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} = FIZZBUZZ`);
//     }
//  if (i % fizzDivisor === 0) {
//            console.log(`${i} = FIZZ`);
//        } 
       
//        if (i % buzzDivisor === 0) {
//            console.log(`${i} = BUZZ`)
//        }
// }
// console.log (fizzDivisor, buzzDivisor);
