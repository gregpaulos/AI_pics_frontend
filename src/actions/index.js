// var startURL = "https://glacial-chamber-31453.herokuapp.com";
var startURL = "http://localhost:5000";

export const GET_ALL = "GET_ALL";
export function getAll() {
  return async dispatch => {
    const response = await fetch(startURL + "/v1/photos/");
    const json = await response.json();
    const results = json.results;
    dispatch({
      type: GET_ALL,
      payload: results
    });
  };
}

export const GET_PHOTO = "GET_PHOTO";
export function getPhoto() {
  return async dispatch => {
    const response = await fetch(startURL + "/v1/photos/random");
    const json = await response.json();
    dispatch({
      type: GET_PHOTO,
      payload: json
    });
  };
}

export const SHOW_USER_PHOTO = "SHOW_USER_PHOTO";
export const showUserPhoto = localURL => ({
  type: SHOW_USER_PHOTO,
  payload: localURL
});

export const ADD_FILE = "ADD_FILE";
export const addFile = file => ({ type: ADD_FILE, payload: file });

export const CLEAR_UPLOAD = "CLEAR_UPLOAD";
export const clearUpload = () => ({ type: CLEAR_UPLOAD });

export const CLEAR_AWS = "CLEAR_AWS";
export const clearAWS = () => ({ type: CLEAR_AWS });

export const CLEAR_AI = "CLEAR_AI";
export const clearAI = () => ({ type: CLEAR_AI });

export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export function uploadPhoto(file) {
  return async dispatch => {
    let url1 = startURL + "/v1/photos/clientupload";

    let fileType = file.type;

    var bodyToPost = {
      fileType: fileType
    };
    let JSONbodyToPost = JSON.stringify(bodyToPost);

    const AWSurl = await fetch(url1, {
      method: "post",
      body: JSONbodyToPost,
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const options = {
          method: "PUT",
          body: file
        };
        return fetch(data.signedRequest, options).then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          }
          return data.url;
        });
      })
      .then(url => {
        console.log("ITS DONE WITH ", url);
        return url;
      })
      .catch(error => {
        console.log(error);
        return error;
      });

    dispatch({
      type: UPLOAD_PHOTO,
      payload: AWSurl
    });
  };
}

export const GET_AI = "GET_AI";
export function getAI(photo_url, api) {
  var bodyToPost = {
    photo: photo_url
  };
  let JSONbodyToPost = JSON.stringify(bodyToPost);
  let url = startURL + "/v1/ai/" + api;

  return async dispatch => {
    const response = await fetch(url, {
      method: "post",
      body: JSONbodyToPost,
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json();
    dispatch({
      type: GET_AI,
      api: api,
      payload: json
    });
  };
}

// TRYING TO DO SEQUENTIAL ACTIONS

export const UPLOAD_SEND = "UPLOAD_SEND";
export function uploadANDsend(file) {
  return async dispatch => {
    const AWS = await uploadPhoto2(file);
    console.log("GOT HERE", AWS);

    dispatch({
      type: UPLOAD_PHOTO,
      payload: AWS
    });

    let apis = ["watson", "google", "clarifai"];
    apis.forEach(api => {
      getAI2(AWS, api).then(json => {
        dispatch({
          type: GET_AI,
          api: api,
          payload: json
        });
      });
    });
  };
}

async function getAI2(photo_url, api) {
  console.log("Inside GETAI2", photo_url, api);
  var bodyToPost = {
    photo: photo_url
  };
  let JSONbodyToPost = JSON.stringify(bodyToPost);
  let url = startURL + "/v1/ai/" + api;

  const response = await fetch(url, {
    method: "post",
    body: JSONbodyToPost,
    headers: { "Content-Type": "application/json" }
  });
  const json = await response.json();
  return json;
}

async function uploadPhoto2(file) {
  console.log("step 1");
  let url1 = startURL + "/v1/photos/clientupload";

  let fileType = file.type;

  var bodyToPost = {
    fileType: fileType
  };
  let JSONbodyToPost = JSON.stringify(bodyToPost);

  const AWSurl = await fetch(url1, {
    method: "post",
    body: JSONbodyToPost,
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const options = {
        method: "PUT",
        body: file
      };
      return fetch(data.signedRequest, options).then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return data.url;
      });
    })
    .then(url => {
      console.log("ITS DONE WITH ", url);
      return url;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return AWSurl;
}
