'use strict';

var fs = require('fs'),
    jshintPlugin = require('gulp-jshint'),
    cache = require('gulp-cache');

var jshintVersion = '0.2.4';

var task = {
    // Allow the original if needed.
    original: jshintPlugin,
    // Or, the cached version
    cached: function (opt) {
        var jshintOpts;

        if (typeof opt === 'string') {
            jshintOpts = fs.readFileSync(opt);
        } else {
            jshintOpts = JSON.stringify(opt);
        } 
        
        return cache.proxy('jshint', {
            task: jshintPlugin(opt),
            key: function (file) {
                return [file.contents.toString('utf8'), jshintVersion, jshintOpts].join('');
            },
            success: function (jshintedFile) {
                return jshintedFile.jshint.success;
            },
            value: function (jshintedFile) {
                var result = {
                    jshint: {
                        success: jshintedFile.jshint.success,
                        cached: true
                    }
                };
                return result;
            }
        });
    }
};

// Allow the fileCache to be modified externally
task.cached.fileCache = cache.fileCache;

module.exports = task;