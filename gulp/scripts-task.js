var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cache = require('gulp-cache');

var config = {
    publicDir: './public'
};

var paths = {
  scripts: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './assets/js/broadlink.js'
    ],
}
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.publicDir + '/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cache(uglify()))
        .pipe(gulp.dest(config.publicDir + '/js'));
});
