import json

# AlimSinyali.json dosyasını yükleme
with open('SatimSinyali.json', 'r', encoding='utf-8') as file:
    satim_sinyalleri = json.load(file)

# guncelVeri.json dosyasını yükleme
with open('guncelHisseVerileri.json', 'r', encoding='utf-8') as file:
    guncel_veriler = json.load(file)

# İşlem koduna göre eşleşen guncel verileri bulma
eslesen_veriler = []
birlesik_veriler = []   

for satim_sinyali in satim_sinyalleri:
    islem_kodu = satim_sinyali.get('islemKodu')  # Satim sinyallerinden işlem kodunu al
    if islem_kodu:
        for guncel_veri in guncel_veriler:
            # get() metodu ile 'islemKodu' anahtarını kontrol et
            if guncel_veri.get('islemKodu') == islem_kodu:
                # İki objeyi birleştirirken tekrar eden alanları ele al
                guncel_veri_birlesik = guncel_veri.copy()  # guncel veri kopyasını oluştur
                guncel_veri_birlesik.pop('islemKodu', None)  # guncel veriden 'islemKodu' alanını kaldır
                birlesik_obje = {**satim_sinyali, **guncel_veri_birlesik}  # Birleştir
                birlesik_veriler.append(birlesik_obje)
                break  # Eşleşen ilk veriyi bulduktan sonra döngüden çık

# Birleşik verileri AlimSinyalHisse.json dosyasına kaydetme
with open('SatimSinyalHisse.json', 'w', encoding='utf-8') as file:
    json.dump(birlesik_veriler, file, ensure_ascii=False, indent=4)