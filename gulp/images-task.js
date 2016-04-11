var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var config = {
    publicDir: './public'
};

gulp.task('images', function() {
    return gulp.src('./assets/images/**/*')
        // .pipe(cache(imagemin({ optimizationLevel: 5, 
        // 	progressive: true, interlaced: true })))
        .pipe(gulp.dest(config.publicDir + '/images'));
});
