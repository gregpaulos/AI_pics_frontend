var startURL = "https://glacial-chamber-31453.herokuapp.com";

const sendToAI = (photo_url, api) => {
    console.log("werd up, getting ", api);
    var bodyToPost = {
      photo: photo_url
    };
    let JSONbodyToPost = JSON.stringify(bodyToPost);
    let url = this.startURL + "/v1/ai/" + api;
    return fetch(url, {
      method: "post",
      body: JSONbodyToPost,
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        let api_data = data;
        return api_data
      });
  };

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
export function getAI(photo_url) {
        console.log('got to ai response');
        
    //     let apis = ["watson", "google", "clarifai"];
    //     apis.forEach(api => {
    //       sendToAI(photo_url, api);
    //     });
    //   };  

    var bodyToPost = {
        photo: photo_url
      };
      let JSONbodyToPost = JSON.stringify(bodyToPost);
      let url = this.startURL + "/v1/ai/" + "google"; 

  return async (dispatch) => {
    const response = await fetch(url, {
        method: "post",
        body: JSONbodyToPost,
        headers: { "Content-Type": "application/json" }
      })
    const json = await response.json()
    dispatch({
      type: GET_AI,
      payload: json
    })
  }
}
