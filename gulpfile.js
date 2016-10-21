var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var webpack = require('gulp-webpack');
var gulpSequence = require('gulp-sequence')
var typedoc = require("gulp-typedoc");

 

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('scripts', function() {
     return gulp.src('dist/main.js')
    .pipe(webpack({
      output: {
        filename: 'compiled.js',
      }
    }))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task("typedoc", function() {
    return gulp
        .src(["src/*.ts"])
        .pipe(typedoc({
            module: "amd",
            target: "es5",
            includeDeclarations: true,
            out: "./docs",
            name: "The Geneva Emotion Wheel",
            ignoreCompilerErrors: false,
            version: true,
        }))
    ;
});


gulp.task('default', gulpSequence('ts', 'scripts'));
