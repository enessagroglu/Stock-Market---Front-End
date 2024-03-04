import { useState, useEffect } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";
import card1Image from "../../assets/875d1ca2-f83c-4d87-b8f5-e23f04004965.webp";
import card2Image from "../../assets/2015fd73-b2f0-4d4f-8ae6-688f9d64d57a.webp";
import card3Image from "../../assets/b70d7e63-41ca-4ec5-94ea-b0462ed9c49b.webp";
import { Divider } from "primereact/divider";

export default function DefaultPage() {
  const [page, setPage] = useState("page1");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const quotes = [
    '"Finansal kariyerim boyunca, tanıdığım insanların risk almadıkları için yıkıldıklarına şahit oldum. Siz risk almazsanız, risk sizi alır." –Larry Hite',
    '"Size nasıl zengin olacağınızı söyleyeceğim. Kapıları kapatın. Diğerleri hırslıyken çekimser olun, diğerleri çekimserken hırslı." –Warren Buffett',
    '"Eğer yatırım size zevkli geliyorsa, eğer eğleniyorsanız; muhtemelen hiç para kazanmıyosunuz demektir. İyi yatırım sıkıcıdır." –George Soros',
    '"Fiyat ödediğin miktardır. Değer ne elde ettiğindir." –Warren Buffett',
    '"Eğer bir işletme iyi gidiyorsa, hisse senedi eninde sonunda onu takip eder." –Warren Buffett',
    '"Zarar etmekten korkamazsınız. Bu işte başarılı olanlar, para kaybetmeyi göze alan kişilerdir." –Jack Schwager',
  ];

  const header1 = (
    <img alt="Card" src={card1Image} className="border-round-top-xl" />
  );

  const header2 = (
    <img alt="Card" src={card2Image} className="border-round-top-xl" />
  );

  const header3 = (
    <img alt="Card" src={card3Image} className="border-round-top-xl" />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 10000); // Her 15 saniyede bir değişir

    return () => clearInterval(interval);
  }, []);

  // Alıntı ve yazar ismini ayrıştırma
  const quoteParts = quotes[quoteIndex].split("–");
  const quoteText = quoteParts[0];
  const authorName = quoteParts[1];

  const PageContent1 = () => {
    return (
      <Card title="" className="">
        <div className="col-11 banner_content ">
          <div
            key={animationKey}
            className="fadein animation-duration-1000 animation-iteration-1"
          >
            <span className="quoteText ">{quoteText}</span>
            <span className="authorName">-{authorName}</span>
          </div>
        </div>
      </Card>
    );
  };

  const PageContent2 = () => {
    return <>slm2</>;
  };

  const PageContent3 = () => {
    return <>slm3</>;
  };

  return (
    <>
      <div class="col-6 col-offset-3">
        <div className="card">
          {page === "page1" ? (
            <PageContent1 />
          ) : page === "page2" ? (
            <PageContent2 />
          ) : page === "page3" ? (
            <PageContent3 />
          ) : null}
          <div className="card flex justify-content-end mt-5">
            <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page1"
                  name="page1"
                  value="page1"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page1"}
                />
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page2"
                  name="page2"
                  value="page2"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page2"}
                />
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="page3"
                  name="page3"
                  value="page3"
                  onChange={(e) => setPage(e.value)}
                  checked={page === "page3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      <div class="mt-5">
        <div className="card flex justify-content-center flex-wrap w-full">
          <Card
            title="Yükselişinizi Güvence Altına Alın"
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
            title="Gerçek Zamanlı Veri ile Piyasayı Şekillendirin"
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
            title="Veri Güvenliğiniz, Yükselişinizin Kilidi"
            header={header3}
            className="md:w-25rem"
          >
            <p className="m-0">
              Finansal büyümenin sürdürülebilirliği, veri güvenliğinizin
              sağlamlığına bağlıdır. Biz, piyasalardaki en son hareketleri takip
              ederken, sizin için en değerli olan bilgilerin korunmasına öncelik
              veriyoruz. Yatırımlarınızı koruma altına alın, piyasada güvenle yükselin.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
