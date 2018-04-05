import {
  sendAIrequest,
  sendRandomRequest,
  sendRequestForAll,
  sendToAWS
} from "./helpers";


export const ADD_FILE = "ADD_FILE";
export const addFile = file => ({ type: ADD_FILE, payload: file });

export const CLEAR_UPLOAD = "CLEAR_UPLOAD";
export const clearUpload = () => ({ type: CLEAR_UPLOAD });

export const CLEAR_AWS = "CLEAR_AWS";
export const clearAWS = () => ({ type: CLEAR_AWS });

export const CLEAR_AI = "CLEAR_AI";
export const clearAI = () => ({ type: CLEAR_AI });


export const GET_PHOTO = "GET_PHOTO";
export function getPhoto() {
  return async dispatch => {
    const json = await sendRandomRequest();
    dispatch({
      type: GET_PHOTO,
      payload: json
    });
  };
}


export const GET_AI = "GET_AI";
export function getAI(photo_url, api) {
  console.log("got to get AI");

  return async dispatch => {
    console.log("got to the inner funct");

    const json = await sendAIrequest(photo_url, api);
    dispatch({
      type: GET_AI,
      api: api,
      payload: json
    });
  };
}

export const SHOW_USER_PHOTO = "SHOW_USER_PHOTO";
export const showUserPhoto = localURL => ({
  type: SHOW_USER_PHOTO,
  payload: localURL
});

export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export function uploadPhoto(file) {
  return async dispatch => {
    const AWSurl = await sendToAWS();
    dispatch({
      type: UPLOAD_PHOTO,
      payload: AWSurl
    });
  };
}


// export const UPLOAD_SEND = "UPLOAD_SEND";
export function uploadANDsend(file) {
  return async dispatch => {
    const AWSurl = await sendToAWS(file);

    dispatch({
      type: UPLOAD_PHOTO,
      payload: AWSurl
    });

    let apis = ["watson", "google", "clarifai"];
    apis.forEach(api => {
      console.log("inside for each");
      sendAIrequest(AWSurl, api).then(json => {
        dispatch({
          type: GET_AI,
          api: api,
          payload: json
        });
      });
    });
  };
}


export const GET_ALL = "GET_ALL";
export function getAll() {
  return async dispatch => {
    const results = await sendRequestForAll();
    dispatch({
      type: GET_ALL,
      payload: results
    });
  };
}