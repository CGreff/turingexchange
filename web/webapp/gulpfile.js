var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

var paths = {
    build: 'build/**/*',
    scripts: 'src/**/*.js',
    templates: 'src/**/*.html'
};

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('html', function() {
   return gulp.src(paths.templates)
       .pipe(gulp.dest('build/'));
});

gulp.task('build', ['scripts', 'html'], function() {
    return gulp.src(paths.build)
        .pipe(gulp.dest('../src/main/resources/static/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['build']);