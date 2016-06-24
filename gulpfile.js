"use strict";
const gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    mainBowerFiles = require('main-bower-files'),
    filter = require('gulp-filter'),
    imagemin = require('gulp-imagemin'),
    flatten = require('gulp-flatten'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2eot = require('gulp-ttf2eot'),
    purify = require('gulp-purifycss'),
    newer = require('gulp-newer'),
    remember = require('gulp-remember'),
    path = require('path'),
    browsersync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    replace = require('gulp-replace-task'),
    sassLint = require('gulp-sass-lint'),

    dir = {
        src: './src/',
        release: './dist/',
        img: 'img/',
        js: 'js/vendor/',
        css: 'css/vendor/',
        fonts: 'fonts/',
        scss: 'scss/'
    },
    overrides = {
        "bootstrap": {
            "main": {
                "development": ["./dist/js/bootstrap.js", "./dist/css/bootstrap.css", './dist/fonts/**'],
                "production": ["./dist/js/bootstrap.min.js", "./dist/css/bootstrap.min.css", './dist/fonts/**']
            }
        },
        "jquery":{
            "main":{
                "development": "./dist/jquery.js",
                "production": "./dist/jquery.min.js"
            }
        },
        "wow":{
            "main":{
                "development": "./dist/wow.js",
                "production": "./dist/wow.min.js"
            }
        },
        "animate.css":{
            "main":{
                "development": "./animate.css",
                "production": "./animate.min.css"
            }
        },
        "owl.carousel":{
            "main":{
                "development" : [
                    "./dist/owl.carousel.js",
                    "./dist/assets/owl.carousel.css"
                ],
                "production" : [
                    "./dist/owl.carousel.min.js",
                    "./dist/assets/owl.carousel.min.css"
                ]
            }
        },
        "perfect-scrollbar":{
            "main":{
                "development" : [
                    "./js/perfect-scrollbar.jquery.js",
                    "./css/perfect-scrollbar.css"
                ],
                "production" : [
                    "./js/perfect-scrollbar.jquery.min.js",
                    "./css/perfect-scrollbar.min.css"
                ]
            }
        },
        "rangeslider.js":{
            "main":{
                "development": "./dist/rangeslider.js",
                "production": "./dist/rangeslider.min.js"
            }
        },
        "jquery.countdown":{
            "main":{
                "development": "./dist/jquery.countdown.js",
                "production": "./dist/jquery.countdown.min.js"
            }
        },
        "lodash":{
            "main":{
                "development": "./dist/lodash.js",
                "production": "./dist/lodash.min.js"
            }
        }
    };

/*******************************************************************
 ******************* Development Mode Setup ************************
 *******************************************************************/

let guppy = require('git-guppy')(gulp);

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'dev';
var DevMode;
if(!process.env.NODE_ENV || process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'dev'){
    DevMode = true;
    process.env.NODE_ENV = 'development';
} else{
    DevMode = false;
    process.env.NODE_ENV = 'production';
}

/*******************************************************************
 ******************* Build Tasks ***********************************
 *******************************************************************/

//Clean before build
gulp.task('cls', () => {
    return gulp.src(dir.release)
        .pipe(clean({
            force: true,
            read: false
        }));
});

//Copy assets
gulp.task('assets', () => {
    const jsFilter = filter('**/*.js', {restore: true}),
        styleFilter = filter('**/*.css', {restore: true}),
        fontFilter = filter('**/*.ttf'),
        imageFilter = filter('**/*.{png,jpg,gif,svg}', {restore: true}),
        htmlFilter = filter('**/*.html', {restore: true});

    return gulp.src(`${dir.src}/**`, {since: gulp.lastRun('assets')})
        .pipe(flatten())
        //Images
        .pipe(imageFilter)
        .pipe(newer(dir.release + dir.img))
        .pipe(imagemin())
        .pipe(gulp.dest(dir.release + dir.img))
        .pipe(imageFilter.restore)
        //Javascript
        .pipe(jsFilter)
        .pipe(newer(`${dir.release}/js`))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulpif(DevMode, sourcemaps.init()))
        .pipe(uglify().on('error', (e)=>{console.log(e.message);}))
        .pipe(gulpif(DevMode, sourcemaps.write()))
        .pipe(gulp.dest(`${dir.release}/js`))
        .pipe(jsFilter.restore)
        //Style
        .pipe(styleFilter)
        .pipe(newer(dir.release + dir.css))
        .pipe(gulpif(!DevMode, purify([`${dir.src}**/*.js`, `${dir.src}**/*.html`])))
        .pipe(gulpif(DevMode, sourcemaps.init()))
        .pipe(autoprefixer({
            browsers: ['Chrome > 25', 'Safari > 6', 'iOS 7', 'Firefox > 25'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulpif(DevMode, sourcemaps.write()))
        .pipe(gulp.dest(dir.release + dir.css))
        .pipe(styleFilter.restore)
        //HTML
        .pipe(htmlFilter)
        .pipe(newer(dir.release))
        .pipe(gulp.dest(dir.release))
        .pipe(htmlFilter.restore)
        //Fonts
        .pipe(fontFilter)
        .pipe(newer(dir.release + dir.fonts))
        .pipe(ttf2eot({clone:true}))
        .pipe(ttf2woff({clone:true}))
        .pipe(ttf2woff2({clone:true}))
        .pipe(gulp.dest(dir.release + dir.fonts));

});


//Copy bower dependencies
gulp.task('bower', () => {
    const jsFilter = filter('**/*.js', {restore: true}),
        styleFilter = filter('**/*.css', {restore: true}),
        fontFilter = filter('**/*.{eot,ttf,woff,woff2}');

    return gulp.src(mainBowerFiles({ "overrides": overrides }), { cwd: './bower_components' })
        //Javascript
        .pipe(jsFilter)
        .pipe(newer(`${dir.release+dir.js}`))
        .pipe(gulp.dest(`${dir.release+dir.js}`))
        .pipe(jsFilter.restore)
        //CSS
        .pipe(styleFilter)
        .pipe(newer(`${dir.release+dir.css}`))
        .pipe(gulp.dest(`${dir.release+dir.css}`))
        .pipe(styleFilter.restore)
        //Fonts
        .pipe(fontFilter)
        .pipe(newer(`${dir.release+dir.fonts}`))
        .pipe(gulp.dest(`${dir.release+dir.fonts}`))

});


//Compile Styles
gulp.task('styles', () => {
    return gulp.src('*.scss', {cwd: dir.src + dir.scss})
        .pipe(flatten())
        .pipe(sassLint())
        .pipe(gulpif(DevMode, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 10 Chrome versions', 'Firefox > 20'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulpif(DevMode, sourcemaps.write()))
        .pipe(gulp.dest(`${dir.release}/css`));
});

//Lint js
gulp.task('eslint', function () {
    return gulp.src(`${dir.src}/js/**/*.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

//Lint scss
gulp.task('scsslint', function () {
    return gulp.src(`${dir.src}/scss/**/*.scss`)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task('minreplace', function () {
    return gulp.src('**/*.html', {cwd: dir.release })
        .pipe(replace({
            patterns: [
                {
                    match: /\/vendor\/(\w+|\w+.\w+|\w+.\w+.\w+.).(js|css)/g,
                    replacement: function (match) {
                        if(match.includes(".min.")) return;
                        match = match.trim();
                        let to = match.lastIndexOf(".");
                        return match.includes(".js") ? match.substring(0, to).concat(".min.js") : match.substring(0, to).concat(".min.css")
                    }
                }
            ]
        }))
        .pipe(gulp.dest(dir.release));
});

/*******************************************************************
 ******************* Global Tasks **********************************
 ********************************************************************/

//githook pre-commitgit
gulp.task('pre-commit', gulp.parallel('eslint', 'scsslint'));

gulp.task('server', () =>{
    browsersync.init({
       server: dir.release
    });
    browsersync.watch(`${dir.release}/**/*.*`).on('change', browsersync.reload);
});

gulp.task('watch', () =>{
    gulp.watch(`${dir.src}/scss/**/*.*`, gulp.series('styles'));
    gulp.watch([`${dir.src}/img/**`, `${dir.src}/js/**`, `${dir.src}/css/**`, `${dir.src}/fonts/**`, `${dir.src}/*.*`], gulp.series('assets'));
    gulp.watch('./bower_components/**/*.*', gulp.series('bower'));
});

gulp.task('build', gulp.series(gulp.parallel('bower', 'assets', 'styles'), gulp.parallel('eslint'), gulp.parallel('watch', 'server')));
gulp.task('release', gulp.series("cls", gulp.parallel('bower', 'assets', 'styles'), 'minreplace'));

