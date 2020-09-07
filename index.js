const path = require("path");
const fs = require("fs");
const BigNumber = require('bignumber.js');

fs.readFile(path.join(__dirname, "strings.txt"),
    "utf-8",
    (err, data) => {
        if (err) throw err;
        let dataArr = data.split(`\n`);
        for(let i = 0; i < dataArr.length; i++){

            let decimal = dataArr[i].split('').map((char) => {
                return char.charCodeAt(0).toString(10);
            }).join('');
            
            fs.appendFile(path.join(__dirname, "decimal.txt"), 
                `${decimal}\n`,
                err => {
                    if(err) throw err;
                }
            );

            fs.appendFile(path.join(__dirname, "hexadecimal.txt"),
                `${BigNumber(decimal).toString(16).toUpperCase()}\n`,
                err => {
                    if(err) throw err;
                }
            );
        }
    }
);
