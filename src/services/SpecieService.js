import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/JhinAhri12/ShepardApi/species",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
    getSpecies() {
      return apiClient
        .get()
        .then(sleeper(1000));
    },
  };

  function sleeper(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }