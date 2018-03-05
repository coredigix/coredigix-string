'use strict';

var gulp	= require('gulp');
var minify	= require('gulp-minify');
var include	= require("gulp-include");
var rename	= require("gulp-rename");


gulp.task('default', () => {
	console.log('COREDIGIX XSS');
	console.log('COREDIGIX>> to compile to Nodejs: gulp node');
	console.log('COREDIGIX>> to compile as brighter plugin (navigator): gulp brighter');
});

gulp.task('node', () => {
	gulp.src('assets/node.js')
		.pipe(include({
			hardFail: true
		}))
		.pipe(rename('index.js'))
		.pipe(minify())
		.pipe(gulp.dest("dist/"));
});


gulp.task('brighter', () => {
	gulp.src('assets/brighter-plugin.js')
		.pipe(include({
			hardFail: true
		}))
		.pipe(rename('coredigix-brighter-xss.js'))
		.pipe(minify())
		.pipe(gulp.dest("dist/"))
		.pipe(gulp.dest('test/chrome-extension/js/'));
});