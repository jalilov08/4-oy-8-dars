//VAzifa 8-dars

/** 1-misol
   function res(arr){
     let sum = 0;
     for (const item of arr) {
         if(item % 3 == 0 || item % 5 == 0){
             sum += item;
         }
     }
     return sum;
 }
 console.log(res([1, 2, 3, 5, 5,]));
 */

/** 3-misol
   function res(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 == 1) {
       sum++;
     }
   }
  return sum;
 }
 console.log(res([1, 2, 3, 4, 6, 7 , 9]));   //5
 */

 /** 4-misol
   let arr = [1, 2, 3, 4, 5];

 let arr1 = arr.map((value, index, arr) => {
     if (value % 2 == 1) {
        sum++;
     }
     return sum;
 });
 
 console.log(arr1);

  */

