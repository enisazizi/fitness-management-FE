import atoms from "./atoms";
import company from "./company";
import client from "./clients";
import product from "./products";
import payment from "./payments";
import cart from "./cart";
import activity from "./activities";
import auth from "./auth";

export default Object.freeze({
  api: { company, client, product, payment, activity, cart, auth },
  atoms,
});
