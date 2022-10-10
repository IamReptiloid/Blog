import  webpack  from 'webpack';
import { BuildOptions } from './types/buildTypes';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.path.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}