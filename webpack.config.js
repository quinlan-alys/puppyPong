module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { 
            test: /\.css$/,
            loader: "style!css" 
            },
			{
 			test: /\.(eot|svg|ttf|woff|woff2)$/,
 			loader: 'file?name=public/fonts/[name].[ext]'
			},
              {
             test: /\.scss$/,
            loaders: ["style", "css", "sass"]
            },
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a valid name to reference
            query: {
            presets: ['es2015'] }
     }],
    } ,   
    devServer: {
   inline: true,
   host: '0.0.0.0',
   port: '3000',
   watchOptions: {
      aggregateTimeout: 300,
      poll: true
   }
}, 
};