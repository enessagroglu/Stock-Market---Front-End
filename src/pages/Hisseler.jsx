import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import card1Image from "../assets/al-sinyali.webp";
import card2Image from "../assets/sat-sinyal.webp";
import HisseTable from "../components/Hisseler/HisseTable";

export default function Hisseler() {
  const [veri, setVeri] = useState([]);
  const [loading, setLoading] = useState(true);

  const header1 = (
    <img alt="Card" src={card1Image} className="border-round-top-xl" />
  );

  const header2 = (
    <img alt="Card" src={card2Image} className="border-round-top-xl" />
  );

  useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-blue-700">Hisse Senetleri</h1>
      </div>
      <div className="mt-7 card flex justify-content-center flex-wrap w-full">
        <Link to="/al-sinyali-verenler">
          <Card
            title="Al Sinyali Verenler"
            header={header1}
            className="md:w-25rem mr-5 shadow-3"
          >
            <p className="m-0">
              Parlak yıldızlar gibi parlayan hisseler! Bu hisseler, güçlü al
              sinyalleri ile yükselişe geçiyor. Yatırımcılarına karlı bir
              yolculuk vaat ediyorlar. Gözleriniz bu hisselerde olsun,
              potansiyel kazançları kaçırmayın!
            </p>
          </Card>
        </Link>
        <Link to="/sat-sinyali-verenler">
          <Card
            title="Sat Sinyali Verenler"
            header={header2}
            className="md:w-25rem shadow-3"
          >
            <p className="m-0">
              Zayıf halkaları gösteren hisseler! Bu hisseler, sat sinyalleri ile
              dikkat çekiyor. Yatırımcılarını zararlardan korumak için dikkatli
              olmaları gerekiyor. Satış fırsatlarını kaçırmamak için bu
              hisseleri yakından takip edin!
            </p>
          </Card>
        </Link>
      </div>
      <Divider />
      <div className="mt-7 card flex justify-content-center flex-wrap w-full">
        <HisseTable/>
      </div>
    </>
  );
}
