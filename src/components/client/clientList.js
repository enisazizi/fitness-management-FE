import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import data from "../../data";
import { Pagination } from "../../Layout/Pagination";
import Modal from "./clientModal";
import ClientCard from "./clientCard";

const ClientsList = ({ pagination }) => {
  const [clients, setClients] = useRecoilState(data.atoms.Clients);
  const [pageNumber, setPageNumber] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(clients);
  }, [clients, setClients]);

  const getData = async () => {
    const response = await data.api.client.getAllClients();
    setClients({ valid: true, data: response });
  };

  useEffect(() => {
    getData();
  }, [pageNumber, setPageNumber]);

  return (
    <div className="container">
      <div className="row row-cols-3 mt-5">
        {clients.valid
          ? clients.data.map((e) => {
              return (
                <div className="col mb-5">
                  <ClientCard client={e} setShow={setShow} show={show} />
                </div>
              );
            })
          : "loading"}
      </div>
    </div>
  );
};

export default ClientsList;
