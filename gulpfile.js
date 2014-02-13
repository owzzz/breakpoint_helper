var gulp = require('gulp');

var sass = require('gulp-sass');
var path = "./sass/breakpoint_helper.scss";

gulp.task('styles', function() {
  // Compile sass file into css file
  return gulp.src(path)
    .pipe(sass())
    .pipe(gulp.dest('demo/styles/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(path, ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['styles', 'watch']);