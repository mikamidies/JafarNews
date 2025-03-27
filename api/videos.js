export default {
  async getVideos(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/videos", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getVideo(slug, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/videos/${slug}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
