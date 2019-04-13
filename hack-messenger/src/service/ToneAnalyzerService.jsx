import Axios from "axios";

const BaseURL =
  "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21&sentences=false";
const analyzerPost = (payload, onSuccess, onError) => {
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

export { analyzerPost };
