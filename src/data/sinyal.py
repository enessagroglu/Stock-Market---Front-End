import json

# JSON dosyasının yolu
dosya_yolu = 'sinyalVerileri.json'  # JSON dosyanızın adını ve konumunu buraya girin

# Dosyayı açma ve JSON olarak yükleme
with open(dosya_yolu, 'r', encoding='utf-8') as file:
    sinyal_verileri = json.load(file)

alim_sinyalleri = []
satim_sinyalleri = []

# EMA_Signal değerine göre sınıflandırma
for veri in sinyal_verileri:
    if "al" in veri["EMA_Signal"].lower():
        alim_sinyalleri.append(veri)
    elif "sat" in veri["EMA_Signal"].lower():
        satim_sinyalleri.append(veri)

# Alım sinyallerini AlimSinyali.json'a kaydetme
with open('AlimSinyali.json', 'w', encoding='utf-8') as f:
    json.dump(alim_sinyalleri, f, ensure_ascii=False, indent=4)

# Satım sinyallerini SatimSinyali.json'a kaydetme
with open('SatimSinyali.json', 'w', encoding='utf-8') as f:
    json.dump(satim_sinyalleri, f, ensure_ascii=False, indent=4)
