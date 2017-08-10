var baseignore = ['/node_modules/**', '/output/**', '/fis-conf.js', '/pkg/**'];
var ignore = baseignore.concat([]);
//var upignore = baseignore.concat('/src/common/config/**');

// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['/routes/**', '/bin/**', '/config/**','/modules/**','/views/**', '/pm2.json', '/app.js', '/static/**']);
fis.set('project.ignore', ignore);
//自动去除console.log等调试信息
fis.config.set('settings.optimizer.uglify-js', {
    compress : {
        drop_console: true
    }
});

//fis.media('update').set('project.ignore', upignore);

fis.match('*', {
	deploy: fis.plugin('local-deliver', {
		to: 'output'
	})
});  

// 静态通用压缩
fis.match('/static/**.js', {
	optimizer: fis.plugin('uglify-js'),
	useHash: true
}).match('/static/**.css', {
	optimizer: fis.plugin('clean-css'),
	useHash: true
}).match('/static/**.png', {
	optimizer: fis.plugin('png-compressor'),
	useHash: true
}).match('*.html:js', {
	optimizer: fis.plugin('uglify-js')
}).match('*.html:css', {
	optimizer: fis.plugin('clean-css')
});

// 项目处理
fis.match('/static/javascripts/vendor/chart/**', {
	useHash: false
}).match('/{view}/**', {
	useMap: false
});


