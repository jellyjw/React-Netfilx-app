import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0b1a4677ca2ebb0fa60cfebc75c05f5d",
    language: "ko-KR",
  },
});

export default instance;
