const request = require('request');

const fs = require('fs');

const URL = process.argv[2];
const filePath = process.argv[3];

const fetchAndSave = (url, filePath) => {
  
  request(url, (error, response, body) => {
    
    fs.writeFile(filePath, body, err => {

      if (err) {
          console.error(err);
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};

fetchAndSave(URL, filePath);