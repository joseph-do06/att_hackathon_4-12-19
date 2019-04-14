import axios from "axios";

class PersonalityInsightsService {
  static InsightsPost(data, onSuccess, onError) {
    const url =
      "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13";
    const config = {
      method: "POST",
      data: data,
      headers: {
        "Content-Type": "text/plain;charset=UTF-8 ",
        "Accept": "application/json"
      },
      auth: {
        username: "apikey",
        password: "XT2uW-VFHweqxjxZ05Wz5PBNGukv7Dg4nPoPBtjWlA1L"
      }
      // crossdomain: true
    };
    axios.defaults.withCredentials = false;
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }

  static sendMessageToDB(data, onSuccess, onError) {
    const url = "https://localhost:44373/api/atthackathon/";
    const config = {
      method: "POST",
      data: data,
      headers: { "Content-Type": "application/json" }
    };
    axios.defaults.withCredentials = true;
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }

  static getAllMessages(username, onSuccess, onError) {
    const url = "https://localhost:44373/api/atthackathon/" + username;
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    axios.defaults.withCredentials = true;
    axios(url, config)
      .then(onSuccess)
      .catch(onError);
  }
}

export default PersonalityInsightsService;
