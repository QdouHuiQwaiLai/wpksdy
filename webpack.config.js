const path = require('path')

module.exports = (env, argv) => {
  // console.log(env)
return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js'
    },
    resolve: {
      extensions: ['.js', '.json', '.css'],
      alias: {
        'lib': path.resolve(__dirname, 'src/lib')
      },
    }
 };
}
