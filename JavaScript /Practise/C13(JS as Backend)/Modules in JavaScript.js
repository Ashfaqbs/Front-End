//there are two types of modules 1 common JS and ES6 modules
//  to  understand this we will create two files  moduel1  to understand Common JS and module2 .js for ES6
import sample, { hi, Ahi } from "./modul2.js";
// const hello = require('./modul1')
//  hello()

//  o/p [Running] node "c:\Users\Ashfaq PC\Documents\Front_End\JS\Practise\C13(JS as Backend)\Modules in JavaScript.js"
//  Hello

// if we are getting more then  1 function the we will use like

// const fun = require("./modul1");
// fun.hello();
// fun.Ahello("sonu");
// [Running] node "c:\Users\Ashfaq PC\Documents\Front_End\JS\Practise\C13(JS as Backend)\Modules in JavaScript.js"
// Hello
// Hello sonu

//Important using Javascript destructuring concept

// const { hello, Ahello } = require("./modul1");

// hello();
// Ahello("monty");
//Hello
// Hello monty

//ES6 ,
// 1st add   "type": "module", in package.json

// lets import those function from module2.js
// import { hi, Ahi } from "./modul2.js"; add this  line on top and dont use the other way of importing as above

hi();
Ahi("Sonu");
sample()

//Hi
// HiSonu
// Hello  from default
