const fs = require('fs');
const path = require('path');

// Dosyaların yolları
const veriDosyasiYolu = path.join(__dirname, '..', 'data', 'testDB.aylıkBISTData.json');
const yeniDosyaYolu = path.join(__dirname, '..', 'data', 'guncelHisseVerileri.json');

const enYakinTarihiBulVeKaydet = () => {
  fs.readFile(veriDosyasiYolu, 'utf8', (err, data) => {
    if (err) {
      console.error('Dosya okunurken bir hata oluştu:', err);
      return;
    }

    const hisseVerileri = JSON.parse(data);
    const enGuncelVeriler = {};

    hisseVerileri.forEach(hisse => {
      const tarih = new Date(hisse.tarih.$date);
      const hisseKodu = hisse.islemKodu;

      // Eğer hisse senedi için daha önce bir kayıt eklenmemişse veya mevcut tarih daha yeni ise güncelle
      if (!enGuncelVeriler[hisseKodu] || new Date(enGuncelVeriler[hisseKodu].tarih.$date) < tarih) {
        enGuncelVeriler[hisseKodu] = hisse;
      }
    });

    // Sadece en güncel verileri içeren bir dizi oluştur ve dosyaya yaz
    const enGuncelVerilerDizisi = Object.values(enGuncelVeriler);

    fs.writeFile(yeniDosyaYolu, JSON.stringify(enGuncelVerilerDizisi, null, 2), 'utf8', err => {
      if (err) {
        console.error('Dosya yazılırken bir hata oluştu:', err);
      } else {
        console.log('En güncel hisse verileri kaydedildi.');
      }
    });
  });
};

enYakinTarihiBulVeKaydet();
