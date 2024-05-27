import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import data from "../../data/testDB.enIslemGorenler.json";
import { useEffect, useState } from "react";
import img1 from "../../assets/masa-kalem.webp";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { useNavigate } from "react-router-dom";

export default function EnCokIslem() {
  const [veriListesi, setVeriListesi] = useState([]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "bultenAdi": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });


  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Arayın..."
        />
      </div>
    );
  };

  const navigate = useNavigate();

  const onRowClick = (rowData) => {
    navigate(`/hisse/${rowData.data.bultenAdi}`);
  };

  const header = renderHeader();

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
          className="card justify-content-center flex-wrap w-10 "
          style={{ marginLeft: "150px" }}
        >
          <Card title="En Çok İşlem Görenler" className="text-blue-700" style={{textAlign:"center"}}>
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
                  En Çok İşlem Görenler: Piyasa Dinamikleri
                </h3>
                <p>
                  Piyasanın kalbinin attığı yerdesiniz. 'En Çok İşlem Görenler'
                  kategorimiz, yoğun işlem gören ve sürekli hareket halinde olan
                  hisse senetleriyle doludur. Bu hisseler, piyasada en aktif
                  olanlar arasındadır ve yatırımcılara piyasayı yakından takip
                  etme imkanı sunar.
                </p>
                <p>
                  Neden bu hisseler bu kadar hareketli? Çünkü yatırımcılar
                  tarafından sürekli takip edilen ve tercih edilen bu hisseler,
                  yüksek işlem hacimleri ve volatiliteleriyle bilinir. Bu
                  özellikler, onları piyasa trendlerini ve yatırım fırsatlarını
                  gözlemlemek için mükemmel birer aday yapar.
                </p>
                <p>
                  'En Çok İşlem Görenler', sadece piyasanın anlık durumunu
                  yansıtmaz, aynı zamanda bu hisselerin arkasındaki şirketlerin
                  sağlamlığını ve piyasa güvenini de gösterir. Bu bölümde yer
                  alan şirketlerin piyasadaki performansları, yatırımcıların
                  güvenini ve piyasa değerlerini kanıtlar niteliktedir.
                </p>
                <p>
                  İşlem hacmi yüksek hisseler, portföyünüzü çeşitlendirme ve
                  piyasada bilinçli adımlar atma şansı verir. Yatırım
                  kararlarınızı daha da bilinçli hale getirmek için buradayız;
                  en son piyasa analizleri ve trend raporlarıyla sizi
                  donatıyoruz. 'En Çok İşlem Görenler' ile piyasanın ritmini
                  yakalayın.
                </p>
                <p>
                  Piyasa liderleriyle yolculuğunuza yön verin, çünkü başarılı
                  yatırım kararları, piyasa hareketlerinin doğru okunmasıyla
                  başlar.
                </p>
                <p>İşte en çok işlem gören hisseler:</p>
              </div>
            </div>

            <div className="card">
              <DataTable 
              value={veriListesi}
              paginator
              rows={10}
              dataKey="name"
              onRowClick={onRowClick}
              style={{cursor: "pointer" }}
              filters={filters}
              filterDisplay="row"
              globalFilterFields={[
                "BultenAdi",
                "IslemKodu",
                "EnYuksekFiyat",
                "EnDusukFiyat",
                "KapanisFiyati",
                "ToplamIslemHacmi(TL)"


              ]}
              header={header}
              emptyMessage="Veri bulunamadı."
               >
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
