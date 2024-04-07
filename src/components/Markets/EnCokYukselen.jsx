import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import yukselenler from "../../data/testDB.yukselenler.json";
import bistData from "../../data/guncelHisseVerileri.json";
import { useEffect, useState } from "react";
import img1 from "../../assets/zirve.webp";


export default function EnCokYukselen() {
  const [veriListesi, setVeriListesi] = useState([]);

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
          className="card  justify-content-center flex-wrap w-7 "
          style={{ marginLeft: "20%" }}
        >
          <Card title="En Çok Yükselenler" className="text-blue-700">
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
              <DataTable value={veriListesi} paginator rows={10}>
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
