export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode 模式属性
  // 'spa'：无服务器端呈现（仅客户端导航）
  // 'universal'：同构应用程序（服务器端渲染 + 客户端导航）
  mode: 'Universal',
  // 此选项允许您定义在构建时（而不是运行时）所需的环境变量
  env: {
    authURL: process.env.NODE_ENV === 'dev' ? '//localhost:7000' : '//login.baldbear.cn'
  },
  // 此选项允许您为应用程序定义所有默认元标记。
  head: {
    title: 'nebula',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'image/png', href: '/favicon.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: '404'
  },
  loading: false,
  css: ['element-ui/lib/theme-chalk/display.css', 'mavon-editor/dist/css/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt', 'nuxt-precompress'],

  proxy: {
    '/api': {
      target: 'http://localhost:3008',
      pathRewrite: { '^/api': '' }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    extend(config, ctx) {
      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif|svg)/i,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 1000,
      //     name: 'img/[name].[hash].[ext]',
      //     esModule: false
      //   }
      // })
      config.devtool = false
    }
  }
}
