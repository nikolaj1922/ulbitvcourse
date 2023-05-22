import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (
  options: BuildOptions
): webpack.ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
  };
};
