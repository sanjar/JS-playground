 var i = 10;
 //let j = i + 39;
 let j = 10;
 //const k = j + i;
 const k = 59;
 console.log(k);

 //k = 5;
 if (k == 59) {
     var i = 20;
     let j = 30;
     const k = 100;

     console.log(i); //i = 20
     console.log(j); //j = 30
     console.log(k); //k = 100
 }

console.log(i); // i = 20, new value in i, which is assigned in if loop.
console.log(j); // j = 10,new value assignment in if loop does not affect let j.
console.log(k); // k = 59, new value assignment in if loop does not affect const k.
