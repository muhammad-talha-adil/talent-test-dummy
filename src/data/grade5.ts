interface Question {
  q: string;
  o: string[];
  a: number;
}

export const grade5Questions: Question[] = [
  // 1. English
  { q: "Which of these is a proper noun?", o: ["city", "Ahmed", "dog", "school"], a: 1 },
  // 2. Mathematics
  { q: "LCM of 4 and 6 is:", o: ["12", "10", "14", "8"], a: 0 },
  // 3. اسلامیات
  { q: "نماز پڑھنے کا سب سے اہم وقت کب ہے؟", o: ["صبح", "دوپہر", "عصر", "جمعہ"], a: 3 },
  // 4. Science
  { q: "Water changing into ice is an example of:", o: ["Chemical change", "Physical change", "Evaporation", "Rusting"], a: 1 },
  // 5. Urdu
  { q: "اسم معرفہ کی مثال", o: ["کتاب", "لڑکا", "گلاب", "تمام"], a: 0 },

  // 6. English
  { q: "Choose the correct plural: child", o: ["childs", "childes", "children", "child"], a: 2 },
  // 7. Mathematics
  { q: "HCF of 8 and 12 is:", o: ["4", "8", "6", "2"], a: 0 },
  // 8. اسلامیات
  { q: "زکوٰۃ کس کو دی جاتی ہے؟", o: ["ضرورت مند", "دوست", "رشتہ دار", "خود"], a: 0 },
  // 9. Science
  { q: "Which part of a plant makes seeds?", o: ["Leaf", "Flower", "Stem", "Root"], a: 1 },
  // 10. Urdu
  { q: "فعل ماضی کی مثال", o: ["کھایا", "کھاتا", "کھا رہا", "کھا"], a: 0 },

  // 11. English
  { q: "Choose correct pronoun: This is ___ book.", o: ["I", "My", "Me", "Mine"], a: 1 },
  // 12. Mathematics
  { q: "25% of 80 is:", o: ["10", "15", "20", "25"], a: 2 },
  // 13. اسلامیات
  { q: "حضرت محمد ﷺ کہاں پیدا ہوئے؟", o: ["مکہ", "مدینہ", "بغداد", "یروشلم"], a: 0 },
  // 14. Science
  { q: "Light travels in a:", o: ["Curve", "Straight line", "Circle", "Wave"], a: 1 },
  // 15. Urdu
  { q: "مترادف الفاظ: خوش", o: ["شاد", "اداس", "ناراض", "غمگین"], a: 0 },

  // 16. English
  { q: "Select the correct article: ___ orange is sweet.", o: ["A", "An", "The", "No article"], a: 1 },
  // 17. Mathematics
  { q: "Convert 3/4 into decimal", o: ["0.25", "0.75", "0.5", "0.85"], a: 1 },
  // 18. اسلامیات
  { q: "حضرت علی علیہ السلام کا لقب کیا ہے؟", o: ["اسد اللہ", "کرار", "ابوالحسن", "قمر"], a: 0 },
  // 19. Science
  { q: "Which of these is a gas?", o: ["Water", "Ice", "Steam", "Soil"], a: 2 },
  // 20. Urdu
  { q: "واحد جمع: لڑکا", o: ["لڑکے", "لڑکیاں", "لڑکوں", "لڑکا"], a: 0 },

  // 21. English
  { q: "Pick the adjective: The cat is ___", o: ["Small", "Run", "Running", "Quickly"], a: 0 },
  // 22. Mathematics
  { q: "Perimeter of square with side 6 cm:", o: ["24", "30", "12", "36"], a: 0 },
  // 23. اسلامیات
  { q: "نماز جمعہ کب ادا ہوتی ہے؟", o: ["پیر", "جمعہ", "ہفتہ", "اتوار"], a: 1 },
  // 24. Science
  { q: "Which of these is a physical change?", o: ["Melting ice", "Burning paper", "Rusting iron", "Cooking egg"], a: 0 },
  // 25. Urdu
  { q: "فعل ماضی: جانا", o: ["گیا", "جاتا", "جانا", "جا رہا"], a: 0 },

  // 26. English
  { q: "Singular of 'mice' is:", o: ["Mouses", "Mouse", "Mices", "Mous"], a: 1 },
  // 27. Mathematics
  { q: "HCF of 18 and 24 is:", o: ["6", "12", "18", "24"], a: 0 },
  // 28. اسلامیات
  { q: "معراج النبی ﷺ کب ہوئی؟", o: ["رات", "دن", "صبح", "شام"], a: 0 },
  // 29. Science
  { q: "Which planet is called the Red Planet?", o: ["Earth", "Mars", "Venus", "Jupiter"], a: 1 },
  // 30. Urdu
  { q: "مترادف الفاظ: غمگین", o: ["اداس", "خوش", "ناراض", "پاگل"], a: 0 },

  // 31. English
  { q: "Choose the correct tense: I ___ my homework yesterday.", o: ["do", "did", "doing", "done"], a: 1 },
  // 32. Mathematics
  { q: "LCM of 5 and 10 is:", o: ["10", "20", "5", "15"], a: 1 },
  // 33. اسلامیات
  { q: "زکوٰۃ کتنی فرض ہے؟", o: ["2.5%", "5%", "10%", "1%"], a: 0 },
  // 34. Science
  { q: "Which part of flower becomes fruit?", o: ["Petal", "Ovary", "Stamen", "Sepal"], a: 1 },
  // 35. Urdu
  { q: "مذکر مونث: لڑکی", o: ["لڑکی", "لڑکا", "کتاب", "گھوڑا"], a: 0 },

  // 36. English
  { q: "Pick the correct pronoun: Between you and ___", o: ["I", "Me", "Mine", "My"], a: 1 },
  // 37. Mathematics
  { q: "Find 50% of 60", o: ["20", "30", "25", "40"], a: 1 },
  // 38. اسلامیات
  { q: "حضرت عیسیٰ علیہ السلام کس قوم کے پیغمبر تھے؟", o: ["یہودی", "عرب", "مصر", "روم"], a: 0 },
  // 39. Science
  { q: "Which material is transparent?", o: ["Glass", "Wood", "Metal", "Stone"], a: 0 },
  // 40. Urdu
  { q: "اسم ضمیر کی مثال", o: ["میں", "کتاب", "گلاب", "لڑکا"], a: 0 },

  // 41. English
  { q: "Choose correct conjunction: I like tea ___ coffee.", o: ["and", "but", "or", "so"], a: 0 },
  // 42. Mathematics
  { q: "Area of rectangle 5cm × 3cm:", o: ["15", "8", "16", "10"], a: 0 },
  // 43. اسلامیات
  { q: "غزوات نبی ﷺ میں سب سے پہلی جنگ کون سی تھی؟", o: ["بدر", "احد", "خندق", "طائف"], a: 0 },
  // 44. Science
  { q: "Sound needs ___ to travel.", o: ["Air", "Vacuum", "Glass", "Wood"], a: 0 },
  // 45. Urdu
  { q: "متضاد الفاظ: اچھا", o: ["برا", "نیک", "خوب", "سنجیدہ"], a: 0 },

  // 46. English
  { q: "Choose the article: ___ sun rises in the east.", o: ["A", "An", "The", "No article"], a: 2 },
  // 47. Mathematics
  { q: "HCF of 12 and 16 is:", o: ["2", "4", "8", "6"], a: 1 },
  // 48. اسلامیات
  { q: "حضرت داؤد علیہ السلام کس کام کے لیے مشہور ہیں؟", o: ["بادشاہ", "قاضی", "شاعر", "جنگجو"], a: 0 },
  // 49. Science
  { q: "Which state of matter is water vapor?", o: ["Solid", "Liquid", "Gas", "Plasma"], a: 2 },
  // 50. Urdu
  { q: "مرکب الفاظ کی مثال", o: ["سفید + کالا = سیاہ", "سفید", "کالا", "رنگین"], a: 0 },

  // 51. English
  { q: "Pick the adjective: The weather is ___ today.", o: ["Sunny", "Run", "Running", "Sun"], a: 0 },
  // 52. Mathematics
  { q: "Convert 1/2 into decimal", o: ["0.2", "0.5", "0.25", "0.75"], a: 1 },
  // 53. اسلامیات
  { q: "حضرت موسیٰ علیہ السلام کس قوم کے نبی تھے؟", o: ["بنی اسرائیل", "عرب", "روم", "مصر"], a: 0 },
  // 54. Science
  { q: "Which material allows light to pass through?", o: ["Opaque", "Transparent", "Translucent", "None"], a: 1 },
  // 55. Urdu
  { q: "واحد جمع: کتاب", o: ["کتابیں", "کتابوں", "کتب", "کتاب"], a: 0 },

  // 56. English
  { q: "Singular of 'teeth' is:", o: ["Tooth", "Teeth", "Teeths", "Tooths"], a: 0 },
  // 57. Mathematics
  { q: "Find 40% of 50", o: ["10", "20", "15", "25"], a: 3 },
  // 58. اسلامیات
  { q: "نماز فرض ہے؟", o: ["ہاں", "نہیں", "کبھی کبھی", "صرف جمعہ"], a: 0 },
  // 59. Science
  { q: "Which gas do plants release?", o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], a: 0 },
  // 60. Urdu
  { q: "مترادف الفاظ: غصہ", o: ["ناراض", "خوش", "اداس", "پاگل"], a: 0 },

  // 61. English
  { q: "Choose the correct tense: They ___ playing football now.", o: ["are", "is", "am", "was"], a: 0 },
  // 62. Mathematics
  { q: "Perimeter of triangle 3,4,5 cm sides:", o: ["12", "15", "10", "8"], a: 0 },
  // 63. اسلامیات
  { q: "جمعہ المبارک کس دن ہے؟", o: ["جمعہ", "پیر", "ہفتہ", "اتوار"], a: 0 },
  // 64. Science
  { q: "Which planet is closest to the Sun?", o: ["Mercury", "Venus", "Earth", "Mars"], a: 0 },
  // 65. Urdu
  { q: "اسم علم کی مثال", o: ["علی", "لڑکا", "کتاب", "گلاب"], a: 0 },

  // 66. English
  { q: "Pick the correct article: ___ book on the table.", o: ["A", "An", "The", "No article"], a: 2 },
  // 67. Mathematics
  { q: "HCF of 20 and 30 is:", o: ["5", "10", "15", "20"], a: 1 },
  // 68. اسلامیات
  { q: "حضرت یسوع علیہ السلام کے معجزات میں سے ایک", o: ["اندھی کو بینا کرنا", "زکوٰۃ دینا", "نماز پڑھنا", "روزہ رکھنا"], a: 0 },
  // 69. Science
  { q: "Which is a conductor of electricity?", o: ["Wood", "Copper", "Plastic", "Rubber"], a: 1 },
  // 70. Urdu
  { q: "مترادف الفاظ: خوشحال", o: ["شاد", "اداس", "غمگین", "پاگل"], a: 0 },

  // 71. English
  { q: "Choose correct pronoun: ___ is my pen.", o: ["He", "She", "This", "It"], a: 3 },
  // 72. Mathematics
  { q: "Convert 0.6 into percentage", o: ["6%", "60%", "0.6%", "600%"], a: 1 },
  // 73. اسلامیات
  { q: "کون سی عبادت فرض ہے؟", o: ["نماز", "صدقہ", "دعا", "تلاوت"], a: 0 },
  // 74. Science
  { q: "Which is an example of satellite?", o: ["Moon", "Sun", "Earth", "Mars"], a: 0 },
  // 75. Urdu
  { q: "فعل ماضی: کھانا", o: ["کھایا", "کھاتا", "کھا رہا", "کھا"], a: 0 },

  // 76. English
  { q: "Pick the adjective: The cake is ___", o: ["Delicious", "Deliciously", "Delight", "Delightful"], a: 0 },
  // 77. Mathematics
  { q: "LCM of 3 and 4 is:", o: ["7", "12", "8", "6"], a: 1 },
  // 78. اسلامیات
  { q: "حضرت عیسیٰ علیہ السلام کس معجزہ کے لیے معروف ہیں؟", o: ["اندھی کو بینا کرنا", "مریض کو شفا دینا", "مجھ کو معجزہ دینا", "دنیا بنانا"], a: 1 },
  // 79. Science
  { q: "Which planet has rings?", o: ["Mars", "Earth", "Saturn", "Venus"], a: 2 },
  // 80. Urdu
  { q: "واحد جمع: بچہ", o: ["بچے", "بچی", "بچوں", "بچیاں"], a: 0 },

  // 81. English
  { q: "Singular of 'geese' is:", o: ["Goose", "Geese", "Gos", "Gooses"], a: 0 },
  // 82. Mathematics
  { q: "Find 30% of 200", o: ["60", "50", "40", "70"], a: 0 },
  // 83. اسلامیات
  { q: "کون امام حسین کی یاد میں کھڑا ہوا؟", o: ["امام حسین", "یزید", "علی", "ابو سفیان"], a: 0 },
  // 84. Science
  { q: "Which is a physical change?", o: ["Melting butter", "Burning wood", "Rusting iron", "Cooking egg"], a: 0 },
  // 85. Urdu
  { q: "محاورہ: آسمان سے گرا، کھجور میں اٹکا", o: ["بہت بڑی مصیبت", "خوشی", "دلچسپی", "حوصلہ"], a: 0 },

  // 86. English
  { q: "Choose the correct tense: He ___ a letter.", o: ["write", "writes", "wrote", "writing"], a: 2 },
  // 87. Mathematics
  { q: "Area of square side 7 cm:", o: ["49", "28", "14", "21"], a: 0 },
  // 88. اسلامیات
  { q: "حضرت محمد ﷺ کی پیدائش کہاں ہوئی؟", o: ["مکہ", "مدینہ", "یروشلم", "بغداد"], a: 0 },
  // 89. Science
  { q: "Which part of plant makes food?", o: ["Roots", "Stem", "Leaves", "Flower"], a: 2 },
  // 90. Urdu
  { q: "الفاظ متضاد: اونچا", o: ["چھوٹا", "لمبا", "نیچا", "موٹا"], a: 2 },

  // 91. English
  { q: "Pick the correct article: ___ apple is red.", o: ["A", "An", "The", "No article"], a: 1 },
  // 92. Mathematics
  { q: "HCF of 14 and 21 is:", o: ["7", "14", "21", "3"], a: 0 },
  // 93. اسلامیات
  { q: "کون امام علی کے دوست تھے؟", o: ["حضرت ابو بکر", "حضرت عمر", "حضرت علی", "حضرت عثمان"], a: 2 },
  // 94. Science
  { q: "Which planet is called the Blue Planet?", o: ["Earth", "Mars", "Venus", "Mercury"], a: 0 },
  // 95. Urdu
  { q: "مرکب لفظ: تیز + روشنی", o: ["تیز روشنی", "تیز", "روشنی", "تیز و روشنی"], a: 0 },

  // 96. English
  { q: "Pick the adjective: The sky is ___", o: ["Blue", "Blues", "Bluely", "Bluer"], a: 0 },
  // 97. Mathematics
  { q: "LCM of 6 and 8 is:", o: ["12", "24", "14", "20"], a: 1 },
  // 98. اسلامیات
  { q: "حضرت داؤد علیہ السلام کس کام کے لیے مشہور ہیں؟", o: ["بادشاہ", "قاضی", "شاعر", "جنگجو"], a: 0 },
  // 99. Science
  { q: "Which is a conductor of electricity?", o: ["Wood", "Copper", "Plastic", "Rubber"], a: 1 },
  // 100. Urdu
  { q: "مترادف الفاظ: خوشحال", o: ["شاد", "اداس", "غمگین", "پاگل"], a: 0 }
];