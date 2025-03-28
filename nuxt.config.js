export default {
  head: {
    title: "Ja'far News",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    "@/plugins/antd-ui",
    { src: "@/plugins/vue-aplayer.js", ssr: false },
  ],

  loading: {
    color: "#eebf57",
    height: "3px",
  },

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],

  axios: {
    baseURL: "http://127.0.0.1:8000/api",
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },

  i18n: {
    locales: ["En", "Ru", "Ar", "Uz"],
    defaultLocale: "En",
    vueI18n: {
      fallbackLocale: "En",
    },
  },
};
