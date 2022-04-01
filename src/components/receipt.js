import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../index.css";

export const Receipt = () => {
  const { show, dataform } = useContext(AppContext);
  console.log(dataform);
  const formatterSoles = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  });
  const tableData = [
    {
      value: "Cargo por Energía:",
      q: formatterSoles.format(dataform.totalEnergy),
    },
    {
      value: "Total Kilowats:",
      q: `${dataform.kWh} kWh`,
    },
    {
      value: "Gastos Enel:",
      q: formatterSoles.format(dataform.enel),
    },
    {
      value: "IGV:",
      q: formatterSoles.format(dataform.igv),
    },
    {
      value: "TOTAL Mes Actual:",
      q: formatterSoles.format(dataform.totalMonth),
    },
    {
      value: "Gastos por Ley:",
      q: formatterSoles.format(dataform.ley),
    },
  ];

  return (
    <>
      {!show && (
        <div>
          <table className="text-center" style={{ width: "100%" }}>
            <tr>
              <td colSpan="3" className="table_title">
                TOTAL A PAGAR
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="table_totalpay">
                {formatterSoles.format(dataform.totalPay)}
              </td>
            </tr>
            <tr>
              <td colSpan="3">Usted esta al día 🥳</td>
            </tr>
            <tr>
              <td colSpan="3" className="table_details">
                DETALE IMPORTES
              </td>
            </tr>
            {tableData.map(({ value, q }, i) => (
              <tr>
                <td colSpan="2">{value}</td>
                <td colSpan="1" className="table_camp2">
                  {q}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </>
  );
};
