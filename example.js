#!/usr/bin/env node
require('./msc');

// Asynchronus
msc(1500, 'seconds', (err, data) => {
  if (err) throw err;
  console.log('Asynchronus: ' + data + 's');
});


// Synchronus
// You can assing it
var d = new Date();
var ms = d.getTime();
var time =  msc(ms, 'years') + ' years'
console.log(time); // => 47 years


// A project by @Rawnly <fedevitale99@gmail.com> (https://github.com/rawnly)
