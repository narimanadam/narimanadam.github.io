var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('build-css', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['build-css'])
});

gulp.task('default', function() {
  // place code for your default task here
  console.log('in default')
});