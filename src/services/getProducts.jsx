import config from "../config";

export default async function getProducts() {
  try {
    console.log(process.env);
    const results = await fetch(`${config.apiUrl}/products`);

    const resultsJson = await results.json();

    return resultsJson;
  } catch (error) {
    return error;
  }
}
