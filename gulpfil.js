var gulp = require("gulp");
var server = require("gulp-webserver");
var minCss = require("gulp-clean-css");
var htmlmin = require("gulp-htmlmin");
var minJs = require("gulp-uglify");
var sass = require("gulp-sass");



var options = { // 压缩html的时候需要往里面传的参
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};
gulp.src("index.html")
    .pipe(htmlmin(options))
    .pipe(gulp.dest("mody"))

})
gulp.task("server",function(){
    gulp.src("src")
        .pipe(server({
            port:8282,
            open: true,
            host:"169.254.224.149",
            middleware:function(req, res, next){
                next();
            }
        }))
});

gulp.task("minCss",function(){
    gulp.src("css/*.css")
        .pipe(minCss())
        .pipe(gulp.dest("dist/css"))
})

gulp.task("minJs",function(){
    gulp.src("js/*.js")
        .pipe(minjs())
        .pipe(gulp.dest("dist/js"))
})

gulp.task("sass",function(){
    gulp.src("css/*.sass")
        .pipe(sass())
        .pipe(concat("all.css"))
        .pipe(gulp.dest("dist/css"))
})