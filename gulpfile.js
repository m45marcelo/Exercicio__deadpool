const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');

function compilaLess(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'))
}

function comprimirImagens(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
}

exports.default = function(){
    gulp.watch('src/less/*.less', {ignoreInitial: true}, gulp.series(compilaLess))
    gulp.watch('src/images/*', {ignoreInitial:false}, gulp.series(comprimirImagens))
}