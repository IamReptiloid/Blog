import  webpack  from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/buildTypes";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	return [
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: "file-loader",
				},
			],
		},
		{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
		{
			test: /\.s[ac]ss$/i,
			use: [
				options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						modules: {
							auto: (path: String) => !!path.includes(".module."),
							localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64:8]",
						},
					},
				},
				"sass-loader",
			],
		},
		{
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		},
	];
}