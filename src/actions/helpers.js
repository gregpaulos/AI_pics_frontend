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
    const results = json.results;
        return results;
  }
  

