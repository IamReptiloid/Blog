import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPath, BuildMode, BuildEnv } from "./config/build/types/buildTypes";



export default (env: BuildEnv) => {
	const paths: BuildPath = {
		html: path.resolve(__dirname, "public", "index.html"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "dist"),
		src: path.resolve(__dirname, "src"),
	};
    
	const mode: BuildMode = env.mode || "development";
	const isDev = mode === "development";
	const PORT = env.port || 3000;
    
	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		path: paths,
		isDev,
		port: PORT,
	});

	return config;
};