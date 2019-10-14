let gulp = require('gulp');
let less = require('gulp-less');
let minCss = require('gulp-cssmin');
let rename = require('gulp-rename');

gulp.task('build-less', function() {
  return gulp.src('./src/main.less')
  .pipe(less())
  .pipe(rename('simple.css'))
  .pipe(gulp.dest('./dist/')); 
});
gulp.task('minify-css', function() {
  return gulp.src('./dist/simple.css')
  .pipe(minCss())
  .pipe(rename('simple.min.css'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.less', gulp.series('build-less', 'minify-css'));
});