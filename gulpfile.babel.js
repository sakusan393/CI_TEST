'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import ftp  from 'vinyl-ftp';
import config from './config.json';

gulp.task('default', () => {
  console.log('hell');
});

gulp.task('upload', () => {
  const conn = ftp.create(config);
  return gulp.src('.',{ base: 'deploy/', buffer: false })
  .pipe( conn.dest( '/web/393/test/' ) );
});
gulp.task('jade', () => {
  console.log('holl');
  return gulp.src('src/jade/index.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty: true,
  }))
  .pipe(gulp.dest('deploy/'))
  .on('end', () => console.log('jade end'));
});



