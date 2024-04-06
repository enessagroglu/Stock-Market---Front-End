import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import data from "../../data/testDB.trending_stocks.json";
import { useEffect, useState } from "react";
import img1 from "../../assets/el-chart.webp";

export default function OneCikanlar() {
  const [veriListesi, setVeriListesi] = useState([]);

  const translateTurkishCharacters = (text) => {
    const turkishToEnglish = {
      ç: "c",
      ğ: "g",
      ı: "i",
      ö: "o",
      ş: "s",
      ü: "u",
      Ç: "C",
      Ğ: "G",
      İ: "I",
      Ö: "O",
      Ş: "S",
      Ü: "U",
    };

    return text.replace(/[çğıöşüÇĞİÖŞÜ]/g, (match) => turkishToEnglish[match]);
  };

  const formatCurrency = (value) => {
    let number;
    if (value && typeof value === "object" && value.$numberLong) {
      number = value.$numberLong;
    } else {
      number = value;
    }

    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2, 
    }).format(number);
  };

  useEffect(() => {
    const duzenlenmisVeri = data.map((item) => {
      const duzenlenmisItem = {};
      Object.keys(item).forEach((key) => {
        const yeniAnahtar = translateTurkishCharacters(
          key.replace(/[\s:%]+/g, "")
        );
        duzenlenmisItem[yeniAnahtar] = item[key];
      });
      return duzenlenmisItem;
    });

    console.log(duzenlenmisVeri);
    setVeriListesi(duzenlenmisVeri);
  }, [data]);

  
  const currencyTemplate = (rowData, field) => {
    return formatCurrency(rowData[field]);
  };

  return (
    <>
      <div class="mt-5">
        <div
          className="card  justify-content-center flex-wrap w-7 "
          style={{ marginLeft: "20%" }}
        >
          <Card title="Günün Öne Çıkanları" className="text-blue-700">
            <div>
              <div className="flex justify-content-center flex-wrap ">
                <img
                  src={img1}
                  className="border-round-3xl"
                  style={{ width: "900px" }}
                />
              </div>

              <div>
                <h3 className="text-blue-700">
                  Öne Çıkanlar: Yatırımın Öncüleri{" "}
                </h3>
                <p>
                  Yatırım dünyasına adım atarken, doğru bilgi ve derin anlayışla
                  donanmış olmak gerekir. 'Öne Çıkanlar' kategorimizde yer alan
                  hisseler, bu iki kritik öğenin titizlikle harmanlanmasıyla
                  seçilmiştir. Peki, bu hisseler burada neden yer alıyor?
                </p>
                <p>
                  Çünkü bu hisseler, piyasaların her dalgalanmasında fırsatları
                  görebilen, yenilikçi ve sürdürülebilir iş modelleriyle öne
                  çıkan şirketlerin paylarıdır. Onlar, sadece bugünün değil,
                  yarının da kazananları olarak belirlenmişlerdir. Finansal güç,
                  sektörel liderlik, büyüme potansiyeli ve teknolojik ilerleme
                  gibi parametreler, onları 'Öne Çıkanlar' haline getiren
                  özelliklerdir.
                </p>
                <p>
                  Bu hisseleri keşfederken, yatırım kararlarınızı
                  şekillendirecek derinlemesine analizler ve piyasa içgörülerine
                  erişeceksiniz. Amacımız, sizi en güncel ve en etkili
                  bilgilerle güçlendirmek, böylece yatırım portföyünüzü bilinçli
                  bir şekilde genişletebilmenizi sağlamaktır. 'Öne Çıkanlar'
                  sayfamızda, finansal başarıya giden yolda size eşlik edecek,
                  özenle seçilmiş hisseler bulacaksınız.
                </p>
                <p>
                  Yatırım yolculuğunuza değer katmak için buradayız, çünkü doğru
                  yatırım kararları, doğru bilgi ile başlar.
                </p>
                <p>Işte one cikan hissler:</p>
              </div>
            </div>

            <div className="card">
              <DataTable value={veriListesi} paginator rows={10}>
                <Column
                  field="BultenAdi"
                  header="Şirket Adı"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="IslemKodu"
                  header="İşlem Kodu"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="EnYuksekFiyat"
                  header="En Yüksek Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "EnYuksekFiyat")}
                  sortable
                  className="text-green-500"
                ></Column>
                <Column
                  field="EnDusukFiyat"
                  header="En Düşük Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "EnDusukFiyat")}
                  sortable
                  className="text-red-500"
                ></Column>
                <Column
                  field="KapanisFiyati"
                  header="Kapanış Fiyatı"
                  body={(rowData) => currencyTemplate(rowData, "KapanisFiyati")}
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="ToplamIslemHacmi(TL)"
                  header="Toplam İşlem Hacmi(TL)"
                  body={(rowData) =>
                    currencyTemplate(rowData, "ToplamIslemHacmi(TL)")
                  }
                  sortable
                  className="text-cyan-600"
                ></Column>
              </DataTable>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
