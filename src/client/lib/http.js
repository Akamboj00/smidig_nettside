export class HttpExeption extends Error {
  constructor(result, url) {
    super(`Error while loading ${url}: ${result.status} ${result.statusText}`);
    this.status = result.status;
  }
}
function checkResult(result, url) {
  if (!result.ok) {
    throw new HttpExeption(result, url);
  }
}
export async function fetchJson(url) {
  const result = await fetch(url);
  checkResult(result, url);
  return await result.json();
}
export async function postJson(url, json) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  });
  checkResult(res, url);
}
