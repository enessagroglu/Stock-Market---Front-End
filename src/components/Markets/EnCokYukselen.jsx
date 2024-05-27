import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import yukselenler from "../../data/testDB.yukselenler.json";
import bistData from "../../data/guncelHisseVerileri.json";
import { useEffect, useState } from "react";
import img1 from "../../assets/zirve.webp";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { useNavigate } from 'react-router-dom';


export default function EnCokYukselen() {
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

  function yukselenleriBistDataIleEşleştir(yukselenler, bistData) {
    let eslesenListe = [];

    yukselenler.forEach((yukselen) => {
      const eslesenBistData = bistData.find(
        (bist) => bist.islemKodu === yukselen.islemKodu
      );
      if (eslesenBistData) {
        // Eşleşen hisse senedine yukselenlerdeki "fiyatDegisimSon" değerini ekle
        eslesenBistData.fiyatDegisimSon = `%${yukselen.fiyatDegisimSon.toFixed(
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
    const data = yukselenleriBistDataIleEşleştir(yukselenler, bistData);

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
          <Card title="En Çok Yükselenler" className="text-blue-700" style={{textAlign:"center"}}>
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
                  En Çok Yükselenler: Yükselişin Zirvesindekiler
                </h3>
                <p>
                  Yatırımın zirvelerinde bir yolculuğa çıkmaya hazır olun. 'En
                  Çok Yükselenler' kategorimiz, değer kazançlarında liderliği
                  ele geçiren hisse senetleriyle sizleri karşılıyor. Bu
                  hisseler, kısa sürede gösterdikleri performansla piyasanın en
                  hızla yükselen yıldızları arasında yer almaktadır.
                </p>
                <p>
                  Bu hisselerin yükselişinin ardında ne var? Güçlü finansal
                  sonuçlar, stratejik şirket birleşmeleri, sektörel yenilikler
                  veya oyun değiştiren haberler gibi faktörler, bu hisselerin
                  yüksek kazançlar elde etmesinin ve yatırımcıların radarında
                  kalmasının sebepleri arasındadır.
                </p>
                <p>
                  'En Çok Yükselenler', anlık piyasa dinamiklerinden fazlasını
                  sunar; bu hisseler, arka plandaki şirketlerin sağlam yatırım
                  temelleri ve büyüme potansiyeli sayesinde seçilmiştir.
                  Kategorimizdeki şirketler, piyasa içerisinde sürdürülebilir
                  bir başarı yolu çizmekte ve yatırımcıların güvenini sürekli
                  pekiştirmektedir.
                </p>
                <p>
                  Piyasanın en hızla yükselen hisseleri, sizi sadece bugünün
                  kazançlarıyla değil, aynı zamanda geleceğin potansiyelleriyle
                  de buluşturmayı hedefler. Yatırımınızı büyütme ve piyasa
                  içgörüsü kazanma şansınız için buradayız; güncel analizler ve
                  trend öngörüleriyle donanımınızı güçlendiriyoruz. 'En Çok
                  Yükselenler' ile piyasa yükselişlerini kucaklayın.
                </p>
                <p>
                  Piyasa zirvelerinin tadını çıkarın ve yatırımınıza değer
                  katın, çünkü akıllı yatırım kararları, piyasadaki yükseliş
                  trendlerini takip etmekle başlar.
                </p>
                <p>İşte en çok yükselen hisseler:</p>
              </div>
            </div>

            <div className="card">
              <DataTable value={veriListesi}
                paginator
                rows={10}
                dataKey="name"
                filters={filters}
                onRowClick={onRowClick}
                style={{cursor: "pointer" }}
                filterDisplay="row"
                globalFilterFields={[
                "bultenAdi",
                "islemKodu",
                "enYuksekFiyat",
                "enDusukFiyat",
                "fiyatDegisimSon",
                "kapanisFiyat",
                "toplamIslemHacmi"]}

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
                  field="toplamIslemHacmi"
                  header="Toplam İşlem Hacmi(TL)"
                  body={(rowData) =>
                    currencyTemplate(rowData, "toplamIslemHacmi")
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
