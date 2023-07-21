//    <h1>NPM node package manager</h1>
// helps to manages the package

console.log("hello");
// confirm('hello')
//to run in terminal
// PS C:\Users\Ashfaq PC\Documents\Front_End\JS\Practise\C13(JS as Backend)> node JS_NPM.js
// hello

//npm init or npm init -y will not ask any questions ,  in terminal helps in installing dependencies
//now we can install 3rd party packages
//installing pdf creator dependency
//npm i pdf-node add in terminal now a folder is created node_modules where all the 3rd party dependency/modules will reside
//now after the dependencies are downloaded in node_modules , in package.json also it will b noted down
// "dependencies": {
//     "pdf-node": "^1.0.1"
//   }
// }

//now some want want to run our project we can give our project (no need of giving the node_modules ) he can now go to terminal and type npm install then all the dependencies from package.json will be downloaded and project is executed

//YARN (package manager) is like npm but little faster and not much different from npm but from we should use only one 
