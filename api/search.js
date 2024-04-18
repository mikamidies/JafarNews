export default {
  async getSearch(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/search", {
          ...params,
        });
        return res;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
