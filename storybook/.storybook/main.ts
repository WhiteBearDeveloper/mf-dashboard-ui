import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "node:path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.module\.s[ac]ss$/i,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    namedExport: false,
                    localIdentName: "[name]__[local]--[hash:base64:5]",
                  },
                },
              },
              "sass-loader",
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            exclude: /\.module\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
    },
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async webpackConfig => {
    if (webpackConfig.resolve) {
      webpackConfig.resolve.plugins = [
        ...(webpackConfig.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(process.cwd(), "tsconfig.json"),
          extensions: webpackConfig.resolve.extensions,
        }),
      ];
    }

    return webpackConfig;
  },
};

export default config;
