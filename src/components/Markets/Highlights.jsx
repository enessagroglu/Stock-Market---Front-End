import { Card } from "primereact/card";
import card1Image from "../../assets/top-stocks.webp";
import card2Image from "../../assets/daily.webp";
import card3Image from "../../assets/top-gainers.webp";
import card4Image from "../../assets/top-losers.webp";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


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

  const header4 = (
    <img alt="Card" src={card4Image} className="border-round-top-xl" />
  );

  return (
    <>
      <div class="mt-5">
        <div className="card flex justify-content-center flex-wrap w-full">
          <Link to="/one-cikanlar">
            <Card
              title="Günün Öne Çıkanları"
              header={header2}
              className="md:w-25rem mr-5"
            >
              <p className="m-0">
                Piyasanın Öne Çıkanları! Bu kategori, piyasadaki en güncel ve
                önemli hisseleri bir araya getirerek yatırımcıların dikkatini
                çeker. Her gün güncellenen bu listeye göz atarak, piyasadaki en
                yeni fırsatları kaçırmazsınız. Bu kategori, yatırımcıların
                portföylerini çeşitlendirmelerine ve potansiyel kazanç
                fırsatlarını değerlendirmelerine yardımcı olacak zengin
                içeriğiyle öne çıkıyor. Yatırım stratejilerinizi güçlendirmek ve
                piyasayı yakından takip etmek için 'Günün Öne Çıkanları'
                kategorimize göz atmayı unutmayın!
              </p>
            </Card>
          </Link>
          <Card
            title="En Çok İşlem Görenler"
            header={header1}
            className="md:w-25rem mr-5"
          >
            <p className="m-0">
              Piyasanın Nabzını Tutun! Bu kategori, piyasadaki en popüler ve
              aktif hisse senetlerini içerir, böylece yatırımcılar olarak her
              anı kaçırmazsınız. İşlem hacmi yüksek olan bu hisseler, potansiyel
              fırsatları gözden kaçırmamanızı sağlar. Piyasadaki hareketliliği
              yakından takip etmek ve portföyünüzü güçlendirmek için 'En Çok
              İşlem Görenler' kategorimize göz atmayı unutmayın!
            </p>
          </Card>
          <Card
            title="En Çok Yükselenler"
            header={header3}
            className="md:w-25rem mr-5"
          >
            <p className="m-0">
              Yükselen Yıldızlar! 'En Çok Yükselenler' kategorimizde, piyasadaki
              en hızlı yükselen hisse senetlerini keşfedin. Bu kategori ile
              yükselen trendleri yakından takip ederek potansiyel fırsatları
              değerlendirebilir ve portföyünüzü güçlendirebilirsiniz. Piyasadaki
              hareketliliği yakalamak ve kararlarınızı bilgiye dayalı olarak
              almak için 'En Çok Yükselenler' kategorimize göz atmayı unutmayın!
            </p>
          </Card>
          <Card title="En Çok Düşenler" header={header4} className="md:w-25rem">
            <p className="m-0">
              Dalgalananlar! Bu kategorimizde, piyasadaki en büyük düşüş yaşayan
              hisse senetlerini bulabilirsiniz.Düşen trendleri izleyerek
              piyasada meydana gelen değişimleri değerlendirebilir ve
              stratejilerinizi buna göre şekillendirebilirsiniz. Piyasadaki
              hareketliliği yakından takip etmek ve kararlarınızı bilgiye dayalı
              olarak almak için 'En Çok Düşenler' kategorimize göz atmayı
              unutmayın!
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
