var startURL = "https://glacial-chamber-31453.herokuapp.com";

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
