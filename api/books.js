export default {
  async getBooks(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/video_lessons", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getBook(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/video_lessons/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
