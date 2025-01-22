
const gulp = require('gulp');
const less = require('gulp-less');


function compilaLess(){
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'))
}



exports.default = function(){
    gulp.watch('src/less/*.less', {ignoreInitial: false}, gulp.parallel(compilaLess))
    //gulp.watch('src/images/*', {ignoreInitial:false}, gulp.parallel(comprimirImagens))
}