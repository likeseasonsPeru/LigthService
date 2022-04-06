import React, { useState, useEffect } from "react";
import { formatter } from "../hooks/useFormat";
import { round } from "../hooks/useRound";

export const CardApartment = ({ i, depa }) => {
  const [kw, setKw] = useState();
  const [areaComun, setAreaComun] = useState();
  const allKW = Object.values(depa.depas).reduce((a, b) => a + b);
  const soles = kw * depa.pricekWh;
  const enel = i + 1 > 4 ? depa.enel / 5 / 3 : depa.enel / 5;
  const ley = i + 1 > 4 ? depa.ley / 5 / 3 : depa.ley / 5;
  const semiTotal = soles + areaComun + enel;
  const igv = semiTotal * 0.18;
  const total = semiTotal + igv + ley;

  useEffect(() => {
    if (depa.depas && allKW) {
      setKw(depa.depas[i + 1 > 4 ? `50${i - 3}` : `${i + 1}01`]);
      const resultKW = (depa.kWh - allKW) * depa.pricekWh;
      setAreaComun(i + 1 > 4 ? resultKW / 5 / 3 : resultKW / 5);
    }
  }, []);
  return (
    <div key={i} className="col-auto">
      <div className="card my-3 p-3">
        <h5 className="card-title text-black fw-bolder">
          Departamento: {i + 1 > 4 ? `50${i - 3}` : `${i + 1}01`}
        </h5>
        <div className="row justify-content-center">
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              KW x Depa
            </label>
            <input type="number" className="form-control" id="KW" value={kw} />
          </div>
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              Soles x Depa
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={round(soles)}
              disabled
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              Area Comun Dividida
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={round(areaComun)}
              disabled
            />
          </div>
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              Gastos Enel
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={round(enel)}
              disabled
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              IGV
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={round(igv)}
              disabled
            />
          </div>
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              Gastos por Ley
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={round(ley)}
              disabled
            />
          </div>
        </div>
        <div className="row justify-content-center py-3 align-items-end">
          <div className="col-lg-6 col-sm-12">
            <h5 className="text-black text-center fw-bolder mb-0">
              Total: {formatter(round(total))}
            </h5>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <button className="btn btn-success">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
