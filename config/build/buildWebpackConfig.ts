import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolves';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
