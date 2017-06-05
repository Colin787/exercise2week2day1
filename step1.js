const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg', console.log('Downloading Image!!!'))
       .on('error', function(err) {
          throw err;
       })
       .on('response', function(response){
          console.log('Response Status Code: ', response.statusCode);
          console.log('Downloaded!!');
       })
       .pipe(fs.createWriteStream('./downloaded.html'));