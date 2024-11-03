module.exports = function override(config, env) {
    const CoffeeScriptLoader = {
      test: /\.coffee$/,
      loader: 'coffee-loader',
    };
  
    config.module.rules.push(CoffeeScriptLoader);
    return config;
  };