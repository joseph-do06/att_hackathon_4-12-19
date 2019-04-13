import Axios from "axios";
import * as helpers from "./serviceHelper";

const BaseURL =
  "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";
const analyzerPost = payload => {
  const config = {
    method: "POST",
    url: BaseURL,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const analyzerGetAll = () => {
  const config = {
    method: "GET",
    url: BaseURL,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const analyzerGetById = id => {
  const config = {
    method: "GET",
    url: BaseURL + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const analyzerUpdate = payload => {
  const config = {
    method: "PUT",
    url: BaseURL + "/" + payload.id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const analyzerDelete = id => {
  const config = {
    method: "DELETE",
    url: BaseURL + "/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return Axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export {
  analyzerPost,
  analyzerGetAll,
  analyzerGetById,
  analyzerUpdate,
  analyzerDelete
};
