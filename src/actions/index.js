// var startURL = "https://glacial-chamber-31453.herokuapp.com";
var startURL = "http://localhost:5000"

export const GET_ALL = 'GET_ALL'
export function getAll() {
  return async (dispatch) => {
    const response = await fetch(startURL+'/v1/photos/')
    const json = await response.json()
    const results = json.results
    dispatch({
      type: GET_ALL,
      payload: results
    })
  }
}

export const GET_PHOTO = 'GET_PHOTO'
export function getPhoto() {
  return async (dispatch) => {
    const response = await fetch(startURL+'/v1/photos/random')
    const json = await response.json()
    dispatch({
      type: GET_PHOTO,
      payload: json
    })
  }
}


export const SHOW_USER_PHOTO = 'SHOW_USER_PHOTO'
export const showUserPhoto = file => ({ type: SHOW_USER_PHOTO, payload: file });


export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
export function uploadPhoto(curFile, fileType) {
  return async (dispatch) => {

    let thing = 0
   
    dispatch({
      type: UPLOAD_PHOTO,
      payload: thing
    })
  }
}

export const GET_AI = 'GET_AI'
export function getAI(photo_url, api) {
    var bodyToPost = {
        photo: photo_url
      };
      let JSONbodyToPost = JSON.stringify(bodyToPost);
      let url = startURL + "/v1/ai/" + api; 

  return async (dispatch) => {
    const response = await fetch(url, {
        method: "post",
        body: JSONbodyToPost,
        headers: { "Content-Type": "application/json" }
      })
    const json = await response.json()
    dispatch({
      type: GET_AI,
      api: api,
      payload: json
    })
  }
}
