// jshint ignore: start
"use strict";

const jshint = require('gulp-jshint');
const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

const SPECS = './spec/*.js';
const JS_SRC = './src/*.js';
const TARGET = './dist/';

gulp.task('test', () =>
    gulp.src(SPECS).pipe(jasmine())
);

gulp.task("lint", function() {
    return gulp.src(JS_SRC)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('copy', function () {
    return gulp.src(JS_SRC)
        .pipe(gulp.dest(TARGET));
});

gulp.task('default', ['lint', 'test']);
gulp.task('release', ['copy']);
