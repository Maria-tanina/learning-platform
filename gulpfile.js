const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');



function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'js/home.js',
        'js/blog.js',
        'js/courses.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('js/'));
}

function styles() {
    return src('scss/*.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(rename({
        suffix: '.min'
    }))

    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid:true
    }))
    .pipe(dest('css'));
}

function watching (){
    watch(['**/*.scss'], styles);
    watch(['js/**/*.js', '!js/main.min.js'], scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;

exports.default = parallel(styles,scripts, watching); 