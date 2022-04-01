import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../index.css";

export const Calc = () => {
  const [data, setData] = useState({
    kWh: null,
    pricekWh: null,
    totalEnergy: null,
    ley: null,
    enel: null,
    igv: null,
    totalMonth: null,
    totalPay: null,
    nroDepas: null,
  });
  const { show, dispatch } = useContext(AppContext);

  const saveData = () => {
    localStorage.setItem("dataform", JSON.stringify(data));
    dispatch({ type: "SAVEFORM", payload: { dataform: data, show: false } });
  };
  function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("dataform"));
    console.log(localData, "localData");
    if (localData) {
      dispatch({
        type: "SAVEFORM",
        payload: { dataform: localData, show: false },
      });
      setData(localData);
    }
  }, []);
  return (
    <div>
      {show && (
        <form onSubmit={saveData}>
          <h1 className="text-center text-black">RECIBO TOTAL</h1>

          <div className="row text-center w-100 justify-content-center">
            <div className="col-auto">
              <label htmlFor="kilowats" className=" text-black py-2">
                Consumo kWh:
              </label>
              <input
                type="number"
                className="form-control"
                id="kilowats"
                value={data.kWh}
                onChange={(e) =>
                  setData({ ...data, kWh: parseFloat(e.target.value) })
                }
              />
            </div>
            <div className="col-auto">
              <label htmlFor="price" className=" text-black py-2">
                {" "}
                {data.kWh ? data.kWh : "..."} kWh al precio de
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={data.pricekWh}
                onChange={(e) =>
                  setData({ ...data, pricekWh: parseFloat(e.target.value) })
                }
              />
            </div>
            <div className="col-auto">
              <label htmlFor="totalEnergy" className=" text-black py-2">
                Cargo por Energía
              </label>
              <input
                type="number"
                className="form-control"
                disabled
                id="totalEnergy"
                value={
                  (data.totalEnergy = round(
                    parseFloat(data.pricekWh) * parseFloat(data.kWh)
                  ))
                }
              />
            </div>
          </div>
          <div className="row text-center w-100 justify-content-center">
            <div className="col-auto">
              <label htmlFor="enel" className=" text-black py-2">
                Gastos Enel
              </label>
              <input
                type="number"
                className="form-control"
                id="enel"
                value={data.enel}
                onChange={(e) =>
                  setData({ ...data, enel: parseFloat(e.target.value) })
                }
              />
            </div>
            <div className="col-auto">
              <label htmlFor="igv" className=" text-black py-2">
                IGV
              </label>
              <input
                type="number"
                className="form-control"
                disabled
                id="igv"
                value={
                  (data.igv = round(
                    (parseFloat(data.totalEnergy) + parseFloat(data.enel)) *
                      0.18
                  ))
                }
              />
            </div>
            <div className="col-auto">
              <label htmlFor="ley" className=" text-black py-2">
                Total Mes Actual
              </label>
              <input
                type="number"
                className="form-control"
                disabled
                id="ley"
                value={
                  (data.totalMonth = round(
                    parseFloat(data.igv) +
                      parseFloat(data.totalEnergy) +
                      parseFloat(data.enel)
                  ))
                }
              />
            </div>
            <div className="row justify-content-center align-items-end">
              <div className="col-auto">
                <label htmlFor="totalPay" className=" text-black py-2">
                  Aporte Ley N 28749:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="totalPay"
                  value={data.ley}
                  onChange={(e) => {
                    setData({ ...data, ley: parseFloat(e.target.value) });
                  }}
                />
              </div>
              <div className="col-auto">
                <label htmlFor="totalPay" className=" text-black py-2">
                  Total a Pagar:
                </label>
                <input
                  type="number"
                  className="form-control"
                  disabled
                  id="totalPay"
                  value={
                    (data.totalPay =
                      parseFloat(data.totalMonth) + parseFloat(data.ley))
                  }
                />
              </div>
              <div className="col-auto">
                <label htmlFor="nroDepas" className=" text-black py-2">
                  Nro de Departamentos:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="nroDepas"
                  value={data.nroDepas}
                  onChange={(e) => {
                    setData({ ...data, nroDepas: parseInt(e.target.value) });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto text-center py-3">
              <button type="submit" className="btn btn-primary ">
                Guardar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};