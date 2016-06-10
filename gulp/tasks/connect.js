const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './www/',
    port: 9082,
    livereload: true
  });
});

