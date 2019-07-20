var i =10;
i

async function f(){
    //return 1;
    Promise.resolve(11);
}

f().then(console.log("fddd"));

//await should be used in async function.   
//The word “async” before a function means one simple thing: a function always returns a promise. 
//If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
async function pr(){

    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("done!")
        }, 4000);
    });
    console.log("before await: " + new Date().getTime());
    let result = await promise; //waits till promise is resloved.

    console.log("after await: " + new Date().getTime());
   // alter(result);
   console.log(result);
}

pr();

async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      console.log(err);// TypeError: failed to fetch
      
    }
  }
  
  f();