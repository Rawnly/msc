#!/usr/bin/env node
require('./msc');
msc(129049, 'seconds', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('Test Passed!');
  }
});
