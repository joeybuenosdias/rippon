import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const forkTsCheckerPlugin = new ForkTsCheckerWebpackPlugin({
    async: false,
    eslint: {
        files: "./src/**/*"
    }
})

const config: Configuration = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        forkTsCheckerPlugin,
    ]
}

export default config;