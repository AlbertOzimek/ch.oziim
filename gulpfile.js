// gulp build - builds and uglifies the files into dist-gulp

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
   gulp.src('app/scripts/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist-gulp'));
});