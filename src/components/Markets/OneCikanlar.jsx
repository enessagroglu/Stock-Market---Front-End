import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";
import data from "../../data/testDB.gunOzet.json";
import { useEffect, useState } from "react";

export default function OneCikanlar() {
  const [veriListesi, setVeriListesi] = useState([]);

  useEffect(() => {
    const duzenlenmisVeri = data.map((item) => {
      const duzenlenmisItem = {};
      Object.keys(item).forEach((key) => {
        const yeniAnahtar = key.replace(/[\s:%]+/g, "");
        duzenlenmisItem[yeniAnahtar] = item[key];
      });
      return duzenlenmisItem;
    });
    setVeriListesi(duzenlenmisVeri);
  }, []);

  return (
    <>
      <div class="mt-5">
        <div
          className="card  justify-content-center flex-wrap w-8 "
          style={{ marginLeft: "17%" }}
        >
          <Card title="Günün Öne Çıkanları" className="text-blue-700">
            <Accordion activeIndex={0}>
              {veriListesi.map((item, index) => (
                <AccordionTab key={index} header={item.kod}>
                  <div>
                    <div>
                      <span className="text-blue-700">Son:</span>
                      <span className="text-cyan-600"> {item.son}₺</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Fark:</span>
                      <span className="text-cyan-600"> {item.fark}%</span>
                    </div>
                    <div>
                      <span className="text-blue-700">En Düşük: </span>
                      <span className="text-red-500"> {item.endüsük}₺</span>
                    </div>
                    <div>
                      <span className="text-blue-700">En Yüksek: </span>
                      <span className="text-green-700"> {item.enyuksek}₺</span>
                    </div>
                    <div>
                      <span className="text-blue-700">AOFŞ:</span>
                      <span className="text-cyan-600"> {item.aofs}₺</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Hacim Lot: </span>
                      <span className="text-cyan-600"> {item.hacimlot}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Hacim TL: </span>
                      <span className="text-cyan-600"> {item.hacimtl}₺</span>
                    </div>
                  </div>
                </AccordionTab>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </>
  );
}
