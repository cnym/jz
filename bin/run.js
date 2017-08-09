/**
 * Created by Administrator on 2017/1/2.
 */
var current_path = process.cwd();

console.log(current_path + '/bin/www' );

require('runkoa')(current_path + '/bin/www.js' )