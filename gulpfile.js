'use strict';

const gulp    = require('gulp');
const cssnano = require('gulp-cssnano');
const rename  = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

gulp.task('test', function () {
  return gulp.src('./test/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./test'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./test'));
});
