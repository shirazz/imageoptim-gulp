/**
 * Gulpfile.
 *
 * Compress Images with Gulp. Minifies PNG, JPEG, GIF and SVG images.
 * 
 * @author Shiraz Samad ( https://github.com/shirazz ), Maedah Batool ( https://github.com/MaedahBatool )
 * @version 1.0.0
 * @credits Ahmad Awais ( https://github.com/ahmadawais ), Maedah Batool ( https://github.com/MaedahBatool )
 */

/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */
import gulp from 'gulp';
import imagemin from 'gulp-imagemin'; // Minify PNG, JPEG, GIF and SVG images with imagemin.
import notify from 'gulp-notify'; // Sends message notification to you

 //- START EDITING!
/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>.
 * Do NOT change the variable names, just the values.
 */
const imagesSRC         = './assets/img/raw/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'; // Source folder of images which should be optimized.
const imagesDestination = './assets/img/opt/'; // Destination folder of optimized images. Must be different from the imagesSRC folder.
//- STOP EDITING!

/**
 * Task: `imgopt`.
 *
 * Minifies PNG, JPEG, GIF and SVG images.
 *
 * This task does the following:
 *     1. Gets the source of images raw folder
 *     2. Minifies PNG, JPEG, GIF and SVG images
 *     3. Generates and saves the optimized images
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp imgopt`.
 */
export async function imgopt() {
	gulp.src( imagesSRC )
		.pipe( imagemin({
			progressive: true,
			optimizationLevel: 3, // 0-7 low-high
			interlaced: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe( gulp.dest( imagesDestination ) )
		.pipe( notify( { message: 'DONE: Images Optimized! 💯', onLast: true } ) );
} ;

// const build = gulp.series(clean, gulp.parallel(styles, scripts));
const build = gulp.series(imgopt);

export default build;