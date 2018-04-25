//normal function definition 
let concatString = function concatString(s1, s2) {
    return s1 + "" + s2;
};

console.log(concatString("sadique ", "sanjar"));


// Arrow function
concatString = (s1, s2) => {
    return s1 + "" + s2;
};

//can be written like this as well:
//concatString = (s1,s2) => s1+""+s2;

console.log(concatString("Mohammad Sadique ", "sanjar"));
console.log(concatString(3, 4));