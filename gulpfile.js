var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pcimport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');


var processors = [
pcimport,
cssnext,
// mqpacker,
cssnano
];



gulp.task('css', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dest/css'));
});

//watch task
gulp.task('watch', function () {
   gulp.watch('src/css/**/*.css', ['css']);
});

//default task
gulp.task('default', ['css']);
