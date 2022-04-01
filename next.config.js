module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    console.log(options.webpack.version); // 5.18.0
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};
