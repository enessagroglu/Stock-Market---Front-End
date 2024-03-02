import React from "react";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.webp";

const Banner = () => {
  const quotes = [
    '"Finansal kariyerim boyunca, tanıdığım insanların risk almadıkları için yıkıldıklarına şahit oldum. Siz risk almazsanız, risk sizi alır." – Larry Hite',
    '"Size nasıl zengin olacağınızı söyleyeceğim. Kapıları kapatın. Diğerleri hırslıyken çekimser olun, diğerleri çekimserken hırslı." – Warren Buffett',
    '"Eğer yatırım size zevkli geliyorsa, eğer eğleniyorsanız; muhtemelen hiç para kazanmıyosunuz demektir. İyi yatırım sıkıcıdır." – George Soros',
    '"Fiyat ödediğin miktardır. Değer ne elde ettiğindir." – Warren Buffett',
    '"Eğer bir işletme iyi gidiyorsa, hisse senedi eninde sonunda onu takip eder." – Warren Buffett',
    '"Zarar etmekten korkamazsınız. Bu işte başarılı olanlar, para kaybetmeyi göze alan kişilerdir." – Jack Schwager',
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

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

  return (
    <div className="bannerWrapper">
      <div className="contentWrapper">
        <div className="col-1">
          {Logo && <img src={Logo} alt="Logo" className="smallLogo" />}
        </div>
        <div className="col-11 banner_content">
          <div
            key={animationKey}
            className="fadein animation-duration-1000 animation-iteration-1"
          >
            <span className='quoteText'>{quoteText}</span>
            <span className='authorName'>-{authorName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
