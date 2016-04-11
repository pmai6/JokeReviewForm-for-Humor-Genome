var gulp = require('gulp');
var browserSync = require('browser-sync');
var spawn = require('child_process').spawn;

gulp.task('serve', ['build', 'watch'], function() {
  var server = spawn('node', ['./server.js']);

  server.stdout.on('data', function(data) {
    console.log('' + data);
  });

  server.stderr.on('data', function(data) {
    console.log('ERR: ' + data);
  });

  server.on('close', function(code) {
    console.log('child process exited with code ' + code);
  });
});
