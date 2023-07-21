const hello = () => {
  console.log("Hello");
};

//we will use this functions in other js files ie. modules in JS.js
// module.exports = hello; if i have only one then this exporting more then 1 functions

const Ahello = (name) => {
  console.log("Hello " + name);
};

module.exports = { hello, Ahello };
