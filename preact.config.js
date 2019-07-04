
import asyncPlugin from 'preact-cli-plugin-fast-async';

export default (config, env, helpers) => {
  delete config.entry.polyfills;

  asyncPlugin(config)

  config.output.filename = "[name].js";

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
