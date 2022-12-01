const csvtojson = require('csvtojson')
const fs = require('fs')

let csvfilepath = ["./train_study_level.csv","./sample_submission.csv","./train_image_level.csv"]
let csv=["train_study_level.json","sample_submission.json","train_image_level.json"]

for(let i=0;i<csvfilepath.length;i++){
    csvtojson().fromFile(csvfilepath[i]).then((json) => {
        fs.writeFileSync(csv[i], JSON.stringify(json))
    });
}
console.log('finish');