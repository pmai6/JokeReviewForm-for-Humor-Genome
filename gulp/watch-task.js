var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('assets/sass/*.scss', ['sass']);
  gulp.watch('assets/js/*.js', ['scripts']);
  gulp.watch('assets/html/*.html', ['reload']);
  gulp.watch('assets/images/*', ['images']);
});
