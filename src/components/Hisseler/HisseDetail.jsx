import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import guncelVeri from "../../data/guncelHisseVerileri.json";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function HisseDetail() {
  const { bultenAdi } = useParams();
  const [stockDetails, setStockDetails] = useState(null);
  const navigate = useNavigate();  // Move useNavigate to the top, before any conditional statements

  useEffect(() => {
    const stock = guncelVeri.find((item) => item.bultenAdi === bultenAdi);
    setStockDetails(stock);
  }, [bultenAdi]);

  if (!stockDetails) {
    return <div>Loading...</div>;
  }

  const onNavClick = () => {
    navigate(-1);
  };

  return (
    <div className="mt-7 card flex justify-content-center flex-wrap w-full">
      <Card title={stockDetails.bultenAdi} className="w-5 text text-blue-700">
        <div className="mt-7 flex ">
          <p className="mr-2 text-blue-800 font-bold">Pazar Adı:</p>
          <p> {stockDetails.pazarAdi}</p>
        </div>
        <div className="flex ">
          <p className="mr-2 text-blue-800 font-bold">İşlem Kodu:</p>
          <p> {stockDetails.islemKodu}</p>
        </div>
        <div className="flex ">
          <p className="mr-2 text-blue-800 font-bold">En Düşük Fiyat:</p>
          <p> {stockDetails.enDusukFiyat}</p>
        </div>
        <div className="flex ">
          <p className="mr-2 text-blue-800 font-bold">En Yüksek Fiyat:</p>
          <p> {stockDetails.enYuksekFiyat}</p>
        </div>
        <div className=" flex ">
          <p className="mr-2 text-blue-800 font-bold">Kapanış Fiyatı:</p>
          <p> {stockDetails.kapanisFiyat}</p>
        </div>
        <div className="flex ">
          <p className="mr-2 text-blue-800 font-bold">
            Toplam İşlem Hacmi(TL):
          </p>
          <p> {stockDetails.toplamIslemHacmi?.$numberLong ?? stockDetails.toplamIslemHacmi} </p>

        </div>
        <div>
          <Button label="Geri" icon="pi pi-check" size="Normal" className="border-round-xl" onClick={onNavClick}/>
        </div>
      </Card>
    </div>
  );
}

export default HisseDetail;