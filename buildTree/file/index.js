const fs = require('fs') //import
lnamefile = '.dcm'; //นามสกุลของรูป
folderPath = '../photo'; //path ของfolder

var build=(path)=>{
      const list = [];
      fs.readdirSync(path).forEach(file=>{ //file คือ array
          const key = `${path}/${file}`; //format str
          const treeNode = {
             key:key,
             label:file,
           };
         if(!file.includes(lnamefile)){ //.dcm ใช่ไหม
             treeNode.nodes = build(`${path}/${file}`); //file ตัวใน Array
         }
         else{
             treeNode.value = `${path}/${file}`;
         }

       list.push(treeNode);
      }) 
    
    return list;
   
     
}
 const arr = build(folderPath);

  let data = JSON.stringify(arr,null, 2); //ทำเป็นjson
  fs.writeFileSync('nut.json', data ,(err) => {
      if (err){throw err;}
      console.log('Data written to file');
 });