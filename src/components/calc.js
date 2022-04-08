import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { round } from "../hooks/useRound";
import "../index.css";

export const Calc = () => {
  const [depas, setDepas] = useState({});
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
    show: false,
  });
  const { show, dispatch } = useContext(AppContext);

  const saveData = (e) => {
    e.preventDefault();
    for (const a in data) {
      if (data[a] === null || data[a] === isNaN) {
        return alert("complete the boxes pls!!");
      }
    }
    setData({ ...data, show: true });
  };
  const nextStep = (e) => {
    e.preventDefault();
    if (Object.values(depas).length !== data.nroDepas) {
      alert("Complete the boxes please!!");
      return;
    }
    localStorage.setItem("dataform", JSON.stringify({ ...data, depas }));
    dispatch({
      type: "SAVEFORM",
      payload: { dataform: { ...data, depas }, show: false },
    });
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("dataform"));
    console.log(localData, "localData");
    // if (localData) {
    //   const { depas } = localData;
    //   setDepas(depas);
    //   setData(localData);
    // }
  }, []);
  return (
    <div>
      {show &&
        (data.show ? (
          <div className="row justify-content-center">
            <h3 className="text-black text-center my-4">kWh x Departamentos</h3>

            {data.nroDepas &&
              [...Array(data.nroDepas)].map((_, i) => (
                <div className="col-auto" key={i}>
                  <div className="card py-1 px-2 m-1">
                    <label htmlFor="kilowats" className=" text-black py-2">
                      kWh DEL DPTO: {`${i + 1}01`}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="kilowats"
                      step="any"
                      min={0}
                      value={depas[`${i + 1}01`]}
                      onChange={(e) =>
                        setDepas({
                          ...depas,
                          [`${i + 1}01`]: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-danger btn-sm mx-auto mt-3"
                onClick={nextStep}
              >
                Guardar Info
              </button>
            </div>
          </div>
        ) : (
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
                  step="any"
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
                  step="any"
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
                  step="any"
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
                  step="any"
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
                  step="any"
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
                  step="any"
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
                    type="number"
                    className="form-control"
                    id="totalPay"
                    step="any"
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
                    step="any"
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
                  Siguiente
                </button>
              </div>
            </div>
          </form>
        ))}
    </div>
  );
};
