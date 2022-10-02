import  webpack  from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/buildTypes";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.path.entry,
        output: {
            path: options.path.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options.path),
        devServer: options.isDev? buildDevServer(options) : undefined,
        devtool: options.isDev? "inline-source-map" : undefined,
    }
}