var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')({
        lazy: true
    });

gulp.task('styles', function () {
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe($.cleanCss())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function () {
    return gulp
        .src([
            './src/js/!(vendor)**/!(app)*.js',
            './src/js/app.js'
        ])
        .pipe($.plumber())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.concat('app.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', ['styles', 'scripts'], function () {
    browserSync({
        server: {
            baseDir: "./",
            injectChanges: true // this is new
        }
    });
});

gulp.task('deploy', function () {
    return gulp
        .src('./public/**/*')
        .pipe(ghPages());
});

gulp.task('watch', function () {
    // Watch .sass files
    gulp.watch('src/scss/**/*.scss', ['styles', browserSync.reload]);
    // Watch .js files
    gulp.watch('src/js/*.js', ['scripts', browserSync.reload]);
});

gulp.task('default', function () {
    gulp.start(
        'styles',
        'scripts',
        'browser-sync',
        'watch'
    );
});