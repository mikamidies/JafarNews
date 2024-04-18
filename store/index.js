export const state = () => ({
  translations: {},
  lang: "",
});

export const mutations = {
  langRu(state, payload) {
    state.lang = payload;
  },

  getTranslations(state, payload) {
    state.translations = payload;
  },
};

export const getters = {
  language(state) {
    return state.lang;
  },
};
