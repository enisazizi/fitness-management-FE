import { atom } from "recoil";

const client = atom({
  key: "client",
  default: { auth: false, data: null },
});



export const atoms = { client };
