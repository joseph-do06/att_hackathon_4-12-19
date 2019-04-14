import Axios from "axios";

const BaseURL =
  "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13";
const insightPost = (payload, onSuccess, onError) => {
  const config = {
    method: "POST",
    url: BaseURL,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return Axios(config)
    .then(onSuccess)
    .catch(onError);
};

export { insightPost };
