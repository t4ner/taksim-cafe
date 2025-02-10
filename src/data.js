const menuFoods = [
  {
    id: "01-",
    name: "01 MERCİMEK ÇORBASI – LINSENSUPPE",
    description: "Keine Allergene",
  },
  {
    id: "02-",
    name: "02 YAYLA ÇORBASI – JOGHURTSUPPE NACH TÜRKISCHER ART",
    description: "(A) Glutenhaltiges Getreide, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "03-",
    name: "03 İŞKEMBE ÇORBASI – KUTTELSUPPE",
    description: "(A) Glutenhaltiges Getreide, (E) Milch/Laktose",
  },
  {
    id: "04-",
    name: "04 KELLE - PAÇA ÇORBASI",
    description: "Keine Allergene",
  },
  {
    id: "05-",
    name: "05 BEYKOZ ÇORBASI – GEMISCHTE LAMMKOPF- UND KUTTELSUPPE",
    description: "(A) Glutenhaltiges Getreide, (E) Milch/Laktose",
  },
  {
    id: "06-",
    name: "06 BEYRAN ÇORBA – LAMMFLEISCH MIT REIS UND KNOBLAUCH",
    description: "(A) Glutenhaltiges Getreide",
  },
  {
    id: "10-",
    name: "10 DOMATES – TOMATEN",
    description: "Keine Allergene",
  },
  {
    id: "11-",
    name: "11 SALATALIK – GURKE",
    description: "Keine Allergene",
  },
  {
    id: "12-",
    name: "12 BEYAZ PEYNİR – HIRTENKÄSE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "13-",
    name: "13 DİLİM PEYNİR – GOUDA",
    description: "(E) Milch/Laktose",
  },
  {
    id: "14-",
    name: "14 ERZİNCAN TULUM PEYNİR – TÜRKISCHER NOMADENKÄSE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "15-",
    name: "15 SÜRME PEYNİR – FRISCHKÄSE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "16-",
    name: "16 HELLOUMİ – GEBRATENER HALLOUMI",
    description: "(E) Milch/Laktose",
  },
  {
    id: "17-",
    name: "17 TEL PEYNİR – FADENKÄSE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "18-",
    name: "18 SİYAH ZEYTİN – SCHWARZE OLIVEN",
    description: "Keine Allergene",
  },
  {
    id: "19-",
    name: "19 YEŞİL ZEYTİN – GRÜNE OLIVEN",
    description: "Keine Allergene",
  },
  {
    id: "20-",
    name: "20 TEREYAĞI – BUTTER",
    description: "(E) Milch/Laktose",
  },
  {
    id: "21-",
    name: "21 BAL – HONIG",
    description: "Keine Allergene",
  },
  {
    id: "22-",
    name: "22 REÇEL ÇEŞİTLERİ – MARMELADENSORTEN",
    description: "Keine Allergene",
  },
  {
    id: "23-",
    name: "23 SÜRME ÇİKOLATA – NUTELLA",
    description: "(E) Milch/Laktose",
  },
  {
    id: "24-",
    name: "24 ÇEMEN – BROTAUFSTRICH TÜRKISCHE GEWÜRZPASTE",
    description: "Keine Allergene",
  },
  {
    id: "25-",
    name: "25 HAŞLANMIŞ YUMURTA – GEKOCHTES EI",
    description: "(B) Eier",
  },
  {
    id: "26-",
    name: "26 SAHANDA YUMURTA – SPIEGELEI",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "27-",
    name: "27 SIĞIR DİLİM SALAM – RINDFLEISCHWURST",
    description:
      "(E) Milch/Laktose, (D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker",
  },
  {
    id: "28-",
    name: "28 DİLİM PASTIRMA – RINDERSCHINKEN",
    description:
      "(A) Gluten, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "29-",
    name: "29 KIZARMIŞ SUCUK – GEBRATENE SUCUK",
    description:
      "(G) Sellerie, (C) Soja, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren, (9) Säuerungsmittel",
  },
  {
    id: "30-",
    name: "30 HİNDİ SOSİS – GEFLÜGELWÜRSTCHEN",
    description:
      "(D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "31-",
    name: "31 PATATES – KIZARMIŞ BRATKARTOFFELN",
    description: "Keine Allergene",
  },
  {
    id: "32-",
    name: "32 KIZARTILMIŞ SEBZE – GEBRATENES GEMÜSE",
    description: "Keine Allergene",
  },
  {
    id: "33-",
    name: "33 YOĞURT – JOGHURT",
    description: "(E) Milch/Laktose",
  },
  {
    id: "34-",
    name: "34 TAHİN-PEKMEZ – SESAMPASTE MIT TRAUBENSIRUP",
    description: "(H) Sesam",
  },
  {
    id: "40-",
    name: "40 KLASİK KAHVALTI",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "41-",
    name: "41 KIR KAHVALTISI",
    description:
      "(A) Gluten, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel",
  },
  {
    id: "42-",
    name: "42 KÖYÜM KAHVALTISI",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "43-",
    name: "43 TAKSİM SERPME KAHVALTI (2 KİŞİLİK)",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (D) Senf, (H) Sesam, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "46-",
    name: "46 PEYNİRLİ OMLET",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "47-",
    name: "47 PASTIRMALI OMLET",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "48-",
    name: "48 SEBZELİ OMLET",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "49-",
    name: "49 SADE OMLET",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "53-",
    name: "53 KAŞARLI TOST",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "54-",
    name: "54 SUCUKLU KAŞARLI TOST",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "55-",
    name: "55 KARIŞIK TOST",
    description:
      "(A) Gluten, (C) Soja, (D) Senf, (G) Sellerie, (E) Milch/Laktose, (1) Farbstoffe, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren, (9) Säuerungsmittel",
  },
  {
    id: "95-",
    name: "95 PATATESLİ, SOĞANLI, YUMURTALI TAVA",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "96-",
    name: "96 ISPANAKLI, SOĞANLI, YUMURTALI TAVA",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "97-",
    name: "97 KIYMALI, SOĞANLI, YUMURTALI TAVA",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "98-",
    name: "98 SUCUKLU YUMURTALI TAVA",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "99-",
    name: "99 PASTIRMALI YUMURTALI TAVA",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (5) Phosphate, (7) Stabilisatoren",
  },
  {
    id: "100-",
    name: "100 KAVURMALI YUMURTALI TAVA",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "101-",
    name: "101 KARIŞIK YUMURTALI TAVA",
    description: "(B) Eier, (E) Milch/Laktose",
  },
  {
    id: "102-",
    name: "102 KARİDES TAVA",
    description: "(E) Milch/Laktose, (M) Krebstiere",
  },
  {
    id: "103-",
    name: "103 HAMSI TAVA / SARDELLEN",
    description: "(A) Gluten, (F) Fisch",
  },
  {
    id: "104-",
    name: "104 KIYMALI PİDE",
    description: "(A) Gluten",
  },
  {
    id: "105-",
    name: "105 KUŞBAŞILI PİDE",
    description: "(A) Gluten",
  },
  {
    id: "106-",
    name: "106 KUŞBAŞILI-KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "107-",
    name: "107 SUCUKLU-KAŞARLI PİDE",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "108-",
    name: "108 SUCUKLU-YUMURTALI-KAŞARLI PİDE",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "109-",
    name: "109 KAVURMALI-KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "110-",
    name: "110 PASTIRMALI-KAŞARLI PİDE",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "111-",
    name: "111 TAVUKLU-KUŞBAŞI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "112-",
    name: "112 TAVUKLU PİDE",
    description: "(A) Gluten",
  },
  {
    id: "113-",
    name: "113 TON BALIKLI PİDE",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose",
  },
  {
    id: "114-",
    name: "114 MANTARLI-KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "115-",
    name: "115 PEYNİRLİ PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "116-",
    name: "116 KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "117-",
    name: "117 ISPANAKLI, PEYNİRLİ, KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "118-",
    name: "118 KAŞARLI-YUMURTALI PİDE",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "119-",
    name: "119 PATATESLİ-SOĞANLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "120-",
    name: "120 VEJETARYEN PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "121-",
    name: "121 TAHİNLİ, CEVİZLİ, KAŞARLI, ŞEKERLİ PİDE",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam, (J) Nüsse",
  },
  {
    id: "122-",
    name: "122 ZEYTİNLİ-KAŞARLI PİDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "123-",
    name: "123 EXTRA YUMURTA / EI",
    description: "(B) Eier",
  },
  {
    id: "124-",
    name: "124 EXTRA KAŞAR / KÄSE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "125-",
    name: "125 LAHMACUN",
    description: "(A) Gluten",
  },
  {
    id: "126-",
    name: "126 KAŞARLI LAHMACUN",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "127-",
    name: "127 CEVİZLİ LAHMACUN",
    description: "(A) Gluten, (J) Nüsse",
  },
  {
    id: "128-",
    name: "128 PATATES KIZARTMALI (POMMES LAHMACUN)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "129-",
    name: "129 PIZZA MARGHERITA",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "130-",
    name: "130 PIZZA CHAMPIGNONS",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "131-",
    name: "131 PIZZA KNOBLAUCHWURST",
    description:
      "(A) Gluten, (E) Milch/Laktose, (G) Sellerie, (C) Soja, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel, (7) Stabilisatoren",
  },
  {
    id: "132-",
    name: "132 PIZZA THUNFISCH",
    description: "(A) Gluten, (E) Milch/Laktose, (F) Fisch, (G) Sellerie",
  },
  {
    id: "133-",
    name: "133 PIZZA SALAMI",
    description:
      "(A) Gluten, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (2) Konservierungsstoffe, (3) Geschmacksverstärker, (4) Antioxidationsmittel",
  },
  {
    id: "134-",
    name: "134 PIZZA VEGETARISCH",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "135-",
    name: "135 PIZZA MEXICAN",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "136-",
    name: "136 PIZZA HACKFLEISCH",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "137-",
    name: "137 PIZZA SPINACI",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "140-",
    name: "140 SAC KUZU",
    description: "(A) Gluten",
  },
  {
    id: "141-",
    name: "141 SAC TAVUK",
    description: "(A) Gluten",
  },
  {
    id: "142-",
    name: "142 SAC SELEKLİ",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "143-",
    name: "143 SAC‘TA PİLAV ÜSTÜ KAVURMA",
    description: "(A) Gluten",
  },
  {
    id: "144-",
    name: "144 SAC CİĞER",
    description: "(A) Gluten",
  },
  {
    id: "145-",
    name: "145 SAC VEJETARYEN",
    description: "(A) Gluten",
  },
  {
    id: "146-",
    name: "146 EXTRA REIS",
    description: "Keine Allergene",
  },
  {
    id: "150-",
    name: "150 KİREMİTTE KAŞAR DOLGULU MANTAR",
    description: "(E) Milch/Laktose",
  },
  {
    id: "151-",
    name: "151 KİREMİTTE ISPANAKLI, PEYNİRLİ MANTAR",
    description: "(E) Milch/Laktose",
  },
  {
    id: "152-",
    name: "152 KİREMİTTE KREMALI MANTARLI TAVUK",
    description: "(E) Milch/Laktose",
  },
  {
    id: "153-",
    name: "153 KİREMİTTE KÖFTE PATATES KIZARTMASI, KAŞAR",
    description: "(E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "154-",
    name: "154 KİREMİTTE LAVAŞ KEBAP",
    description: "(A) Gluten",
  },
  {
    id: "155-",
    name: "155 KİREMİTTE BEYAZ PEYNİR / FETA-PFANNE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "156-",
    name: "156 KİREMİTTE BEYTİ",
    description: "(A) Gluten, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "160-",
    name: "160 KÖRİ SOSLU TAVUK",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "161-",
    name: "161 BARBEKÜ SOSLU TAVUK",
    description: "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "162-",
    name: "162 SALSA SOSLU TAVUK",
    description:
      "(A) Gluten, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (9) Säuerungsmittel",
  },
  {
    id: "163-",
    name: "163 MANTARLI TAVUK",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "164-",
    name: "164 PİLAV ÜSTÜ TAVUK",
    description: "(R) Schalenfrüchte",
  },
  {
    id: "165-",
    name: "165 TAVUK ŞİNİTZEL (MANTARLI SOSLU)",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (R) Schalenfrüchte",
  },
  {
    id: "170-",
    name: "170 MANTI SARIMSAKLI, YOĞURTLU, SOSLU",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (9) Säuerungsmittel, (10) Verdickungsmittel",
  },
  {
    id: "171-",
    name: "171 MANTI SARIMSAKSIZ, YOĞURTLU, SOSLU",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "172-",
    name: "172 MANTI DOMATES SOSLU, YOĞURTLU, SARIMSAKLI",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "173-",
    name: "173 ÇITIR MANTI – KNUSPRIGE TEIGTASCHEN",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (D) Senf, (G) Sellerie, (9) Säuerungsmittel, (10) Verdickungsmittel",
  },
  {
    id: "174-",
    name: "174 MANTI ISPANAK TARATOR",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "180-",
    name: "180 NAPOLİ USULÜ",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "181-",
    name: "181 KREMALI TAVUKLU",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "182-",
    name: "182 BOLONEZ SOSLU",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie",
  },
  {
    id: "183-",
    name: "183 SEBZELİ PARMESANLI",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "184-",
    name: "184 PEYNİRLİ-KREMA SOSLU",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "185-",
    name: "185 ISPANAKLI",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose",
  },
  {
    id: "186-",
    name: "186 SOMONLU VE ISPANAKLI",
    description: "(A) Gluten, (B) Eier, (E) Milch/Laktose, (F) Fisch",
  },
  {
    id: "190-",
    name: "190 PATATES KÜÇÜK – POMMES KLEIN",
    description: "Keine Allergene",
  },
  {
    id: "191-",
    name: "191 PATATES BÜYÜK – POMMES GROSS",
    description: "Keine Allergene",
  },
  {
    id: "192-",
    name: "192 TATLI PATATES KIZARTMASI – SÜSSKARTOFFEL POMMES FRITES",
    description: "Keine Allergene",
  },
  {
    id: "193-",
    name: "193 HAMBURGER",
    description: "(A) Gluten",
  },
  {
    id: "194-",
    name: "194 CHEESEBURGER",
    description:
      "Rind, Tomate, Salat, Zwiebel, Gurke, Ketchup, Senf, Cheddar (A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "195-",
    name: "195 CHICKEN BURGER",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "196-",
    name: "196 CHICKEN NUGGETS (9 ADET)",
    description:
      "(A) Gluten, (B) Eier, (E) Milch/Laktose, (G) Sellerie, (5) Phosphate",
  },
  {
    id: "197-",
    name: "197 HOT MEXICAN BURGER",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "198-",
    name: "198 KETÇAP – KETCHUP",
    description: "(2) Konservierungsstoffe, (6) Süßungsmittel",
  },
  {
    id: "199-",
    name: "199 MAYONEZ – MAYONNAISE",
    description: "(B) Eier, (D) Senf",
  },
  {
    id: "200-",
    name: "200 CACIK / TZATZIKI",
    description: "(E) Milch/Laktose",
  },
  {
    id: "201-",
    name: "201 HAVUÇ TARATOR / KAROTTEN CREME",
    description:
      "(B) Eier, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (J) Nüsse",
  },
  {
    id: "202-",
    name: "202 ISPANAK BORANI / SPINAT CREME",
    description:
      "(B) Eier, (D) Senf, (E) Milch/Laktose, (G) Sellerie, (J) Nüsse",
  },
  {
    id: "203-",
    name: "203 HUMUS MIT TAHINI",
    description: "(H) Sesam",
  },
  {
    id: "204-",
    name: "204 İÇLİ KÖFTE (2 STÜCK)",
    description: "(A) Gluten",
  },
  {
    id: "205-",
    name: "205 KARIŞIK MEZE TABAĞI / GEMISCHTE VORSPEISEN PLATTE",
    description: "(A) Gluten, (E) Milch/Laktose, (H) Sesam, (J) Nüsse",
  },
  {
    id: "206-",
    name: "206 ÇOBAN SALATASI / HIRTENSALAT",
    description: "(E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "207-",
    name: "207 YEŞİL SALATA / GRÜNER SALAT",
    description: "Keine Allergene",
  },
  {
    id: "208-",
    name: "208 TAVUK SALATA / HÄHNCHEN SALAT",
    description: "Keine Allergene",
  },
  {
    id: "209-",
    name: "209 TONBALIKLI SALATA / THUNFISCH SALAT",
    description:
      "(E) Milch/Laktose, (F) Fisch, (2) Konservierungsstoffe, (6) Süßungsmittel",
  },
  {
    id: "210-",
    name: "210 FISTIKLI BAKLAVA (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "211-",
    name: "211 CEVİZLİ BAKLAVA (4 ADET)",
    description:
      "Baklava mit Walnüssen (4 Stück) (A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "212-",
    name: "212 DAMAT BAKLAVASI (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "213-",
    name: "213 SÖBİYET KAYMAKLI (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "214-",
    name: "214 YEŞİL SARMA BAKLAVA (4 ADET)",
    description: "(A) Gluten, (J) Nüsse",
  },
  {
    id: "215-",
    name: "215 HAVUÇ DİLİMİ FISTIKLI (1 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "216-",
    name: "216 KADAYIF FISTIKLI (1 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "217-",
    name: "217 SOĞUK BAKLAVA (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "218-",
    name: "218 ÇİKOLATALI BAKLAVA (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "219-",
    name: "219 ŞEKERPARE (4 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "220-",
    name: "220 İRMİK HELVASI",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "221-",
    name: "221 GÜLLAÇ (SEZONLUK)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "222-",
    name: "222 KATMER",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "223-",
    name: "223 KARIŞIK BAKLAVA TABAĞI",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "224-",
    name: "224 BAKLAVA ÇEŞİDİ (1 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "225-",
    name: "225 DONDURMA (1 TOP)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "226-",
    name: "226 KAYMAK",
    description: "(E) Milch/Laktose",
  },
  {
    id: "228-",
    name: "228 KÜNEFE PEYNİRLİ",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "229-",
    name: "229 KÜNEFE NUTELLA",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "230-",
    name: "230 KÜNEFE TAHİNLİ",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse, (H) Sesam",
  },
  {
    id: "231-",
    name: "231 KÜNEFE CEVİZLİ, BALLI",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "232-",
    name: "232 EXTRA DONDURMA",
    description: "(E) Milch/Laktose",
  },
  {
    id: "233-",
    name: "233 EXTRA KAYMAK",
    description: "(E) Milch/Laktose",
  },
  {
    id: "234-",
    name: "234 FIRIN SÜTLAÇ",
    description: "(E) Milch/Laktose",
  },
  {
    id: "235-",
    name: "235 KAZANDİBİ DAMLA SAKIZLI",
    description: "(E) Milch/Laktose",
  },
  {
    id: "236-",
    name: "236 KEŞKÜL",
    description: "(E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "237-",
    name: "237 SUPANGLE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "238-",
    name: "238 PROFİTEROL",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "239-",
    name: "239 AŞURE",
    description: "(A) Gluten, (E) Milch/Laktose, (J) Nüsse",
  },
  {
    id: "240-",
    name: "240 ZERDE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "241-",
    name: "241 EXTRA DONDURMA / EIS",
    description: "(E) Milch/Laktose",
  },
  {
    id: "242-",
    name: "242 EXTRA KAYMAK / SAHNERAHM",
    description: "(E) Milch/Laktose",
  },
  {
    id: "243-",
    name: "243 ÇİKOLATALI",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "244-",
    name: "244 MUZLU",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "245-",
    name: "245 ÇİLEKLİ",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "246-",
    name: "246 SAN SEBASTİAN",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "247-",
    name: "247 CHEESECAKE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "248-",
    name: "248 TİRAMİSU",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "249-",
    name: "249 TRİLEÇE",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "250-",
    name: "250 EKLER / ÉCLAIR",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "251-",
    name: "251 TUZLU KURABİYE (6 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "252-",
    name: "252 TATLI KURABİYE (6 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "253-",
    name: "253 KARIŞIK KURABİYE (12 ADET)",
    description: "(A) Gluten, (E) Milch/Laktose",
  },
  {
    id: "255-",
    name: "255 TEREYAĞLI MISIR",
    description: "(E) Milch/Laktose",
  },
  {
    id: "256-",
    name: "256 TEREYAĞLI, SARIMSAKLI MISIR",
    description: "(E) Milch/Laktose",
  },
  {
    id: "257-",
    name: "257 TEREYAĞLI, KAŞARLI, BAHARATLI MISIR",
    description: "(E) Milch/Laktose",
  },
  {
    id: "258-",
    name: "258 POPCORN SALZIG",
    description: "Keine Allergene",
  },
  {
    id: "259-",
    name: "259 POPCORN SÜSS",
    description: "Keine Allergene",
  },
  {
    id: "260-",
    name: "260 PATLAMIŞ KESTANE (10 ADET)",
    description: "Keine Allergene",
  },
  {
    id: "261-",
    name: "261 PISTAZIEN",
    description: "(J) Nüsse",
  },
  {
    id: "262-",
    name: "262 HASELNÜSSE",
    description: "(J) Nüsse",
  },
  {
    id: "263-",
    name: "263 NUSSMISCHUNG",
    description: "(J) Nüsse",
  },
  {
    id: "264-",
    name: "264 KARIŞIK ÇEREZ",
    description: "(J) Nüsse",
  },
  {
    id: "265-",
    name: "265 MEYVE TABAĞI",
    description: "Keine Allergene",
  },
  {
    id: "266-",
    name: "266 LİMONLU HAVUÇ ÇUBUK",
    description: "Keine Allergene",
  },
  {
    id: "270-",
    name: "270 KAFFEE",
    description: "(13) Koffein",
  },
  {
    id: "271-",
    name: "271 CAPPUCCINO",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "272-",
    name: "272 CAPPUCCINO MIT SAHNE",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "273-",
    name: "273 ESPRESSO",
    description: "(13) Koffein",
  },
  {
    id: "274-",
    name: "274 ESPRESSO MACCHIATO",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "275-",
    name: "275 LATTE MACCHIATO",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "276-",
    name: "276 MILCHKAFFEE",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "277-",
    name: "277 TÜRK KAHVESİ (TÜRKISCHER MOKKA)",
    description: "(13) Koffein",
  },
  {
    id: "278-",
    name: "278 SÜTLÜ TÜRK KAHVESİ",
    description: "(E) Milch/Laktose, (13) Koffein",
  },
  {
    id: "279-",
    name: "279 SALEP MIT ZIMT",
    description: "Keine Allergene",
  },
  {
    id: "280-",
    name: "280 HEISSE SCHOKOLADE MIT SAHNE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "281-",
    name: "281 HEISSE SCHOKOLADE OHNE SAHNE",
    description: "Keine Allergene",
  },
  {
    id: "282-",
    name: "282 KALTE SCHOKOLADE MIT SAHNE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "283-",
    name: "283 KALTE SCHOKOLADE OHNE SAHNE",
    description: "(E) Milch/Laktose",
  },
  {
    id: "284-",
    name: "284 HEISSE ZITRONE",
    description: "Keine Allergene",
  },
  {
    id: "285-",
    name: "285 EXTRA HONIG",
    description: "Keine Allergene",
  },
  {
    id: "286-",
    name: "286 EXTRA ZITRONE",
    description: "Keine Allergene",
  },
  {
    id: "290-",
    name: "290 SCHWARZER TEE (KLEIN)",
    description: "Keine Allergene",
  },
  {
    id: "291-",
    name: "291 SCHWARZER TEE (GROSS)",
    description: "Keine Allergene",
  },
  {
    id: "292-",
    name: "292 TAKSİM NOTFALL TEE",
    description: "Keine Allergene",
  },
  {
    id: "293-",
    name: "293 APFEL TEE",
    description: "Keine Allergene",
  },
  {
    id: "294-",
    name: "294 ZITRONEN TEE",
    description: "Keine Allergene",
  },
  {
    id: "295-",
    name: "295 ORANGEN TEE",
    description: "Keine Allergene",
  },
  {
    id: "296-",
    name: "296 STERNE ZIMT-LEMON TEE",
    description: "Keine Allergene",
  },
  {
    id: "297-",
    name: "297 HAGEBUTTENTEE",
    description: "Keine Allergene",
  },
  {
    id: "298-",
    name: "298 SALBEI TEE",
    description: "Keine Allergene",
  },
  {
    id: "299-",
    name: "299 LINDENBLÜTENTEE",
    description: "Keine Allergene",
  },
  {
    id: "300-",
    name: "300 ERKÄLTUNGSTEE",
    description: "Keine Allergene",
  },
  {
    id: "301-",
    name: "301 FENCHEL-ANIS-KÜMMEL TEE",
    description: "Keine Allergene",
  },
  {
    id: "302-",
    name: "302 BIO GRÜNTEE JASMIN",
    description: "Keine Allergene",
  },
  {
    id: "303-",
    name: "303 VITA ORANGE + 7 VITAMINE",
    description: "Keine Allergene",
  },
  {
    id: "304-",
    name: "304 PFEFFERMINZTEE",
    description: "Keine Allergene",
  },
  {
    id: "305-",
    name: "305 KAMILLENBLÜTENTEE",
    description: "Keine Allergene",
  },
  {
    id: "306-",
    name: "306 SOMMERBEEREN TEE",
    description: "Keine Allergene",
  },
  {
    id: "307-",
    name: "307 EARLY GREY",
    description: "Keine Allergene",
  },
  {
    id: "308-",
    name: "308 APFELFRÜCHTE TEE",
    description: "Keine Allergene",
  },
  {
    id: "400-",
    name: "400 COCA-COLA (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "401-",
    name: "401 COCA-COLA LIGHT (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "402-",
    name: "402 FANTA (0,3 L)",
    description: "(1) Farbstoffe, (4) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "403-",
    name: "403 SPRITE (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "404-",
    name: "404 MEZZO MIX (0,3 L)",
    description: "(4) Farbstoffe, (6) Süßungsmittel, (13) Koffein",
  },
  {
    id: "405-",
    name: "405 APFELSAFTSCHORLE (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "406-",
    name: "406 BITTER LEMON (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "407-",
    name: "407 TONIC WATER (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "408-",
    name: "408 GINGER ALE (0,3 L)",
    description: "(6) Süßungsmittel",
  },
  {
    id: "409-",
    name: "409 ORANGINA ORANGE / ROUGE (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "410-",
    name: "410 AYRAN (0,25 L)",
    description: "(E) Milch/Laktose",
  },
  {
    id: "411-",
    name: "411 RED BULL (0,25 L)",
    description:
      "(6) Süßungsmittel, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "412-",
    name: "412 MOLOKO (0,25 L)",
    description: "(6) Süßungsmittel, (14) Chinin, (15) Taurin",
  },
  {
    id: "413-",
    name: "413 BLACK ENERGY (0,25 L)",
    description:
      "(1) Farbstoffe, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "414-",
    name: "414 WASSERMELONE",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "415-",
    name: "415 BLUEBERRY",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "416-",
    name: "416 LEMON",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "417-",
    name: "417 POMEGRANATE",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "418-",
    name: "418 PFIRSICH",
    description: "(3) Antioxidationsmittel, (9) Säuerungsmittel, (13) Koffein",
  },
  {
    id: "419-",
    name: "419 BLUEBERRY (0,5 L)",
    description:
      "(2) Konservierungsstoffe, (3) Antioxidationsmittel, (5) Phosphate, (9) Säuerungsmittel",
  },
  {
    id: "420-",
    name: "420 PFIRSICH (0,5 L)",
    description:
      "(2) Konservierungsstoffe, (3) Antioxidationsmittel, (5) Phosphate, (9) Säuerungsmittel",
  },
  {
    id: "421-",
    name: "421 HAUSGEMACHTE LIMONADE (0,40 L)",
    description: "Keine Allergene",
  },
  {
    id: "422-",
    name: "422 MINERALWASSER (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "423-",
    name: "423 STILLES WASSER (0,25 L)",
    description: "Keine Allergene",
  },
  {
    id: "425-",
    name: "425 COCONUT KISS",
    description: "(E) Milch/Laktose, (6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "426-",
    name: "426 IPANEMA",
    description: "(1) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "427-",
    name: "427 PARADISEVOGEL",
    description: "(1) Farbstoffe, (6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "428-",
    name: "428 SPEEDY GONZALES",
    description: "(1) Farbstoffe, (6) Süßungsmittel",
  },
  {
    id: "429-",
    name: "429 VİRGİN PİNA COLADA",
    description: "(E) Milch/Laktose",
  },
  {
    id: "430-",
    name: "430 VİRGİN MOJİTO",
    description: "Keine Allergene",
  },
  {
    id: "431-",
    name: "431 DRİVERS",
    description: "(6) Süßungsmittel, (9) Säuerungsmittel",
  },
  {
    id: "432-",
    name: "432 RED BULL KIRSCH",
    description:
      "(6) Süßungsmittel, (9) Säuerungsmittel, (13) Koffein, (15) Taurin",
  },
  {
    id: "433-",
    name: "433 KİNDER KOKTEYL",
    description: "(E) Milch/Laktose, (6) Süßungsmittel",
  },
  {
    id: "434-",
    name: "434 APFELSAFT (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "435-",
    name: "435 ORANGENSAFT (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "436-",
    name: "436 ANANASSAFT (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "437-",
    name: "437 BANANE (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "438-",
    name: "438 MARACUJA (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "439-",
    name: "439 SAUERKIRSCHE (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "440-",
    name: "440 MANGO (0,3 L)",
    description: "Keine Allergene",
  },
  {
    id: "441-",
    name: "441 BANANE-KIRSCHE (KIBA) (0,3 L)",
    description: "Keine Allergene",
  },
];
 export default menuFoods;