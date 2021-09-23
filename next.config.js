const { i18n } = require("./next-i18next.config");

module.exports = {
	devtool: "source-map",
	i18n,
	webpack: (config, options) => {
		 config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          limit: 10000000,
          name: "[name].[ext]",
          outputPath: "static/video"
        }
      }
    })

		return config;
	}
}
