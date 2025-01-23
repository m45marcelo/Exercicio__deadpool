const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function comprimirImagens(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

exports.default = function(){
    gulp.watch('src/images/*', {ignoreInitial:false}, gulp.series(comprimirImagens))
}