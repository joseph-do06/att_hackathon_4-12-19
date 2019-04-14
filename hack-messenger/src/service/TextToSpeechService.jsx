import axios from "axios";

class TextToSpeechService {
  static textSpeechPost(data, onSuccess, onError) {
    const url =
      "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize";
    const config = {
      method: "POST",
      data: `{"text": "${data}"}`,
      headers: {
        "Content-Type": "application/json"
      },
      auth: {
        username: "apikey",
        password: "uZ8bYmkorWvrL8J4aEIWRm8zPYAXwDCAcRyIYzZKwhSN"
      }
    };
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }
}

export default TextToSpeechService;
