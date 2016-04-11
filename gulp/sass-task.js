var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public'
};

var paths = {
  sass: [
        './assets/sass/*.scss'
      ],
}
gulp.task('sass', function() {
    return gulp.src(paths.sass)
    .pipe(sass({
        includePaths: [
        config.bootstrapDir + '/assets/stylesheets',
        './bower_components/font-awesome/scss'
      ],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});
