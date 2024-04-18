export default {
  async getNews(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/news", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getPost(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/news/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
