import axios from "axios";

export default axios.create({
  baseURL: "https://my-practice-server.herokuapp.com/",
})