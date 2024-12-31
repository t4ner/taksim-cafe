const menuFoods = [
  {
    id: "01-",
    name: "01 Mercimek Çorbası – Linsensuppe",
    description: "Keine Allergene",
  },
  {
    id: "02-",
    name: "02  Yayla Çorbası – Joghurtsuppe nach türkischer Art",
    description:
      "(A) Enthält glutenhaltiges Getreide, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "03-",
    name: "03 İşkembe Çorbası – Kuttelsuppe",
    description: "(A) Enthält glutenhaltiges Getreide, (E) Milch/Laktose",
  },
  {
    id: "04-",
    name: "04 Kelle - Paça Çorbası",
    description: "Keine Allergene",
  },
  {
    id: "05-",
    name: "05 Beykoz Çorbası – Gemischte Lammkopf- und Kuttelsuppe",
    description: "(A) Enthält glutenhaltiges Getreide, (E) Milch/Laktose",
  },
  {
    id: "06-",
    name: "06 Beyran Çorbası – Lammfleisch mit Reis und Knoblauch",
    description: "(A) Enthält glutenhaltiges Getreide",
  },
  {
    id: "10-",
    name: "10 Domates – Tomaten",
    description: "Keine Allergene",
  },
  {
    id: "11-",
    name: "11 Salatalık – Gurke",
    description: "Keine Allergene",
  },
  {
    id: "12-",
    name: "12 Beyaz Peynir – Hirtenkäse",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "13-",
    name: "13 Dilim Peynir – Gouda",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "14-",
    name: "14 Erzincan Tulum Peynir – Türkischer Nomadenkäse",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "15-",
    name: "15 Sürme Peynir – Frischkäse",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "16-",
    name: "16 Helloumi – Gebratener Halloumi",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "17-",
    name: "17 Tel Peynir – Fadenkäse",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "18-",
    name: "18 Siyah Zeytin – Schwarze Oliven",
    description: "Keine Allergene",
  },
  {
    id: "19-",
    name: "19 Yeşil Zeytin – Grüne Oliven",
    description: "Keine Allergene",
  },
  {
    id: "20-",
    name: "20 Tereyağı – Butter",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "21-",
    name: "21 Bal – Honig",
    description: "Keine Allergene",
  },
  {
    id: "22-",
    name: "22 Reçel Çeşitleri – Marmeladensorten",
    description: "Keine Allergene",
  },
  {
    id: "23-",
    name: "23 Sürme Çikolata – Nutella",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "24-",
    name: "24 Çemen – Brotaufstrich Türkische Gewürzpaste",
    description: "Keine Allergene",
  },
  {
    id: "25-",
    name: "25 Haşlanmış Yumurta – Gekochtes Ei",
    description: "(B) Enthält Eier",
  },
  {
    id: "26-",
    name: "26 Sahanda Yumurta – Spiegelei",
    description: "(B) Enthält Eier, (E) Enthält Milch/Laktose",
  },
  {
    id: "27-",
    name: "27 Sığır Dilim Salam – Rindfleischwurst",
    description:
      "(E) Enthält Milch/Laktose, (D) Enthält Senf, (G) Enthält Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker",
  },
  {
    id: "28-",
    name: "28 Dilim Pastırma – Rinderschinken",
    description:
      "(A) Enthält Gluten, (E) Enthält Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "29-",
    name: "29 Kızarmış Sucuk – Gebratene Sucuk",
    description:
      "(G) Enthält Sellerie, (C) Enthält Soja, (1) Farbstoffe, (2) Konservierungsstoffe, (4) Geschmacksverstärker, (3) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren, (9) Säuerungsmittel",
  },
  {
    id: "30-",
    name: "30 Hindi Sosis – Geflügelwürstchen",
    description:
      "(D) Enthält Senf, (G) Enthält Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "31-",
    name: "31 Patates – Kızarmış Bratkartoffeln",
    description: "Keine Allergene",
  },
  {
    id: "32-",
    name: "32 Kızartılmış Sebze – Gebratene Gemüse",
    description: "Keine Allergene",
  },
  {
    id: "33-",
    name: "33 Yoğurt – Joghurt",
    description: "(E) Enthält Milch/Laktose",
  },
  {
    id: "34-",
    name: "34 Tahin-Pekmez – Sesampaste mit Traubensirup",
    description: "(H) Enthält Sesam",
  },
  {
    id: "40-",
    name: "40 Klasik Kahvaltı",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "41-",
    name: "41 Kır Kahvaltısı",
    description:
      "(A) Gluten, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel",
  },
  {
    id: "42-",
    name: "42 Köyüm Kahvaltısı",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "43-",
    name: "43 Taksim Serpme Kahvaltı (2 Kişilik)",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (D) Senf, (H) Sesam, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "46-",
    name: "46 Peynirli Omlet",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "47-",
    name: "47 Pastırmalı Omlet",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "48-",
    name: "48 Sebzeli Omlet",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "49-",
    name: "49 Sade Omlet",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "53-",
    name: "53 Kaşarlı Tost",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "54-",
    name: "54 Sucuklu Kaşarlı Tost",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "55-",
    name: "55 Karışık Tost",
    description:
      "(A) Gluten, (C) Soja, (D) Senf, (G) Sellerie, (E) Milch/Laktose, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren, (9) Säuerungsmittel",
  },
  {
    id: "56-",
    name: "56 Sucuklu Yumurta Kaşarlı Tost",
    description:
      "(A) Gluten, (B) Eier, (C) Soja, (G) Sellerie, (E) Milch/Laktose (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "57-",
    name: "57 Kavurmalı Yumurta Kaşarlı Tost",
    description: "(A) Gluten, (E) Milch/Laktose, (B) Eier",
  },
  {
    id: "58-",
    name: "58 French Toast",
    description:
      "Arme Ritter (Toastbrot, Ei, Puderzucker, Zimt) (A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "61-",
    name: "61 Vejetaryen Sandviç",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam",
  },
  {
    id: "62-",
    name: "62 Yumurtalı Sandviç",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "63-",
    name: "63 Çıtır Tavuklu Sandviç",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "64-",
    name: "64 Ton Balıklı Sandviç",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose",
  },
  {
    id: "65-",
    name: "65 Köfteli Sandviç",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "70-",
    name: "70 Su Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "71-",
    name: "71 Patatesli Burma Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "72-",
    name: "72 Ispanaklı Burma Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "73-",
    name: "73 Peynirli Burma Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "74-",
    name: "74 Patatesli Sigara Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "75-",
    name: "75 Peynirli Sigara Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "76-",
    name: "76 Ispanaklı Sigara Böreği",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "80-",
    name: "80 Sade Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "81-",
    name: "81 Şekerli/Tahinli Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam",
  },
  {
    id: "82-",
    name: "82 Peynirli Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "83-",
    name: "83 Kaşarlı Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "84-",
    name: "84 Patatesli Gözleme",
    description: "(A) Gluten",
  },
  {
    id: "85-",
    name: "85 Ispanaklı Peynirli Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "86-",
    name: "86 Kıymalı Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "87-",
    name: "87 Kıymalı Kaşarlı Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "88-",
    name: "88 Karışık Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "89-",
    name: "89 Taksim Gözleme",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "91-",
    name: "91 Sade Menemen",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "92-",
    name: "92 Soğanlı, Sarımsaklı Menemen",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "93-",
    name: "93 Kıymalı Menemen",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "94-",
    name: "94 Yumurtalı Sucuklu Menemen",
    description:
      "(B) Eier, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren, (9) Säuerungsmittel",
  },
  {
    id: "95-",
    name: "95 Lahmacun",
    description: "(A) Gluten",
  },
  {
    id: "96-",
    name: "96 Kaşarlı Lahmacun",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "97-",
    name: "97 Cevizli Lahmacun",
    description: "(A) Gluten, (J) Nüsse",
  },
  {
    id: "98-",
    name: "98 Patates Kızartmalı (Pomm Lahmacun)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "100-",
    name: "100 Kıymalı Pide",
    description: "(A) Gluten",
  },
  {
    id: "101-",
    name: "101 Kuşbaşılı Pide",
    description: "(A) Gluten",
  },
  {
    id: "102-",
    name: "102 Kuşbaşılı-Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "103-",
    name: "103 Sucuklu-Kaşarlı Pide",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "104-",
    name: "104 Sucuklu-Yumurtalı-Kaşarlı Pide",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "105-",
    name: "105 Kavurmalı-Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "106-",
    name: "106 Pastırmalı-Kaşarlı Pide",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "107-",
    name: "107 Tavuklu-Kuşbaşı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "108-",
    name: "108 Tavuklu Pide",
    description: "(A) Gluten",
  },
  {
    id: "109-",
    name: "109 Ton Balıklı Pide",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose",
  },
  {
    id: "110-",
    name: "110 Mantarlı-Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "111-",
    name: "111 Peynirli Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "112-",
    name: "112 Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "113-",
    name: "113 Ispanaklı, Peynirli, Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "114-",
    name: "114 Kaşarlı Yumurtalı Pide",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "115-",
    name: "115 Patatesli Soğanlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "116-",
    name: "116 Vejetaryen Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "117-",
    name: "117 Tahinli, Cevizli, Kaşarlı, Şekerli Pide",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam, (J) Nüsse",
  },
  {
    id: "118-",
    name: "118 Zeytinli Kaşarlı Pide",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "119-",
    name: "119 Extra Yumurta / Ei",
    description: "(B) Eier",
  },
  {
    id: "120-",
    name: "120 Extra Kaşar / Käse",
    description: "(E) Milch/Laktose",
  },
  {
    id: "121-",
    name: "121 Pizza Margherita",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "122-",
    name: "122 Pizza Champignons",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "123-",
    name: "123 Pizza Knoblauchwurst",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "124-",
    name: "124 Pizza Thunfisch",
    description: "(A) Gluten, (E) Milch/Laktose, (F) Fisch, (G) Sellerie",
  },
  {
    id: "125-",
    name: "125 Pizza Salami",
    description:
      "(A) Gluten, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel",
  },
  {
    id: "126-",
    name: "126 Pizza Vegetarisch",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "127-",
    name: "127 Pizza Mexican",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "128-",
    name: "128 Pizza Hackfleisch",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "129-",
    name: "129 Pizza Spinaci",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "131-",
    name: "131 Patatesli, Soğanlı, Yumurtalı Tava",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "132-",
    name: "132 Ispanaklı, Soğanlı, Yumurtalı Tava",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "133-",
    name: "133 Kıymalı, Soğanlı, Yumurtalı Tava",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "134-",
    name: "134 Sucuklu Yumurtalı Tava",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "135-",
    name: "135 Pastırmalı Yumurtalı Tava",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "136-",
    name: "136 Kavurmali Yumurtalı Tava",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "137-",
    name: "137 Karışık Yumurtalı Tava",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "138-",
    name: "138 Karides Tava",
    description: "(E) Milch/Laktose, (M) Krebstiere",
  },
  {
    id: "140-",
    name: "140 Sac Kuzu",
    description: "(A) Gluten",
  },
  {
    id: "141-",
    name: "141 Sac Tavuk",
    description: "(A) Gluten",
  },
  {
    id: "142-",
    name: "142 Sac Selekli",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "143-",
    name: "143 Sac'ta Pilav Üstü Kavurma",
    description: "(A) Gluten, (R) Schalenfrüchte",
  },
  {
    id: "150-",
    name: "150 Kiremitte Kaşar Dolgulu Mantar",
    description: "(E) Milch/Laktose",
  },
  {
    id: "151-",
    name: "151 Kiremitte Ispanaklı, Peynirli Mantar",
    description: "(E) Milch/Laktose",
  },
  {
    id: "152-",
    name: "152 Kiremitte Kremalı Mantarlı Tavuk",
    description: "(E) Milch/Laktose",
  },
  {
    id: "153-",
    name: "153 Kiremitte Köfte Patates Kızartması, Kaşar",
    description: "(E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "154-",
    name: "154 Kiremitte Lavaş Kebap",
    description: "(A) Gluten",
  },
  {
    id: "160-",
    name: "160 Köri Soslu Tavuk",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "161-",
    name: "161 Barbekü Soslu Tavuk",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "162-",
    name: "162 Salsa Soslu Tavuk",
    description:
      "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (9) Säuerungsmittel",
  },
  {
    id: "163-",
    name: "163 Mantarlı Tavuk",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "164-",
    name: "164 Pilav Üstü Tavuk",
    description: "(R) Schalenfrüchte",
  },
  {
    id: "165-",
    name: "165 Tavuk Şnitzel (Mantarlı Soslu)",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (R) Schalenfrüchte",
  },
  {
    id: "170-",
    name: "170 Mantı Sarımsaklı, Yoğurtlu, Soslu",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (9) Säuerungsmittel, (10) Verdickungsmittel",
  },
  {
    id: "171-",
    name: "171 Mantı Sarımsaksız, Yoğurtlu, Soslu",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "172-",
    name: "172 Mantı Domates Soslu, Yoğurtlu, Sarımsaklı",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "173-",
    name: "173 Çıtır Mantı – Knusprige Teigtaschen",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (9) Säuerungsmittel, (10) Verdickungsmittel",
  },
  {
    id: "174-",
    name: "174 Mantı Ispanak Tarator",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "180-",
    name: "180 Napolí Usulü",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "181-",
    name: "181 Kremalı Tavuklu",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "182-",
    name: "182 Bolonez Soslu",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "183-",
    name: "183 Sebzeli Parmesanlı",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "184-",
    name: "184 Peynirli-Krema Soslu",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "185-",
    name: "185 Ispanaklı",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "186-",
    name: "186 Somonlu ve Ispanaklı",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (F) Fisch",
  },
  {
    id: "190-",
    name: "190 Patates Küçük – Pommes Klein",
    description: "Keine Allergene",
  },
  {
    id: "191-",
    name: "191 Patates Büyük – Pommes Gross",
    description: "Keine Allergene",
  },
  {
    id: "192-",
    name: "192 Tatlı Patates Kızartması – Süsskartoffel Pommes Frites",
    description: "Keine Allergene",
  },
  {
    id: "193-",
    name: "193 Hamburger",
    description: "(A) Gluten",
  },
  {
    id: "194-",
    name: "194 Cheeseburger",
    description:
      "Rind, Tomate, Salat, Zwiebel, Gurke, Ketchup, Senf, Cheddar (A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "195-",
    name: "195 Chicken Burger",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "196-",
    name: "196 Chicken Nuggets (9 Adet)",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (5) Phosphate",
  },
  {
    id: "197-",
    name: "197 Hot Mexican Burger",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "198-",
    name: "198 Ketçap – Ketchup",
    description: "(2) Konservierungsstoffe, (6) Süßungsmittel",
  },
  {
    id: "199-",
    name: "199 Mayonez – Mayonnaise",
    description: "(B) Eier, (D) Senf",
  },
  {
    id: "200-",
    name: "200 Cacık / Tzatziki",
    description: "(E) Milch/Laktose",
  },
  {
    id: "201-",
    name: "201 Havuç Tarator / Karotten Creme",
    description:
      "(B) Eier, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (J) Nüsse",
  },
  {
    id: "202-",
    name: "202 Ispanak Borani / Spinat Creme",
    description:
      "(B) Eier, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (J) Nüsse",
  },
  {
    id: "203-",
    name: "203 Humus mit Tahini",
    description: "(H) Sesam",
  },
  {
    id: "204-",
    name: "204 İçli Köfte (2 Stück)",
    description: "(A) Gluten",
  },
  {
    id: "205-",
    name: "205 Karışık Meze Tabağı / Gemischte Vorspeisen Platte",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam, (J) Nüsse",
  },
  {
    id: "206-",
    name: "206 Çoban Salatası / Hirtensalat",
    description: "(E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "207-",
    name: "207 Yeşil Salata / Grüne Salat",
    description: "Keine Allergene",
  },
  {
    id: "208-",
    name: "208 Tavuk Salata / Hähnchen Salat",
    description: "Keine Allergene",
  },
  {
    id: "209-",
    name: "209 Tonbalıklı Salata / Thunfisch Salat",
    description:
      "(E) Milch/Laktose, (F) Fisch (2) Konservierungsstoffe, (6) Süßungsmittel",
  },
  {
    id: "210-",
    name: "210 Fıstıklı Baklava (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "211-",
    name: "211 Cevizli Baklava (4 Adet)",
    description:
      "Baklava mit Walnüssen (4 Stück), (A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "212-",
    name: "212 Damat Baklavası (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "213-",
    name: "213 Söbiyet Kaymaklı (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "214-",
    name: "214 Yeşil Sarma Baklava (4 Adet)",
    description: "(A) Gluten, (J) Nüsse",
  },
  {
    id: "215-",
    name: "215 Havuç Dilimi Fıstıklı (1 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "216-",
    name: "216 Kadayıf Fıstıklı (1 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "217-",
    name: "217 Soğuk Baklava (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "218-",
    name: "218 Çikolatalı Baklava (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "219-",
    name: "219 Şekerpare (4 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "220-",
    name: "220 İrmik Helvası",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "221-",
    name: "221 Güllaç (Sezonluk)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "222-",
    name: "222 Katmer",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "223-",
    name: "223 Karışık Baklava Tabağı",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "224-",
    name: "224 Gemischte Baklava-Platte",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "225-",
    name: "225 Baklava Çeşidi (1 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "226-",
    name: "226 Dondurma (1 Top)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "227-",
    name: "227 Kaymak",
    description: "(E) Milch/Laktose",
  },
  {
    id: "234-",
    name: "234 Fırın Sütlaç",
    description: "(E) Milch/Laktose",
  },
  {
    id: "235-",
    name: "235 Kazandibi Damla Sakızlı",
    description: "(E) Milch/Laktose",
  },
  {
    id: "236-",
    name: "236 Keşkül",
    description: "(E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "237-",
    name: "237 Supangle",
    description: "(E) Milch/Laktose",
  },
  {
    id: "238-",
    name: "238 Profiterol",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "239-",
    name: "239 Aşure",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "240-",
    name: "240 Zerde",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "241-",
    name: "241 Extra Dondurma / Eis",
    description: "(E) Milch/Laktose",
  },
  {
    id: "242-",
    name: "242 Extra Kaymak / Sahnerahm",
    description: "(E) Milch/Laktose",
  },
  {
    id: "243-",
    name: "243 Çikolatalı",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "244-",
    name: "244 Muzlu",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "245-",
    name: "245 Çilekli",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "246-",
    name: "246 San Sebastian",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "247-",
    name: "247 Cheesecake",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "248-",
    name: "248 Tiramisu",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "249-",
    name: "249 Trilece",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "250-",
    name: "250 Eclair",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "251-",
    name: "251 Tuzlu Kurabiye (6 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "252-",
    name: "252 Tatlı Kurabiye (6 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "253-",
    name: "253 Karışık Kurabiye (12 Adet)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "255-",
    name: "255 Tereyağlı Mısır",
    description: "(E) Milch/Laktose",
  },
  {
    id: "256-",
    name: "256 Tereyağlı, Sarımsaklı Mısır",
    description: "(E) Milch/Laktose",
  },
  {
    id: "257-",
    name: "257 Tereyağlı, Kaşarlı, Baharatlı Mısır",
    description: "(E) Milch/Laktose",
  },
  {
    id: "258-",
    name: "258 Popcorn Salzig",
    description: "Keine Allergene",
  },
  {
    id: "259-",
    name: "259 Popcorn Süß",
    description: "Keine Allergene",
  },
  {
    id: "260-",
    name: "260 Patlamış Kestane (10 Adet)",
    description: "Keine Allergene",
  },
  {
    id: "261-",
    name: "261 Pistazien",
    description: "(J) Nüsse",
  },
  {
    id: "262-",
    name: "262 Haselnüsse",
    description: "(J) Nüsse",
  },
  {
    id: "263-",
    name: "263 Nussmischung",
    description: "(J) Nüsse",
  },
  {
    id: "264-",
    name: "264 Karışık Çerez",
    description: "(J) Nüsse",
  },
  {
    id: "265-",
    name: "265 Meyve Tabağı",
    description: "Keine Allergene",
  },
  {
    id: "266-",
    name: "266 Limonlu Havuç Çubuk",
    description: "Keine Allergene",
  },
  {
    id: "270-",
    name: "270 Kaffee",
    description: "(13) Koffein",
  },
  {
    id: "271-",
    name: "271 Cappuccino",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "272-",
    name: "272 Cappuccino mit Sahne",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "273-",
    name: "273 Espresso",
    description: "(13) Koffein",
  },
  {
    id: "274-",
    name: "274 Espresso Macchiato",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "275-",
    name: "275 Latte Macchiato",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "276-",
    name: "276 Milchkaffee",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "277-",
    name: "277 Türk Kahvesi (Türkischer Mokka)",
    description: "(13) Koffein",
  },
  {
    id: "278-",
    name: "278 Sütlü Türk Kahvesi",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "279-",
    name: "279 Salep mit Zimt",
    description: "Keine Allergene",
  },
  {
    id: "280-",
    name: "280 Heisse Schokolade mit Sahne",
    description: "(E) Milch/Laktose",
  },
  {
    id: "281-",
    name: "281 Heisse Schokolade ohne Sahne",
    description: "Keine Allergene",
  },
  {
    id: "282-",
    name: "282 Kalte Schokolade mit Sahne",
    description: "(E) Milch/Laktose",
  },
  {
    id: "283-",
    name: "283 Kalte Schokolade ohne Sahne",
    description: "(E) Milch/Laktose",
  },
  {
    id: "284-",
    name: "284 Heisse Zitrone",
    description: "Keine Allergene",
  },
  {
    id: "285-",
    name: "285 Extra Honig",
    description: "Keine Allergene",
  },
  {
    id: "286-",
    name: "286 Extra Zitrone",
    description: "Keine Allergene",
  },
  {
    id: "290-",
    name: "290 Schwarzer Tee (Klein)",
    description: "Keine Allergene",
  },
  {
    id: "291-",
    name: "291 Schwarzer Tee (Gross)",
    description: "Keine Allergene",
  },
  {
    id: "292-",
    name: "292 Taksim Notfall Tee",
    description: "Keine Allergene",
  },
  {
    id: "293-",
    name: "293 Apfel Tee",
    description: "Keine Allergene",
  },
  {
    id: "294-",
    name: "294 Zitronen Tee",
    description: "Keine Allergene",
  },
  {
    id: "295-",
    name: "295 Orangen Tee",
    description: "Keine Allergene",
  },
  {
    id: "296-",
    name: "296 Sterne Zimt-Lemon Tee",
    description: "Keine Allergene",
  },
  {
    id: "297-",
    name: "297 Hagebuttentee",
    description: "Keine Allergene",
  },
  {
    id: "298-",
    name: "298 Salbei Tee",
    description: "Keine Allergene",
  },
  {
    id: "299-",
    name: "299 Lindenblütentee",
    description: "Keine Allergene",
  },
  {
    id: "300-",
    name: "300 Erkältung Tee",
    description: "Keine Allergene",
  },
  {
    id: "301-",
    name: "301 Fenchel-Anis-Kümmel Tee",
    description: "Keine Allergene",
  },
  {
    id: "302-",
    name: "302 Bio Grüntee Jasmin",
    description: "Keine Allergene",
  },
  {
    id: "303-",
    name: "303 Vita Orange + 7 Vitamine",
    description: "Keine Allergene",
  },
  {
    id: "304-",
    name: "304 Pfefferminztee",
    description: "Keine Allergene",
  },
  {
    id: "305-",
    name: "305 Kamillenblütentee",
    description: "Keine Allergene",
  },
  {
    id: "306-",
    name: "306 Sommerbeeren Tee",
    description: "Keine Allergene",
  },
  {
    id: "307-",
    name: "307 Early Grey",
    description: "Keine Allergene",
  },
  {
    id: "308-",
    name: "308 Apfelfrüchte Tee",
    description: "Keine Allergene",
  },
  {
    id: "400-",
    name: "400 Coca-Cola (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "401-",
    name: "401 Coca-Cola Light (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "402-",
    name: "402 Fanta (0,3 L)",
    description: "(1) Farbstoffe, (4) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "403-",
    name: "403 Sprite (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "404-",
    name: "404 Mezzo Mix (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "405-",
    name: "405 Apfelsaftschorle (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "406-",
    name: "406 Bitter Lemon (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "407-",
    name: "407 Tonic Water (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "408-",
    name: "408 Ginger Ale (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "409-",
    name: "409 ORANGINA ORANGE / ROUGE (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "410-",
    name: "410 Ayran (E) (0,25 L)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "411-",
    name: "411 Red Bull (0,25 L)",
    description:
      "(6) Süßungsmittel, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "412-",
    name: "412 Moloko (0,25 L)",
    description: "(6) Süßungsmittel, (14) Chinin, (15) Taurin",
  },
  {
    id: "413-",
    name: "413 Black Energy (0,25 L)",
    description:
      "(1) Farbstoffe, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "414-",
    name: "414 Wassermelone",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "415-",
    name: "415 Blueberry",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "416-",
    name: "416 Lemon",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "417-",
    name: "417 Pomegranate",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "418-",
    name: "418 Pfirsich",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "419-",
    name: "419 Blueberry (0,5 L)",
    description:
      "(2) Konservierungsstoffe, (3) Antioxidationsmittel, (5) Phosphate, (9) Säuerungsmittel",
  },
  {
    id: "420-",
    name: "420 Pfirsich (0,5 L)",
    description:
      "(2) Konservierungsstoffe, (3) Antioxidationsmittel, (5) Phosphate, (9) Säuerungsmittel",
  },
  {
    id: "421-",
    name: "421 Hausgemachte Limonade (0,40 L)",
    description: "Keine Allergene",
  },
  {
    id: "422-",
    name: "422 Mineralwasser (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "423-",
    name: "423 Stilles Wasser (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "425-",
    name: "425 Coconut Kiss",
    description: "(E) Milch/Laktose, (6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "426-",
    name: "426 Ipanema",
    description: "(1) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "427-",
    name: "427 Paradisevogel",
    description: "(1) Farbstoffe, (6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "428-",
    name: "428 Speedy Gonzales",
    description: "(1) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "429-",
    name: "429 Virgin Piña Colada",
    description: "(E) Milch/Laktose",
  },
  {
    id: "430-",
    name: "430 Virgin Mojito",
    description: "Keine Allergene",
  },
  {
    id: "431-",
    name: "431 Drivers",
    description: "(6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "432-",
    name: "432 Red Bull Kirsch",
    description:
      "(6) Süßungsmittel, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "433-",
    name: "433 Kinder Kokteyl",
    description: "(E) Milch/Laktose, (6) Süßungsmittel",
  },
  {
    id: "434-",
    name: "434 Apfelsaft (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "435-",
    name: "435 Orangensaft (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "436-",
    name: "436 Ananassaft (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "437-",
    name: "437 Banane (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "438-",
    name: "438 Maracuja (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "439-",
    name: "439 Sauerkirsche (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "440-",
    name: "440 Mango (0,3L)",
    description: "Keine Allergene",
  },
  {
    id: "441-",
    name: "441 Banane-Kirsche (KIBA) (0,3 L)",
    description: "Keine Allergene",
  },
];

export default menuFoods;
