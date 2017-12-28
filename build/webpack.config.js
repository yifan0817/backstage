var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
	// 页面中的入口文件，可以是字符串路径'./src/main.js'，也可以是数组['./a.js','./b.js']，还可以是对象{main: './a.js',home: './b.js'}；
	entry:['./build/dev-client',path.resolve(__dirname,'../app/index/index.js')],
	// 页面通过webpack打包后生成的目标文件放在什么地方去，我这边是在根目录下生成output/static文件夹;
	output:{
		path:path.resolve(__dirname,'../output/static'),// 通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
		publicPath:'static/',
		filename:'[name].[hash].js',// 编译生成的js文件
		chunkFilename:'[name].[chunkhash].js'
	},
	resolve:{// 定义了解析模块路径时的配置，常用的就是extensions;可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，全自动实例；
		extensions:['.css','.js','.vue'],
		alias:{
			'Vue':'vue/dist/vue.js'
		}
	},
	// module.loaders:比如jsx-loader加载器就是代表JSXTransformer.js的，还有style-loader和css-loader加载器；因此在使用之前我们需要通过命令把它引入到项目上来
	module:{
		loaders:[
			{
				test: /\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:'/node_modules/',
				query: {
			        presets: ['es2015']
			    }
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(eot|woff|ttf)$/,
				loader: 'file-loader'
			}
		]
	},
	// 定义了需要使用的插件
	plugins:[
		new HtmlWebpackPlugin({
			filename:'../index.html',
			template:path.resolve(__dirname,'../app/index/index.html'),
			inject:true,
			options:{
				Menulist:{
					loaders:{
						js:'babel'
					}
				},
			}
		})
	]
}