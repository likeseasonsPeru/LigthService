import React from "react";

export const CardApartment = ({ i }) => {
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
            <input type="number" className="form-control" id="KW" />
          </div>
          <div className="col-auto">
            <label htmlFor="KW" className="text-black">
              Soles x Depa
            </label>
            <input
              type="number"
              className="form-control"
              id="KW"
              value={1}
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
              value={1}
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
              value={1}
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
              value={1}
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
              value={1}
              disabled
            />
          </div>
        </div>
        <div className="row justify-content-center py-3 align-items-end">
          <div className="col-lg-6 col-sm-12">
            <h5 className="text-black text-center fw-bolder mb-0">
              Total: S/ 1200.00
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
