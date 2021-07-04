{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/youngbinkim/Workspace/intellij/kotlinjssample/build/js/packages/kotlinjssample/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/youngbinkim/Workspace/intellij/kotlinjssample/build/js/packages/kotlinjssample/kotlin-dce-dev/kotlinjssample.js'
    ]
  },
  output: {
    path: '/Users/youngbinkim/Workspace/intellij/kotlinjssample/build/distributions',
    filename: [Function: filename],
    library: 'kotlinjssample',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/youngbinkim/Workspace/intellij/kotlinjssample/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}