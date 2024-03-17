import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Hisseler() {
    const [hisseler, setHisseler] = useState([]);

  return (
    <>
      <div className="col-6 col-offset-3 shadow-3 card">
        <DataTable
          value={hisseler}
          removableSort
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="hisse"
            header="Hisse"
            sortable
            style={{ width: "25%", color: "#1C80CF"  }}
          ></Column>
          <Column
            field="sonFiyat"
            header="Son Fiyat"
            sortable
            style={{ width: "25%", color: "#1C80CF"  }}
          ></Column>
          <Column
            field="degisim"
            header="Değişim"
            sortable
            style={{ width: "25%", color: "#1C80CF"  }}
          ></Column>
          <Column
            field="hacim"
            header="Hacim"
            sortable
            style={{ width: "25%", color: "#1C80CF"  }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
