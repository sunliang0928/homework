var gulp = require('gulp');
var devScss = require('gulp-sass');
var devJs = require('gulp-uglify');

//压缩js
gulp.task('devJs', function() {
    gulp.src('./src/js/*.js')
        .pipe(devJs())
        .pipe(gulp.dest('./src/js/zip'))
})

//编译scss

gulp.task('devScss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(devScss())
        .pipe(gulp.dest('./src/css'));
})

gulp.task('whcat', function() {
    gulp.watch('./src/scss/.scss', gulp.series('devScss'))
})

gulp.task('default', gulp.series('devScss', 'devJs', 'whcat'));