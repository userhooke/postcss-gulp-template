var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


var processors = [
autoprefixer
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
