import { atom } from "recoil";

const company = atom({
  key: "company",
  default: { auth: false, data: null },
});

const clients = atom({
  key:"clients",
  default:{},
})
const products = atom({
  key:"products",
  default:{},
})
const payments = atom({
  key:"payments",
  default:{},
})
const activity = atom({
  key:"activity",
  default:{},
})


export const atoms = { clients,company,products,activity};
