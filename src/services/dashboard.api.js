import axios from "axios";

export const tasksListApi = {
  getAll: () => {
    return axios
      .get("https://fitec-teste-frontend.free.beeceptor.com/api/dashboard")
  },
};
