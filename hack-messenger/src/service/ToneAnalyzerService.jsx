import axios from "axios";

class ToneAnalyzerService {
  static Post(data, onSuccess, onError) {
    const url =
      "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21&sentences=false";
    const config = {
      method: "POST",
      data: data
    };
    axios.defaults.withCredentials = true;
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }
}

export default ToneAnalyzerService;
