var path = require('path');
var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins();
var reload = browserSync.reload;

// Optimize images
gulp.task('images', function(cb) {
  gulp.src([
      './images/**/*',
  ]).pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('../images'))
    .pipe($.size({title: 'images'}))
  cb();
});

// Compile and automatically prefix stylesheets
gulp.task('styles', function(cb) {
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
  gulp.src([
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
  cb();
});

gulp.task('scripts', function(cb) {
    gulp.src([
      // // Note: Since we are not using useref in the scripts build pipeline,
      // //       you need to explicitly list your scripts here in the right order
      // //       to be correctly concatenated
      // './scripts/main.js',
      // // Other scripts
      "./scripts/theme.js"
    ])
      .pipe($.concat("theme.js"))
      .pipe(gulp.dest("../javascripts"))
      .pipe($.size({ title: "scripts" }));
    cb();
});

// Clean output directory
gulp.task('clean', function() {
  // return del(["../images", "../stylesheets", "../javascripts"], {force: true})
  return del(["../stylesheets"], {force: true})
});

// Clear cache
gulp.task('clear', function (done) {
  return $.cache.clearAll(done);
});

// Watch files for changes & reload
gulp.task('serve', gulp.series(gulp.parallel('scripts', 'styles')), function(cb) {
  browserSync({
    proxy: 'localhost/redmine/'
  });
  gulp.watch(['./styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['./scripts/**/*.js'], ['scripts', reload]);
  gulp.watch(['./images/**/*'], ['images', reload]);
  cb;
});

gulp.task("watch", function() {
  gulp.watch("./styles/**/*.{scss,css}", gulp.task("styles"));
  gulp.watch("./scripts/**/*.js", gulp.task("scripts"));
  gulp.watch("./images/**/*", gulp.task("images"));
});

// Build production files, the default task
gulp.task("default", gulp.series(
    "clean",
    "clear",
    "styles",
    gulp.parallel("scripts", "images")
  )
);
