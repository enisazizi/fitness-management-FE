import { atom } from "recoil";

const Company = atom({
  key: "company",
  default: { auth: false, data: null },
});
const Clients = atom({
  key: "clients",
  default: { valid: false, data: null },
});
const Products = atom({
  key: "products",
  default: { valid: false, data: null },
});
const Payments = atom({
  key: "payments",
  default: { valid: false, data: null },
});
const Activities = atom({
  key: "activities",
  default: { valid: false, data: null },
});

const SingleClient = atom({
  key: "singleClient",
  default: { valid: false, data: null },
});
const SingleProduct = atom({
  key: "singleProduct",
  default: { valid: false, data: null },
});
const SinglePayment = atom({
  key: "singlepayment",
  default: { valid: false, data: null },
});
const SingleActivity = atom({
  key: "singleActivity",
  default: { valid: false, data: null },
});

const Cart = atom({
  key: "cart",
  default: null,
});

export default Object.freeze({
  Company,
  Clients,
  SingleClient,
  Products,
  SingleProduct,
  Payments,
  SinglePayment,
  Activities,
  SingleActivity,
});
