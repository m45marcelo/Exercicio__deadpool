const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');

function compilaLess(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
}

function comprimirImagens(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

exports.default = function(){
    gulp.watch('src/less/*.less', {ignoreInitial: false}, gulp.series(compilaLess))
    gulp.watch('src/images/*', {ignoreInitial:false}, gulp.series(comprimirImagens))
}