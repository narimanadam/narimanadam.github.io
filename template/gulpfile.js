var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    autoprefixer = require('gulp-autoprefixer');

/**
 * Compile SCSS to CSS
 */

gulp.task('build-css', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
});

/**
 * Minify CSS
 */

gulp.task('minify-css', () => {
  gulp.src('./css/*.css')
      .pipe(cssmin())
       .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'))
});

/**
 * Minify Js
 */

gulp.task('compress', function() {
  gulp.src('./js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
    gulp.watch('./*.html');
    gulp.watch('./scss/**/*.scss', ['build-css', 'minify-css']);
    gulp.watch('./js/*.js', ['compress']);
});

gulp.task('default', function() {
  // place code for your default task here
  console.log('in default')
});