import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import veriler from "../data/testDB.gunOzet.json";

export default function Hisseler() {
  const [veri, setVeri] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const formattedData = veriler.map((item, index) => ({
      id: index,
      hisse: item["kod: "],
      sonFiyat: item["son: "],
      degisim: item["fark%: "], 
      hacim: item["hacim lot: "] 
    }));
    setVeri(formattedData);
    setLoading(false);
  }, []);

  return (
    <div className="col-6 col-offset-3 shadow-3 card">
      <DataTable value={veri} removableSort tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="hisse"
          header="Hisse"
          sortable
          style={{ width: "25%", color: "#1C80CF" }}
        />
        <Column
          field="sonFiyat"
          header="Son Fiyat"
          sortable
          style={{ width: "25%", color: "#1C80CF" }}
        />
        <Column
          field="degisim"
          header="Değişim"
          sortable
          style={{ width: "25%", color: "#1C80CF" }}
        />
        <Column
          field="hacim"
          header="Hacim"
          sortable
          style={{ width: "25%", color: "#1C80CF" }}
        />
      </DataTable>
    </div>
  );
}