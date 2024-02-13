const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', () => {
  return gulp.src('./scss-building/*.scss')  // Selecione todos os arquivos Sass
    .pipe(sourcemaps.init())  // Inicializa os sourcemaps
    .pipe(sass().on('error', sass.logError))  // Compila Sass
    .pipe(sourcemaps.write('.'))  // Grava os sourcemaps no mesmo diretório
    .pipe(gulp.dest('./css'));  // Salva o CSS resultante no destino selecionado
});

gulp.task('watch', () => {
  gulp.watch('./scss-building/*.scss', gulp.series('scss'));
}); //Inicializa observação para ver se tem modificações (automatiza a compilação)

gulp.task('default', gulp.series('scss', 'watch')); 