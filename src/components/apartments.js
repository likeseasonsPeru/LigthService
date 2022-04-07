import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CardApartment } from "./cardApartment";

export const Apartments = () => {
  const { dataform } = useContext(AppContext);
  return (
    <>
      <h1 className="text-center text-black py-3 border-bottom">
        Departamentos
      </h1>
      <div className="row justify-content-center">
        {dataform.nroDepas &&
          [...Array(dataform.nroDepas)].map((_, i) => (
            <CardApartment key={i} i={i} depa={dataform} />
          ))}
      </div>
    </>
  );
};
