const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const htmlmin = require("gulp-htmlmin");
const watch = require("gulp-watch");

//JAVASCRIPT
gulp.task("scripts", ()=>{
  console.log("Otimizando JS...");
  gulp
  .src(["src/jquery-3.2.1.js", "src/cep.js"])
  .pipe(babel(
    {
      presets:["env"]
    }
  ))
  .pipe(uglify())
  .pipe(concat("app.min.js"))
  .pipe(gulp.dest("dist"))

});


//CSS
gulp.task("styles", ()=>{
  console.log("Otimizando CSS...");
  gulp
  .src("src/**/*.css")
  .pipe(uglifycss(
    {
      uglifycomments:true
    }
  ))
  .pipe(concat("app.min.css"))
  .pipe(gulp.dest("dist"))
});


//HTML
gulp.task("templates", ()=>{
  console.log("Otimizando HTML...");
  gulp
  .src("src/**/*.html")
  .pipe(htmlmin(
    {
      collapseWhitespace: true
    }
  ))
  .pipe(gulp.dest("./"))
});

gulp.task("watch", ()=>{
  watch("src/**/*.html", ()=> gulp.start("templates"));
  watch("src/**/*.js", ()=> gulp.start("scripts"));
  watch("src/**/*.css", ()=> gulp.start("styles"));
});


gulp.task("default", ()=>{
  gulp.start("styles", "scripts", "templates","watch");
});
