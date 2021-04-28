import { configureRequest, makeRequest } from "./global";

const company = async ({ email, password }) =>
  await makeRequest(
    configureRequest("auth/login", { email, password }, "POST")
  );
const client = async ({ email, password }) =>
  await makeRequest(
    configureRequest("auth/clientLogin", { email, password }, "POST")
  );

export default Object.freeze({ client, company });
