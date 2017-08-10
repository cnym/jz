var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

var pkgconf = require('./package');

var tarfile = '';


gulp.task('installtar', function() {
	tarfile = pkgconf.name + '-' + pkgconf.version + '.copy.tgz';
	return gulp.start('tar');
});
gulp.task('updatetar', function() {
	tarfile = pkgconf.name + '-' + pkgconf.version + '.update.tgz';
	return gulp.start('tar');
});

gulp.task('tar', function() {
	return gulp.src('output/**')
		.pipe(tar(tarfile, {
			mode: 0755
		}))
		.pipe(gzip({
			append: false
		}))
		.pipe(gulp.dest('./pkg/'));
});
