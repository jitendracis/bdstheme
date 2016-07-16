process.env.DISABLE_NOTIFIER = true;
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2011-2014 Webcomm Pty Ltd
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Load plugins
var
  gulp         = require('gulp'),
  less         = require('gulp-less'),
  minifycss    = require('gulp-minify-css'),
  uglify       = require('gulp-uglify'),
  rimraf       = require('gulp-rimraf'),
  concat       = require('gulp-concat'),
  notify       = require('gulp-notify'),
  cache        = require('gulp-cache'),
  livereload   = require('gulp-livereload');

var config = {

  // If you do not have the live reload extension installed,
  // set this to true. We will include the script for you,
  // just to aid with development.
  appendLiveReload: false,

  // Should CSS & JS be compressed?
  minifyCss: false,
  uglifyJS: false

}

// CSS
gulp.task('css', function() {
  var stream = gulp
    .src('src/less/style.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS CSS
gulp.task('bds_styles_css', function() {
  var stream = gulp
    .src('src/less/bds_styles.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Custom CSS
gulp.task('bds_custom_styles_css', function() {
  var stream = gulp
    .src('src/less/bds_custom_styles.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Responsive CSS
gulp.task('bds_responsive_css', function() {
  var stream = gulp
    .src('src/less/bds_responsive.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Menu CSS
gulp.task('menu_css', function() {
  var stream = gulp
    .src('src/less/menu.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Font-Awesome CSS
gulp.task('font-awesome_css', function() {
  var stream = gulp
    .src('src/less/font-awesome.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Owl-Carousel CSS
gulp.task('owl-carousel_css', function() {
  var stream = gulp
    .src('src/less/owl-carousel.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// BDS Slideshow CSS
gulp.task('bds_slideshow_css', function() {
  var stream = gulp
    .src('src/less/bds_slideshow.less')
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(gulp.dest('css'));

  if (config.minifyCss === true) {
    stream.pipe(minifycss());
  }

  return stream
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// JS
gulp.task('js', function() {
  var scripts = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/js/transition.js',
    'bower_components/bootstrap/js/collapse.js',
    'bower_components/bootstrap/js/carousel.js',
    'bower_components/bootstrap/js/dropdown.js',
    'bower_components/bootstrap/js/modal.js',
    'src/js/script.js'
  ];

  if (config.appendLiveReload === true) {
    scripts.push('src/js/livereload.js');
  }

  var stream = gulp
    .src(scripts)
    .pipe(concat('script.js'));

  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }

  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// BDS Custom JS
gulp.task('bds_script_js', function() {
  var scripts = [
    'src/js/bds_script.js'
  ];
  var stream = gulp
    .src(scripts)
    .pipe(concat('bds_script.js'));
  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }
  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// BDS Minicart JS
gulp.task('minicart_js', function() {
  var scripts = [
    'src/js/minicart.js'
  ];
  var stream = gulp
    .src(scripts)
    .pipe(concat('minicart.js'));
  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }
  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// BDS Owl-Carousel JS
gulp.task('owl-carousel_js', function() {
  var scripts = [
    'src/js/owl-carousel.js'
  ];
  var stream = gulp
    .src(scripts)
    .pipe(concat('owl-carousel.js'));
  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }
  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// BDS Slideshow JS
gulp.task('slideshow_js', function() {
  var scripts = [
    'src/js/slideshow.js'
  ];
  var stream = gulp
    .src(scripts)
    .pipe(concat('slideshow.js'));
  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }
  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// BDS Slideshow Cycle JS
gulp.task('slideshow-cycle_js', function() {
  var scripts = [
    'src/js/slideshow-cycle.js'
  ];
  var stream = gulp
    .src(scripts)
    .pipe(concat('slideshow-cycle.js'));
  if (config.uglifyJS === true) {
    stream.pipe(uglify());
  }
  return stream
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});

// Images
gulp.task('images', function() {
  return gulp
    .src('src/images/**/*')
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: 'Successfully processed image' }));
});

// Fonts
gulp.task('fonts', function() {
  return gulp
    .src([
      'bower_components/bootstrap/fonts/**/*',
      'bower_components/font-awesome/fonts/**/*'
    ])
    .pipe(gulp.dest('fonts'))
    .pipe(notify({ message: 'Successfully processed font' }));
});

// BDS Fonts
gulp.task('bds_fonts', function() {
  return gulp
    .src([
      'src/fonts/**/*'
    ])
    .pipe(gulp.dest('fonts'))
    .pipe(notify({ message: 'Successfully processed font' }));
});

// Rimraf
gulp.task('rimraf', function() {
  return gulp
    .src(['css', 'js', 'images'], {read: false})
    .pipe(rimraf());
});

// Default task
gulp.task('default', ['rimraf'], function() {
    gulp.start('bds_styles_css', 'bds_custom_styles_css', 'bds_responsive_css', 'menu_css', 'font-awesome_css', 'owl-carousel_css', 'bds_slideshow_css', 'css', 'bds_script_js', 'minicart_js', 'owl-carousel_js', 'slideshow_js', 'slideshow-cycle_js', 'js', 'images', 'bds_fonts', 'fonts');
});

// Watch
gulp.task('watch', function() {

  // Watch .less files
  gulp.watch('src/less/**/*.less', ['css']);
  gulp.watch('src/less/**/*.less', ['bds_styles_css']);
  gulp.watch('src/less/**/*.less', ['bds_custom_styles_css']);
  gulp.watch('src/less/**/*.less', ['bds_responsive_css']);
  gulp.watch('src/less/**/*.less', ['menu_css']);
  gulp.watch('src/less/**/*.less', ['font-awesome_css']);
  gulp.watch('src/less/**/*.less', ['owl-carousel_css']);
  gulp.watch('src/less/**/*.less', ['bds_slideshow_css']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/js/**/*.js', ['bds_script_js']);
  gulp.watch('src/js/**/*.js', ['minicart_js']);
  gulp.watch('src/js/**/*.js', ['owl-carousel_js']);
  gulp.watch('src/js/**/*.js', ['slideshow_js']);
  gulp.watch('src/js/**/*.js', ['slideshow-cycle_js']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

  // Watch fonts
  gulp.watch('bower_components/bootstrap/fonts/**/*', ['fonts']);
  gulp.watch('bower_components/bootstrap/fonts/**/*', ['bds_fonts']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in , reload on change
  gulp.watch(['css/style.css', 'js/script.js', 'images/**/*', 'fonts/**/*']).on('change', function(file) {
    server.changed(file.path);
  });

});
