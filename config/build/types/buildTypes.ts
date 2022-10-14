export type BuildMode = "production" | "development";

export interface BuildPath {
	html: string;
	entry: string;
	build: string;
	src: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export interface BuildOptions {
	mode: BuildMode;
	path: BuildPath;
	isDev: boolean;
	port: number;
}