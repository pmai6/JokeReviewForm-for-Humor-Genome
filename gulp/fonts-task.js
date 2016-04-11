var gulp = require('gulp');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    bowerDir: './bower_components'
};

gulp.task('fonts', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});
