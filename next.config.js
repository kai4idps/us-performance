const { i18n } = require("./next-i18next.config");

module.exports = {
	devtool: "source-map",
	i18n,
  webpack5: true,
  images: {
        disableStaticImages: true
  },
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
    });
     config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|webp)$/i,
      use: [
        // this will create image copy, that we will use,
        // output path - '/.next/static/longhash.png'
        // url - '/_next/static/longhash.png'
        {
          loader: 'url-loader',
          options: {
            outputPath: 'static/image',
            // publicPath: 'static/image',
            limit: 10000
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            }
          }
        }
      ]
    })
		// config.module.rules.push({
    //   test: /\.(webp)$/i,
    //     use: [
    //       {
    //         loader: 'url-loader',
    //         options: {
    //           limit: 8192,
    //           name: 'img/[name].[ext]',
    //         },
    //       },
    //       // 配置 image-webpack-loader (第一步)
    //       {
    //         loader: 'image-webpack-loader',
    //         // options: {
    //         //   // 只在 production 環境啟用壓縮 (第二步)
    //         //   disable: process.env.NODE_ENV === 'production' ? false : true,
    //         // },
    //       },
    //     ],
    // });

		return config;
	}
}
