const fs = require("fs");
//synchronous
// fs.writeFileSync("./test.txt", "new testfile created syc");

//asynchronous
fs.writeFile("./test.txt", "new testfile created async" , (error) => {});


