module.exports = msc = (ms, unit, callback) => {
  var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7,
    month = week * 4,
    year = day * 365;

  if ( typeof ms === 'number' && typeof unit === "string" ) {
    var conv;
    switch (unit) {
      case 'seconds':
         conv = (Math.floor((ms / second) * 10) / 10);
        break;
      case 'minutes':
         conv = (Math.floor((ms / minute) * 10) / 10);
        break;
      case 'hours':
         conv = (Math.floor((ms / hour) * 10) / 10);
        break;
      case 'days':
         conv = (Math.floor((ms / day) * 10) / 10);
        break;
      case 'weeks':
         conv = (Math.floor((ms / week) * 10) / 10);
        break;
      case 'months':
         conv = (Math.floor((ms / month) * 10) / 10);
        break;
      case 'years':
         conv = (Math.floor((ms / year) * 10) / 10);
        break;
    }

    if ( callback !== undefined ) {
      callback(null, conv);
    } else {
      return conv
    }

  } else {
    if ( callback !== undefined ) {
      var err = `Invalid input!`;
      callback(err, null);
    } else {
      return null
    }
  }
}
