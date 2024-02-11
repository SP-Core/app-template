const path = require('path')

module.exports = {
    entry: './app/index.ts',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [/node_modules/],
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        library: {
            // note there's no `name` here
            type: 'commonjs2',
          },
      },
}
