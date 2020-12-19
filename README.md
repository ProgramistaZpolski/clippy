# clippy
Clippy - A simple Javascript clipboard Libary
*Because 3kB for clipboard.js is too much - this libary is only 263 bytes gzipped!*


## Usage
```html
<h1>Hello world</h1>
<small id="num" data-clippy="123">Your number: 123</small>
<script>
clippy("h1"); // "Hello world" gets copied

clippy("#num"); // "123" gets copied
</script>
```
