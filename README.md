# MSC
**NodeJS** milliseconds converter

## Install
Use *NPM*:

```bash
  $ npm install ms-c
```

## Usage

**Sample**:
```js
  require('ms-c');
  console.log( msc( [ms, unit], callback ) );
```

**Example**:
Synchronus:
```js
  require('ms-c');
  var ms = d.getDate();


  var time =  msc(ms, 'years') + ' years'
  console.log(time); // => 47 years

  // or

  console.log( 'Seconds: ' + msc(1000, 'seconds') );
  // => return 'Seconds: 1'

```

Asynchronus:
```js
  require('ms-c');
  msc(1500, 'seconds', (err, data) => {
    if (err) throw err;
    console.log('Seconds: ' + data);
  });
```

See **[example.js](example.js)** for a detailed example.

## API msc([ms, unit], callback)

### ms
**Type**: `number` <br>

### unit
**Type**: `string` <br>

#### Units
- seconds
- hours
- days
- weeks
- years

### callback
Type: `function`<br>
Callback return `err` & `data`.<br><br>
**Example**:
```js
  require('msc');
  msc(1000, 'seconds', (err, data) => {
    console.log(data);
  })
```

---
<h5 align="center"> A project by <a href="https://github.com/Rawnly">@Rawnly</a> </h5>
