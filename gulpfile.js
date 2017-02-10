const gulp = require('gulp');
const angularProtractor = require('gulp-angular-protractor');

gulp.task('protractor', (done) => {
    gulp.src([])
        .pipe(angularProtractor({
            configFile: "protractor.conf.js",
            debug: false,
            autoStartStopServer: true,
            webDriverStart: {
                args: ['--seleniumPort 4445']
            },
        }))
        .on('error', function(e) {
            throw e
        })
        .on('end', done);
});