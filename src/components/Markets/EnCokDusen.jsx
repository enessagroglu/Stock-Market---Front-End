import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import dusenler from "../../data/testDB.dusenler.json";
import bistData from "../../data/guncelHisseVerileri.json";
import { useEffect, useState } from "react";
import img1 from "../../assets/dusus.webp";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";


export default function EnCokDusen() {
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

  const header = renderHeader();

  function dusenleriBistDataIleEşleştir(dusenler, bistData) {
    let eslesenListe = [];

    dusenler.forEach((dusen) => {
      const eslesenBistData = bistData.find(
        (bist) => bist.islemKodu === dusen.islemKodu
      );
      if (eslesenBistData) {
        // Eşleşen hisse senedine yukselenlerdeki "fiyatDegisimSon" değerini ekle
        eslesenBistData.fiyatDegisimSon = `%${dusen.fiyatDegisimSon.toFixed(
          2
        )}`;
        eslesenListe.push(eslesenBistData);
      }
    });

    return eslesenListe;
  }

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
    const data = dusenleriBistDataIleEşleştir(dusenler, bistData);

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
  }, []);

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
          <Card title="En Çok Düşenler" className="text-blue-700" style={{textAlign:"center"}}>
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
                  En Çok Düşenler: Fırsatların Derinliklerinde
                </h3>
                <p>
                  Piyasanın derinliklerinde saklı fırsatları keşfetmeye hazır
                  mısınız? 'En Çok Düşenler' kategorimiz, kısa sürede büyük
                  düşüşler yaşayan hisse senetlerini sizler için bir araya
                  getiriyor. Bu hisseler, piyasanın en hızla değer kaybeden
                  varlıkları arasında yer alarak, dikkatli yatırımcılar için
                  benzersiz fırsatlar sunmaktadır.
                </p>
                <p>
                  Bu hisseler neden bu kadar düşüş yaşadı? Piyasa
                  dalgalanmaları, beklenmedik sektörel olaylar veya şirket içi
                  gelişmeler gibi faktörler, bu hisselerin değer kaybetmesine
                  neden olabilir. Ancak her düşüş, gözlemci yatırımcılar için
                  potansiyel bir toparlanma ve yatırım fırsatı anlamına gelir.
                </p>
                <p>
                  'En Çok Düşenler', piyasadaki anlık değişimlerden çok daha
                  fazlasını temsil eder; bu hisseler, geçici zorluklarla karşı
                  karşıya kalan, ancak uzun vadede toparlanma ve büyüme
                  potansiyeline sahip şirketlerden seçilmiştir. Kategorimizdeki
                  şirketler, piyasada yaşanan dalgalanmalara rağmen gelecekte
                  güçlü dönüş yapabilecek potansiyeli barındırmaktadır.
                </p>
                <p>
                  Piyasanın en hızla değer kaybeden hisseleri, sizi sadece
                  bugünün zorluklarıyla değil, aynı zamanda geleceğin yükseliş
                  potansiyelleriyle de tanıştırır. Yatırımlarınızı bilinçli
                  şekilde yönetme ve piyasa içgörüsü kazanma fırsatınız için
                  buradayız; güncel analizler ve derinlemesine incelemelerle
                  donanımınızı güçlendiriyoruz. 'En Çok Düşenler' ile piyasanın
                  dalgalarını navige edin.
                </p>
                <p>
                  Piyasa dalgalarının ardında yatan fırsatları değerlendirin ve
                  yatırımınıza derinlik katın, çünkü bilge yatırım kararları,
                  piyasadaki düşüş trendlerini anlamak ve onlardan faydalanmakla
                  başlar.
                </p>
                <p>İşte en çok değer kaybeden hisseler:</p>
              </div>
            </div>
            <div className="card">
              <DataTable value={veriListesi}
                paginator
                rows={10}
                dataKey="name"
                filters={filters}
                filterDisplay="row"
                globalFilterFields={[
                "bultenAdi",
                "islemKodu",
                "enYuksekFiyat",
                "enDusukFiyat",
                "fiyatDegisimSon",
                "kapanisFiyat",
                "toplamIslemHacmi(TL)"]}

              header={header}
              emptyMessage="Veri bulunamadı.">
                <Column
                  field="bultenAdi"
                  header="Şirket Adı"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="islemKodu"
                  header="İşlem Kodu"
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="enYuksekFiyat"
                  header="En Yüksek Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "enYuksekFiyat")}
                  sortable
                  className="text-green-500"
                ></Column>
                <Column
                  field="enDusukFiyat"
                  header="En Düşük Fiyat"
                  body={(rowData) => currencyTemplate(rowData, "enDusukFiyat")}
                  sortable
                  className="text-red-500"
                ></Column>
                <Column
                  field="fiyatDegisimSon"
                  header="Fiyat Değişim Son"
                  sortable
                  className="text-cyan-600"
                ></Column> 
                <Column
                  field="kapanisFiyat"
                  header="Kapanış Fiyatı"
                  body={(rowData) => currencyTemplate(rowData, "kapanisFiyat")}
                  sortable
                  className="text-cyan-600"
                ></Column>
                <Column
                  field="toplamIslemHacmi(TL)"
                  header="Toplam İşlem Hacmi(TL)"
                  body={(rowData) =>
                    currencyTemplate(rowData, "toplamIslemHacmi(TL)")
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
