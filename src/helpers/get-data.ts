import { Endpoint } from "../types/endpoints.types.ts";

export async function getData(path: Endpoint) {
  const envVars = import.meta.env;
  const server =
    envVars.VITE_ENVIRONMENT === "production"
      ? envVars.VITE_PRODUCTION_SERVER
      : envVars.VITE_DEV_SERVER;

  const url = `${server}${path}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
}
