'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gulp_not = require('gulp-notify');

gulp.task('do-styles', function () {
    // path to SCSS
    gulp.src('./src/scss/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    // Converts Sass into CSS with Gulp Sass
    .pipe(sass({
        // logging the errors
        errLogToConsole: true
    }).on("error", gulp_not.onError({
            message: "<%= error.message %>",
            title  : "Sass Error!"
        })).on("error", () => {
            console.log("err CSS")
        }))
    .pipe(autoprefixer())
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
});

// Watch scss folder for changes
gulp.task('watch', function() {
    // Watches the scss folder for all .scss and .sass files
    // If any file changes, run the sass task
    gulp.watch('./src/scss/**/*.{scss,sass}', ['do-styles']);
})

// Creating a default task
gulp.task('default', ['do-styles', 'watch']);