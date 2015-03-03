'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('babel', ['clean'], function () {
    return gulp.src(['src/**/*.js', '!src/**/__tests__/**/**.**'])
        .pipe(plumber({ errorHandler: notify.onError('Babel Error') }))
        .pipe(babel())
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel'], function () {
    gulp.watch('src/**/*.js', ['babel']);
});