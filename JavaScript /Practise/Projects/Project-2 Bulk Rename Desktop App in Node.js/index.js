//not using express as this will be a desktop app not  install express.jsconst fs = require('fs');

const fs = require("fs");
const path = require("path");
//logic to  reading files in a folder in JS

const replaceThis = "Rename_test";
const replaceThat = "test-x";
const folder = __dirname;
const preview = true;

try {
  let path =
    "C:/Users/Ashfaq PC/Documents/Front_End/JS/Practise/Projects/Project-2 Bulk Rename Desktop App in Node.js/data_test";

  const data = fs.readdir(path, (error1, data) => {
    try {
      //   console.log(data);

      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newFile = `${path}/` + item.replaceAll(replaceThis, replaceThat);
        if (!preview) {
          fs.rename(`${path}/` + item, newFile, () => {
            console.log("Rename success");
          });
        } else {
          if (`${path}/` + item !== newFile)
            console.log(`${path}/` + item + " will be renamed to " + newFile);
        }
      }
    } catch (error) {
      console.log(error);
      console.log(error1);
    }
  });
} catch (err) {
  console.error(err);
}
//[ 'test1.py', 'test2.class', 'test4.java', 'test5.Dockerfile' ]
