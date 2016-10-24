var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var webpack = require('gulp-webpack');
var gulpSequence = require('gulp-sequence');
var minify = require('gulp-minify');
var less = require('gulp-less');
var path = require('path');
var cssmin = require('gulp-cssmin');
let tslint = require('gulp-tslint');


gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

gulp.task('scripts', function() {
     return gulp.src('dist/main.js')
    .pipe(webpack({
      output: {
        filename: 'gew.js',
      }
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('compress', function() {
  return gulp
    .src(['dist/gew.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('less', function () {
  return gulp.src('./src/themes/**/theme.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('dist/themes'));
});

gulp.task('default', gulpSequence(['tslint', 'ts', 'scripts'], 'less', 'compress'));
