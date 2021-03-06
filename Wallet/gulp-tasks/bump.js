/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */

'use strict';

var args = require('yargs').argv;
var config = require('../gulp.config')();
var log = require('../gulp-utils/log.js');

var plugins = require('gulp-load-plugins')({lazy: true});

module.exports = function bump (gulp) {
	return function() {
		var msg = 'Bumping versions';
		var type = args.type;
		var version = args.ver;
		var options = {};
		if (version) {
			options.version = version;
			msg += ' to ' + version;
		} else {
			options.type = type;
			msg += ' for a ' + type;
		}
		log(msg);

		return gulp
			.src(config.packages)
			.pipe(plugins.print())
			.pipe(plugins.bump(options))
			.pipe(gulp.dest(config.root));
	};
};
