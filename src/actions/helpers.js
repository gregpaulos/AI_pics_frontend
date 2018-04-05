var startURL = "https://glacial-chamber-31453.herokuapp.com";
// var startURL = "http://localhost:5000";

export async function sendAIrequest(photo_url, api) {
  console.log("Inside sendAI", photo_url, api);
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

export async function sendRandomRequest() {
  const response = await fetch(startURL + "/v1/photos/random");
  const json = await response.json();
  return json;
}

export async function sendRequestForAll() {
  const response = await fetch(startURL + "/v1/photos/");
  const json = await response.json();
  const results = await json.results;
  return results;
}


export async function sendToAWS(file) {
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
