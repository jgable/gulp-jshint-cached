'use strict';

var fs = require('fs'),
    jshintPlugin = require('gulp-jshint'),
    cache = require('gulp-cache');

var jshintVersion = '2.4.3';

// Add on to the original plugin
jshintPlugin.cached = function (opt) {
    var jshintOpts;

    if (typeof opt === 'string') {
        jshintOpts = fs.readFileSync(opt);
    } else {
        jshintOpts = JSON.stringify(opt);
    } 
    
    return cache(jshintPlugin(opt), {
        key: function (file) {
            return [file.contents.toString('utf8'), jshintVersion, jshintOpts].join('');
        },
        success: function (jshintedFile) {
            return jshintedFile.jshint.success;
        },
        value: 'jshint'
    });
};

// Allow the fileCache to be modified externally
jshintPlugin.cached.fileCache = cache.fileCache;

module.exports = jshintPlugin;