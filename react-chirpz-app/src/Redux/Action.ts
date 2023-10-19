import axios from "../Services/instance";
import {
  Get_Data_Request,
  Get_Data_Success,
  Item,
  Post_Data_Success,
} from "./ActionTypes";
import {store} from "../Redux/Store"

const loadingRequest = () => {
  return {
    type: Get_Data_Request,
  };
};

export const chirpzSuccessRequest = (payload: Item[]) => {
  return {
    type: Get_Data_Success,
    payload,
  };
};

export const postChirpzRequest = (payload: Item) => {
  return {
    type: Post_Data_Success,
    payload,
  };
};

const getChirpzData = () =>  { 
  store.dispatch(loadingRequest());
  axios
    .get("posts?_sort=createdAt&_order=desc")
    .then((response) => store.dispatch(chirpzSuccessRequest(response.data.body)))
    .catch((error) => console.log(error));
};

const postChirpzData = (queryParams: Item) => { 
  axios
    .post("posts", queryParams)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export { getChirpzData, postChirpzData };
