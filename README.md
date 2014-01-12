gulp-jshint-cached ![status](https://secure.travis-ci.org/jgable/gulp-jshint-cached.png?branch=master)&nbsp;![dependencies](https://david-dm.org/jgable/gulp-jshint-cached.png)
==================

A cached version of the [gulp-jshint](https://github.com/wearefractal/gulp-jshint) task.

## Example

Literally a straight pass thru so you can pass all the [same options](https://github.com/wearefractal/gulp-jshint#options) as `jshint(...)` but caches successful files so they aren't ran again unless they change.

```javascript
var jshint = require('gulp-jshint-cached');

gulp.task('lint', function() {
  gulp.src('./lib/*.js')
    .pipe(jshint.cached())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
```

## Caching

This method uses a small temp file cache based on a hash of the contents of the file, the JSHint version and the JSHint options passed in.  If a JSHint option is changed all files will be ran again to prevent false positives.

## License

The MIT License (MIT)

Copyright (c) 2014 [Jacob Gable](http://jacobgable.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
