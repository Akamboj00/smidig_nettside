export class HttpExeption extends Error {
  constructor(result, url) {
    super(`Errow while loading ${url}: ${result.status} ${result.statusText}`);
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
