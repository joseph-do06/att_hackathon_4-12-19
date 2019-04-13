import Axios from "axios";

const BaseURL =
  "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";
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

const analyzerGetAll = (onSuccess, onError) => {
  const config = {
    method: "GET",
    url: BaseURL,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(onSuccess)
    .catch(onError);
};

const analyzerGetById = (id, onSuccess, onError) => {
  const config = {
    method: "GET",
    url: BaseURL + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(onSuccess)
    .catch(onError);
};

const analyzerUpdate = (payload, onSuccess, onError) => {
  const config = {
    method: "PUT",
    url: BaseURL + "/" + payload.id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(onSuccess)
    .catch(onError);
};

const analyzerDelete = (id, onSuccess, onError) => {
  const config = {
    method: "DELETE",
    url: BaseURL + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(onSuccess)
    .catch(onError);
};

export {
  analyzerPost,
  analyzerGetAll,
  analyzerGetById,
  analyzerUpdate,
  analyzerDelete
};
