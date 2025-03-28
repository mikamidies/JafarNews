export default {
  async getAudios(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/audios", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getAudio(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/audios/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
