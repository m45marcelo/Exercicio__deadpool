const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const html = require('gulp-htmlmin');

function htmlMin(){
    return gulp.src('src/*.html')
    .pipe(html({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

function compilaLess(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('build'))
}

function comprimirImagens(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build'))
}

exports.default = gulp.series(htmlMin,compilaLess, comprimirImagens);