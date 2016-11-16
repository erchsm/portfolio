//load plugins
var gulp             = require('gulp'),
	compass          = require('gulp-compass'),
	autoprefixer     = require('gulp-autoprefixer'),
	cssnano	         = require('gulp-cssnano'),
	uglify           = require('gulp-uglify'),
	rename           = require('gulp-rename'),
	concat           = require('gulp-concat'),
	notify           = require('gulp-notify'),
	livereload       = require('gulp-livereload'),
	plumber          = require('gulp-plumber'),
	wait 			 = require('gulp-wait'),
	path             = require('path'),
	gutil  			 = require('gulp-util'),
	which  			 = require('npm-which')(__dirname),
	sketch 			 = require('gulp-sketch'),
	browserSync 	 = require('browser-sync').create();

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
	title: 'Gulp',
	icon: path.join(__dirname, 'gulp.png')
};

// gulp.task('default', ['live']);

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
		title: notifyInfo.title,
		icon: notifyInfo.icon,
		message: "Error: <%= error.message %>"
	})
};

//styles
gulp.task('styles', function() {
	return gulp.src(['src/scss/**/*.scss'])
		.pipe(plumber(plumberErrorHandler))
		.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'css/images'
		}))	
		// .pipe(sass())	
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css'))
		.pipe(rename({ suffix: '.min' }))
		// .pipe(cssnano())
		// .pipe(gulp.dest('css'))
		.pipe(browserSync.reload());
});

//scripts
gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
		.pipe(plumber(plumberErrorHandler))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(rename({ suffix: '.min' }))
});

gulp.task('export-slices', function(){
  try {
    which.sync('sketchtool');
  } catch(error){
    gutil.log(error); 
    return;
  }

  return gulp.src('./*.sketch')
    .pipe(sketch({
      export: 'slices',
      saveForWeb: true
    }))

    .pipe(gulp.dest('./'));
});

gulp.task('export-artboards', function(){
  try {
    which.sync('sketchtool');
  } catch(error){
    gutil.log(error); return;
  }

  try {
  return gulp.src('./*.sketch')
  	console.log('')
    .pipe(sketch({
      export: 'artboards',
      saveForWeb: true
    }))

    .pipe(gulp.dest('./'));
	}
	catch(error){
    gutil.log(error); return;
  }
});


//watch
gulp.task('default', function() {
	livereload.listen();

	browserSync.init({
		open: false,
    	port: 35731,
    	ui: false,
        server: {
            baseDir: "./"
        }
    });

	gulp.watch('sass/**/*.scss', ['styles']);

	//watch .js files
	gulp.watch('*.html').on('change', browserSync.reload);

	gulp.watch('*.js').on('change', browserSync.reload);
	// gulp.watch(['**/*.html', 'css/style.css', 'js/main.js']).on('change', browserSync.reload);
	// gulp.watch('./*.sketch', ['export-slices', 'export-artboards']).on('change', browserSync.reload);
});