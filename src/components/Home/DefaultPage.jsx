import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";

export default function DefaultPage() {
  const [page, setPage] = useState("");

  return (
    <>
      <div className="card">
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <div class="mt-5">
          <div className="card flex justify-content-end">
            <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page1"
                  name="pizza"
                  value="page1"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page1"}
                />
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page2"
                  name="pizza"
                  value="page2"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page2"}
                />
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page3"
                  name="pizza"
                  value="page3"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
