'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename  = require('gulp-rename');

gulp.task('test', function () {
  return gulp.src('./test/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./test'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./test'));
});
