import { Card } from "primereact/card";
import card1Image from "../../assets/875d1ca2-f83c-4d87-b8f5-e23f04004965.webp";
import card2Image from "../../assets/2015fd73-b2f0-4d4f-8ae6-688f9d64d57a.webp";
import card3Image from "../../assets/b70d7e63-41ca-4ec5-94ea-b0462ed9c49b.webp";
import { Divider } from "primereact/divider";

export default function Highlights() {
  const header1 = (
    <img alt="Card" src={card1Image} className="border-round-top-xl" />
  );

  const header2 = (
    <img alt="Card" src={card2Image} className="border-round-top-xl" />
  );

  const header3 = (
    <img alt="Card" src={card3Image} className="border-round-top-xl" />
  );
  return (
    <>
      
      <div class="mt-5">
        <div className="card flex justify-content-center flex-wrap w-full">
          <Card
            title="Günün Öne Çıkanları"
            header={header1}
            className="md:w-25rem mr-5"
          >
            <p className="m-0">
              Finansal hedeflerinize ulaşmak için net bir yol çiziyoruz. Piyasa
              dinamiklerini anlamak ve yatırım kararlarınızı şekillendirmek
              üzere derinlemesine analizler ve gerçek zamanlı veriler sunuyoruz.
              Portföyünüzü optimize edin ve istikrarlı büyüme için bize güvenin.
              Yatırım yolculuğunuzda her adımda yanınızdayız.
            </p>
          </Card>
          <Card
            title="En Çok İşlem Görenler"
            header={header2}
            className="md:w-25rem mr-5"
          >
            <p className="m-0">
              Anlık piyasa analizleri ve gerçek zamanlı veri akışı ile sizin her
              zaman bir adım önde olmanızı sağlıyoruz. Kesintisiz ve güvenilir
              hizmetimizle, en karmaşık finansal verileri bile kolayca
              yönetmenize olanak tanıyoruz. Yatırımlarınız için güçlü ve dinamik
              çözümlerimizle tanışın, piyasadaki yerinizi sağlamlaştırın.
            </p>
          </Card>
          <Card
            title="En Çok Yükselenler"
            header={header3}
            className="md:w-25rem mr-5"
          >
            <p className="m-0">
              Finansal büyümenin sürdürülebilirliği, veri güvenliğinizin
              sağlamlığına bağlıdır. Biz, piyasalardaki en son hareketleri takip
              ederken, sizin için en değerli olan bilgilerin korunmasına öncelik
              veriyoruz. Yatırımlarınızı koruma altına alın, piyasada güvenle
              yükselin.
            </p>
          </Card>
          <Card
            title="En Çok Düşenler"
            header={header3}
            className="md:w-25rem"
          >
            <p className="m-0">
              Finansal büyümenin sürdürülebilirliği, veri güvenliğinizin
              sağlamlığına bağlıdır. Biz, piyasalardaki en son hareketleri takip
              ederken, sizin için en değerli olan bilgilerin korunmasına öncelik
              veriyoruz. Yatırımlarınızı koruma altına alın, piyasada güvenle
              yükselin.
            </p>
          </Card>
        </div>
      </div>
      
    </>
  );
}
