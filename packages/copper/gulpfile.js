const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

function buildStyles() {
  return gulp
    .src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"));
}

function minifyStyles() {
  return gulp
    .src("css/copper.css")
    .pipe(rename("copper.min.css"))
    .pipe(
      cleanCSS({ debug: true }, (details) => {
        console.log(
          `${details.name} original size: ${
            details.stats.originalSize / 1000
          } KB`
        );
        console.log(
          `${details.name} minified size: ${
            details.stats.minifiedSize / 1000
          } KB`
        );
      })
    )
    .pipe(gulp.dest("css"));
}

const buildSteps = series(buildStyles, minifyStyles);

function watchStyles() {
  return gulp
    .watch(
      ['src/**/*.scss'],
      { ignoreInitial: false },
      series(buildStyles, minifyStyles)
    );
}

exports.build = buildSteps;
exports.watchStyles = watchStyles;
