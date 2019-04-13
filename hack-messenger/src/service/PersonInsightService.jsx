import Axios from "axios";
import * as helpers from "./serviceHelper";

const BaseURL =
  "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13";
const insightPost = payload => {
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

const insightGetAll = () => {
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

const insightGetById = id => {
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

const insightUpdate = payload => {
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

const insightDelete = id => {
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
  insightPost,
  insightGetAll,
  insightGetById,
  insightUpdate,
  insightDelete
};
