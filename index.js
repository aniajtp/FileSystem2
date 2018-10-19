var fs = require('fs');
var colors = require('colors');

fs.readdir('../FileSystem2', function(err, files) {
   if (err) throw err;
        console.log('Lista plików:'.green);
    fs.writeFile('./tekst.txt', '...', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
    });
});