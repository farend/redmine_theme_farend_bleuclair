var path = require('path');
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins();
var reload = browserSync.reload;

// Optimize images
gulp.task('images', function() {
  gulp.src([
      './images/**/*',
  ]).pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('../images'))
    .pipe($.size({title: 'images'}))
});

// Compile and automatically prefix stylesheets
gulp.task('styles', function() {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 11',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    './styles/application.scss'
  ])
    .pipe($.newer('../stylesheets'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('../stylesheets'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('scripts', function() {
    gulp.src([
      // // Note: Since we are not using useref in the scripts build pipeline,
      // //       you need to explicitly list your scripts here in the right order
      // //       to be correctly concatenated
      // './scripts/main.js',
      // // Other scripts
    ])
      .pipe($.concat('theme.js'))
      .pipe(gulp.dest('../javascripts'))
      .pipe($.size({title: 'scripts'}));
});

// Clean output directory
gulp.task('clean', function() {
  del(['../images', '../stylesheets', '../javascripts'])
});

// Clear cache
gulp.task('clear', function (done) {
  return $.cache.clearAll(done);
});

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], function() {
  browserSync({
    proxy: 'localhost/redmine/'
  });
  gulp.watch(['./styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['./scripts/**/*.js'], ['scripts', reload]);
  gulp.watch(['./images/**/*'], ['images', reload]);
});

// Build production files, the default task
gulp.task('default', ['clean'], function(cb) {
  runSequence(
    'clear',
    'styles',
    ['scripts', 'images'],
    cb
  )
});
