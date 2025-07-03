// Api config
import api from "../index.js";

// Endpoints
import endpoints from "../endpoints.js";

const testsService = {
  getTests: async (link) => {
    return await api.get(endpoints.getTests(link));
  },
};

export default testsService;
