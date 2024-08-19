const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this to your actual entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib") // Use this if you need the zlib functionality in the browser
      // "zlib": false // Use this if you don't need the zlib functionality in the browser
    }
  },
  // ... other configurations like module rules, plugins, etc.
};
