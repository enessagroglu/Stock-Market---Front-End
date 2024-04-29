import json

# AlimSinyali.json dosyasını yükleme
with open('AlimSinyali.json', 'r', encoding='utf-8') as file:
    alim_sinyalleri = json.load(file)

# guncelVeri.json dosyasını yükleme
with open('guncelHisseVerileri.json', 'r', encoding='utf-8') as file:
    guncel_veriler = json.load(file)

# İşlem koduna göre eşleşen guncel verileri bulma
eslesen_veriler = []
birlesik_veriler = []   

for alim_sinyali in alim_sinyalleri:
    islem_kodu = alim_sinyali.get('islemKodu')  # Alim sinyallerinden işlem kodunu al
    if islem_kodu:
        for guncel_veri in guncel_veriler:
            # get() metodu ile 'islemKodu' anahtarını kontrol et
            if guncel_veri.get('islemKodu') == islem_kodu:
                # İki objeyi birleştirirken tekrar eden alanları ele al
                guncel_veri_birlesik = guncel_veri.copy()  # guncel veri kopyasını oluştur
                guncel_veri_birlesik.pop('islemKodu', None)  # guncel veriden 'islemKodu' alanını kaldır
                birlesik_obje = {**alim_sinyali, **guncel_veri_birlesik}  # Birleştir
                birlesik_veriler.append(birlesik_obje)
                break  # Eşleşen ilk veriyi bulduktan sonra döngüden çık

# Birleşik verileri AlimSinyalHisse.json dosyasına kaydetme
with open('AlimSinyalHisse.json', 'w', encoding='utf-8') as file:
    json.dump(birlesik_veriler, file, ensure_ascii=False, indent=4)