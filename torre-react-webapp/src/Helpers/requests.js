//const urlPath = process.env.URI;
const urlPath = "http://localhost:3001/api";
//const urlPath = "api";

const header = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const requestSome = async (
  options = {
    path: "/",
    method: "GET",
    body: undefined,
    headers: header,
    redirect: "follow",
  }
) => {
  const url = `${urlPath}${options.path}`;
  if (options.body) options.body = JSON.stringify(options.body);
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  return response;
};

export default requestSome;
