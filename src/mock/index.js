import Mock from "mockjs";
import userArr from "./data/fetchUserData";
Mock.setup({
  timeout: 400
});
Mock.mock("https://api.apiopen.top/getTest", "post", userArr); //post请求
