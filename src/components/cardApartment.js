import React from "react";
import "../index.css";
import { formatter } from "../hooks/useFormat";
import { round } from "../hooks/useRound";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { time } from "../hooks/useTime";

export const CardApartment = ({ i, depa }) => {
  const allKW = Object.values(depa.depas).reduce((a, b) => a + b);
  const kw = depa.depas[`${i + 1}01`];
  const resultKW = (depa.kWh - allKW) * depa.pricekWh;
  const areaComun = resultKW / depa.nroDepas;
  const soles = kw * depa.pricekWh;
  const enel = depa.enel / depa.nroDepas;
  const ley = depa.ley / depa.nroDepas;
  const semiTotal = soles + areaComun + enel;
  const igv = semiTotal * 0.18;
  const total = semiTotal + igv + ley;
  const depart = `${i + 1}01`;
  console.log(time);
  function downloadImg() {
    const img = document.getElementById(depart);
    htmlToImage
      .toPng(img)
      .then(function (dataUrl) {
        download(dataUrl, `Depa${depart}.png`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <div key={i} className="col-auto" id={depart}>
      <div className="card card-custom my-3 p-3">
        <div className="row justify-content-between">
          <div className="col-auto">
            <h5 className="card-title text-black fw-bolder">
              Departamento: {depart}
            </h5>
          </div>
          <div className="col-auto">
            <h5 className="text-black">{time()}</h5>
          </div>
        </div>
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
              Area Com??n Dividida
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
        <div className="row justify-content-center align-items-center mt-3">
          <div className="col-md-6 col-sm-12 align-self-center">
            <h5 className="text-black text-center fw-bolder mb-0">
              Total: {formatter(round(total))}
            </h5>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <button onClick={downloadImg} className="btn-custom btn-9 ">
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
