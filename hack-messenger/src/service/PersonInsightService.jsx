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

const insightGetAll = (onSuccess, onError) => {
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

const insightGetById = (id, onSuccess, onError) => {
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

const insightUpdate = (payload, onSuccess, onError) => {
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

const insightDelete = (id, onSuccess, onError) => {
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
  insightPost,
  insightGetAll,
  insightGetById,
  insightUpdate,
  insightDelete
};
