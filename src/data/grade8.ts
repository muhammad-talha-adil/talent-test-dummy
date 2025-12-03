interface Question {
  q: string;
  o: string[];
  a: number;
}

export const grade8Questions: Question[] = [
  // 1. Math
  { q: "What is the cube root of 2197?", o: ["11", "13", "15", "17"], a: 1 },
  
  // 2. English
  { q: "Which prefix can mean 'across' or 'through'?", o: ["trans-", "sub-", "pre-", "anti-"], a: 0 },
  
  // 3. Urdu
  { q: "کون سا لفظ 'اسم تصغیر' کی مثال ہے؟", o: ["لڑکا", "لڑکپن", "چھوٹا لڑکا", "لڑکوں"], a: 2 },
  
  // 4. Science
  { q: "Which element has the chemical symbol 'K'?", o: ["Potassium", "Krypton", "Calcium", "Kryptonite"], a: 0 },
  
  // 5. Islamiat
  { q: "آخرت پر ایمان کس چیز کا حصہ ہے؟", o: ["ارکان اسلام", "ارکان ایمان", "فرائض", "سنن"], a: 1 },
  
  // 6. Math
  { q: "If a:b = 3:4 and b:c = 2:5, what is a:c?", o: ["3:10", "6:20", "3:5", "2:7"], a: 0 },
  
  // 7. English
  { q: "Synonym for 'arduous' is:", o: ["Easy", "Difficult", "Simple", "Quick"], a: 1 },
  
  // 8. Science
  { q: "What type of force is friction?", o: ["Contact force", "Non-contact force", "Magnetic force", "Gravitational force"], a: 0 },
  
  // 9. Urdu
  { q: "فعل ماضی شکیہ کی مثال دیں:", o: ["کھاتا", "کھایا ہوگا", "کھائے گا", "کھا رہا ہے"], a: 1 },
  
  // 10. Islamiat
  { q: "زکوۃ کی فرضیت کس سن ہجری میں ہوئی؟", o: ["1 ہجری", "2 ہجری", "8 ہجری", "10 ہجری"], a: 1 },
  
  // 11. English
  { q: "Which is a collective noun?", o: ["flock", "bird", "fly", "wing"], a: 0 },
  
  // 12. Math
  { q: "HCF of 72 and 108 is:", o: ["12", "18", "24", "36"], a: 3 },
  
  // 13. Science
  { q: "Which planet is known as the 'Morning Star'?", o: ["Mars", "Venus", "Mercury", "Jupiter"], a: 1 },
  
  // 14. Urdu
  { q: "محاورہ 'ہاتھ پاؤں پھولنا' کا مطلب ہے:", o: ["خوش ہونا", "بہت خوش ہونا", "پریشان ہونا", "تھک جانا"], a: 2 },
  
  // 15. Islamiat
  { q: "پیغمبر اسلام ﷺ کا آخری غزوہ کون سا تھا؟", o: ["غزوہ خیبر", "غزوہ تبوک", "غزوہ موتہ", "فتح مکہ"], a: 1 },
  
  // 16. English
  { q: "Identify the preposition: 'She sat between her parents.'", o: ["She", "sat", "between", "parents"], a: 2 },
  
  // 17. Math
  { q: "Solve for x: 2x² + 5x - 3 = 0", o: ["x = 1/2, -3", "x = 3, -1/2", "x = 2, -3", "x = 1, -3"], a: 0 },
  
  // 18. Science
  { q: "What does DNA stand for?", o: ["Deoxyribonucleic Acid", "Di Nucleic Acid", "Dynamic Nuclear Acid", "Deoxy Nitrogen Acid"], a: 0 },
  
  // 19. Urdu
  { q: "متضاد الفاظ کی صحیح جوڑی بتائیں:", o: ["امیر : غریب", "طالب علم : شاگرد", "استاد : معلم", "کتاب : صحیفہ"], a: 0 },
  
  // 20. Islamiat
  { q: "امام حسینؓ کربلا میں کتنے رشتہ داروں کے ساتھ شہید ہوئے؟", o: ["17", "18", "19", "20"], a: 1 },
  
  // 21. Math
  { q: "What is the square of 1.2?", o: ["1.44", "2.4", "1.2", "14.4"], a: 0 },
  
  // 22. English
  { q: "Antonym of 'vivid' is:", o: ["Bright", "Dull", "Colorful", "Clear"], a: 1 },
  
  // 23. Science
  { q: "Which device converts chemical energy to electrical energy?", o: ["Generator", "Battery", "Motor", "Transformer"], a: 1 },
  
  // 24. Urdu
  { q: "جملہ درست کریں: 'میں کل اسکول جاؤں گا۔'", o: ["میں کل اسکول جائوں گا۔", "میں کل اسکول جا رہا ہوں۔", "میں کل اسکول جا چکا ہوں۔", "جملہ صحیح ہے"], a: 3 },
  
  // 25. Islamiat
  { q: "حج میں 'سعی' کہاں کی جاتی ہے؟", o: ["صفا و مروہ", "عرفات", "مزدلفہ", "منیٰ"], a: 0 },
  
  // 26. English
  { q: "Future perfect tense: 'By 2025, he ___ his degree.'", o: ["will complete", "will have completed", "has completed", "completes"], a: 1 },
  
  // 27. Math
  { q: "If 15 men complete a work in 20 days, how many days will 25 men take?", o: ["12", "13", "14", "15"], a: 0 },
  
  // 28. Science
  { q: "What is the atomic number of Oxygen?", o: ["6", "8", "16", "32"], a: 1 },
  
  // 29. Urdu
  { q: "مرکب توصیفی کی مثال ہے:", o: ["دلبر", "گلشن", "کتاب خانہ", "آتش دان"], a: 0 },
  
  // 30. Islamiat
  { q: "پیغمبر اسلام ﷺ کی کون سی بیٹی حضرت عثمانؓ سے شادی شدہ تھیں؟", o: ["حضرت رقیہؓ", "حضرت ام کلثومؓ", "حضرت زینبؓ", "حضرت فاطمہؓ"], a: 1 },
  
  // 31. Math
  { q: "What is 15% of 240?", o: ["30", "36", "40", "45"], a: 1 },
  
  // 32. English
  { q: "Which suffix forms an adverb from 'happy'?", o: ["-ly", "-ness", "-ful", "-ity"], a: 0 },
  
  // 33. Science
  { q: "Which planet has the most moons?", o: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 0 },
  
  // 34. Urdu
  { q: "ضرب المثل 'اُلو کے پھیر' کا مطلب ہے:", o: ["بے فائدہ کام", "فائدہ مند کام", "رات کا کام", "الّو کا شکار"], a: 0 },
  
  // 35. Islamiat
  { q: "غزوہ خیبر کس سن ہجری میں ہوا؟", o: ["5 ہجری", "6 ہجری", "7 ہجری", "8 ہجری"], a: 2 },
  
  // 36. English
  { q: "Identify the interjection: 'Wow! That's amazing!'", o: ["That's", "amazing", "Wow", "!"], a: 2 },
  
  // 37. Math
  { q: "If √x = 0.5, what is x?", o: ["0.25", "0.5", "1", "2"], a: 0 },
  
  // 38. Science
  { q: "Biotechnology is used to produce:", o: ["Insulin", "Steel", "Plastic", "Petrol"], a: 0 },
  
  // 39. Urdu
  { q: "اسم موصول کی مثال ہے:", o: ["جو", "وہ", "یہ", "کوئی"], a: 0 },
  
  // 40. Islamiat
  { q: "معرکہ موتہ میں شہید ہونے والے تین کمانڈروں میں سے پہلے کون تھے؟", o: ["حضرت زید بن حارثہؓ", "حضرت جعفرؓ", "حضرت عبداللہؓ", "حضرت خالدؓ"], a: 0 },
  
  // 41. English
  { q: "Choose correct pronoun: 'Each of the girls brought ___ lunch.'", o: ["their", "her", "his", "its"], a: 1 },
  
  // 42. Math
  { q: "Simplify: (3x²y³)²", o: ["9x⁴y⁶", "6x⁴y⁶", "9x⁴y⁵", "3x⁴y⁶"], a: 0 },
  
  // 43. Science
  { q: "Pressure = Force divided by:", o: ["Area", "Volume", "Mass", "Distance"], a: 0 },
  
  // 44. Urdu
  { q: "واحد سے جمع بنائیں: 'قلم'", o: ["اقلام", "قلمیں", "قلموں", "قلمات"], a: 0 },
  
  // 45. Islamiat
  { q: "ام المؤمنین حضرت خدیجہؓ کے انتقال کے وقت آپ ﷺ کی عمر کیا تھی؟", o: ["50 سال", "55 سال", "60 سال", "65 سال"], a: 0 },
  
  // 46. English
  { q: "Past perfect tense: 'She ___ already ___ when I arrived.'", o: ["has, eaten", "had, eaten", "was, eating", "did, eat"], a: 1 },
  
  // 47. Math
  { q: "Find LCM of 15, 25, and 35", o: ["175", "525", "105", "210"], a: 1 },
  
  // 48. Science
  { q: "Which force pulls objects towards Earth's center?", o: ["Magnetic", "Frictional", "Gravitational", "Electrostatic"], a: 2 },
  
  // 49. Urdu
  { q: "مترادف الفاظ: 'حکیم' کا مترادف ہے:", o: ["طبیب", "مریض", "دوا", "ہسپتال"], a: 0 },
  
  // 50. Islamiat
  { q: "حج میں 'رمی جمرات' کا عمل کہاں ہوتا ہے؟", o: ["منیٰ", "عرفات", "مزدلفہ", "مکہ"], a: 0 },
  
  // 51. English
  { q: "Which is a compound sentence?", o: ["I went to the market and bought fruits.", "After eating, I slept.", "Because it rained, we stayed home.", "The cat, which was black, slept."], a: 0 },
  
  // 52. Math
  { q: "If y = 3x + 7 and y = 22, find x", o: ["3", "4", "5", "6"], a: 2 },
  
  // 53. Science
  { q: "Which metal is used in thermometers?", o: ["Mercury", "Lead", "Copper", "Aluminum"], a: 0 },
  
  // 54. Urdu
  { q: "فعل لازم کی مثال ہے:", o: ["سونا", "اٹھانا", "لانا", "دینا"], a: 0 },
  
  // 55. Islamiat
  { q: "پیغمبر اسلام ﷺ کے کس بیٹے کا نام ابراہیم تھا؟", o: ["حضرت عبداللہؓ", "حضرت قاسمؓ", "حضرت طیبؓ", "حضرت ابراہیمؓ"], a: 3 },
  
  // 56. English
  { q: "Identify the adverb: 'He speaks English fluently.'", o: ["He", "speaks", "English", "fluently"], a: 3 },
  
  // 57. Math
  { q: "What is the cube of 9?", o: ["729", "81", "27", "999"], a: 0 },
  
  // 58. Science
  { q: "Solar energy is converted to electricity by:", o: ["Solar panels", "Wind turbines", "Batteries", "Generators"], a: 0 },
  
  // 59. Urdu
  { q: "جملے کی نوعیت بتائیں: 'کیا تم اسکول جاؤ گے؟'", o: ["فعل", "استفہامیہ", "تعجب", "شرطیہ"], a: 1 },
  
  // 60. Islamiat
  { q: "امام حسینؓ کی شہادت کس دن ہوئی؟", o: ["9 محرم", "10 محرم", "11 محرم", "12 محرم"], a: 1 },
  
  // 61. English
  { q: "Synonym of 'abundant' is:", o: ["Scarce", "Plentiful", "Rare", "Limited"], a: 1 },
  
  // 62. Math
  { q: "If 30% of a number is 45, what is the number?", o: ["120", "135", "150", "165"], a: 2 },
  
  // 63. Science
  { q: "Which planet is closest to the Sun?", o: ["Venus", "Mercury", "Mars", "Earth"], a: 1 },
  
  // 64. Urdu
  { q: "حروف علت کون سے ہیں؟", o: ["ا، و، ی", "ب، پ، ت", "ک، گ، ل", "م، ن، ں"], a: 0 },
  
  // 65. Islamiat
  { q: "زکوۃ کا نصاب سونے پر کیا ہے؟", o: ["7.5 تولہ", "40 تولہ", "52.5 تولہ", "87.5 گرام"], a: 3 },
  
  // 66. English
  { q: "Present continuous tense: 'They ___ football now.'", o: ["play", "plays", "are playing", "played"], a: 2 },
  
  // 67. Math
  { q: "Solve: 4x - 7 = 2x + 15", o: ["x = 8", "x = 9", "x = 10", "x = 11"], a: 3 },
  
  // 68. Science
  { q: "What is the symbol for Iron?", o: ["Ir", "Fe", "In", "I"], a: 1 },
  
  // 69. Urdu
  { q: "محاورہ 'آنکھوں میں گرد ڈالنا' کا مطلب ہے:", o: ["دھوکہ دینا", "عینک لگانا", "آنکھ میں گرد پڑنا", "صاف نظر آنا"], a: 0 },
  
  // 70. Islamiat
  { q: "پیغمبر اسلام ﷺ نے کس صحابی کو 'امین' کہا؟", o: ["حضرت ابوبکرؓ", "حضرت عمرؓ", "حضرت ابو عبیدہؓ", "حضرت عثمانؓ"], a: 2 },
  
  // 71. English
  { q: "Which article is correct: '___ European country'?", o: ["a", "an", "the", "no article"], a: 0 },
  
  // 72. Math
  { q: "What is √0.64?", o: ["0.8", "0.08", "0.6", "0.4"], a: 0 },
  
  // 73. Science
  { q: "Which gas do plants use for photosynthesis?", o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], a: 1 },
  
  // 74. Urdu
  { q: "اسم معرفہ کی قسم 'استاد' کیا ہے؟", o: ["اسم علم", "اسم صفت", "اسم ذات", "اسم موصول"], a: 2 },
  
  // 75. Islamiat
  { q: "حج میں 'طواف' کتنے چکر ہوتے ہیں؟", o: ["5", "6", "7", "8"], a: 2 },
  
  // 76. English
  { q: "Passive voice of: 'The dog bit the man.'", o: ["The man was bitten by the dog.", "The man bit the dog.", "The dog was bitten by the man.", "The man is bitten by the dog."], a: 0 },
  
  // 77. Math
  { q: "If x:y = 5:3 and y:z = 4:7, find x:z", o: ["20:21", "15:28", "5:7", "4:7"], a: 0 },
  
  // 78. Science
  { q: "Which is NOT a renewable energy source?", o: ["Solar", "Wind", "Coal", "Hydro"], a: 2 },
  
  // 79. Urdu
  { q: "مونث سے مذکر بنائیں: 'بیٹی'", o: ["بیٹا", "والد", "ماں", "پوتا"], a: 0 },
  
  // 80. Islamiat
  { q: "پیغمبر اسلام ﷺ کی والدہ کا نام کیا تھا؟", o: ["حضرت آمنہ", "حضرت خدیجہ", "حضرت فاطمہ", "حضرت حلیمہ"], a: 0 },
  
  // 81. English
  { q: "Antonym of 'expand' is:", o: ["Grow", "Contract", "Extend", "Increase"], a: 1 },
  
  // 82. Math
  { q: "What is 12.5% as a fraction?", o: ["1/8", "1/4", "1/2", "3/4"], a: 0 },
  
  // 83. Science
  { q: "What is the SI unit of force?", o: ["Newton", "Joule", "Pascal", "Watt"], a: 0 },
  
  // 84. Urdu
  { q: "فعل متعدی کی مثال ہے:", o: ["بیٹھنا", "چلنا", "لانا", "سونا"], a: 2 },
  
  // 85. Islamiat
  { q: "پیغمبر اسلام ﷺ کب پیدا ہوئے؟", o: ["12 ربیع الاول", "10 محرم", "27 رجب", "15 شعبان"], a: 0 },
  
  // 86. English
  { q: "Identify the adjective: 'The beautiful garden had red roses.'", o: ["garden", "beautiful", "had", "roses"], a: 1 },
  
  // 87. Math
  { q: "If a train covers 300 km in 4 hours, what is its speed in m/s?", o: ["20.83", "25", "30", "75"], a: 0 },
  
  // 88. Science
  { q: "Which element is used in making computer chips?", o: ["Silicon", "Carbon", "Gold", "Copper"], a: 0 },
  
  // 89. Urdu
  { q: "مرکب اشاری کی مثال ہے:", o: ["پانی کی بوتل", "گلشن", "دلبر", "چشم روشن"], a: 3 },
  
  // 90. Islamiat
  { q: "پیغمبر اسلام ﷺ کے دادا کا نام کیا تھا؟", o: ["حضرت عبدالمطلب", "حضرت ابوطالب", "حضرت حمزہ", "حضرت عباس"], a: 0 },
  
  // 91. English
  { q: "Which conjunction shows contrast?", o: ["and", "but", "or", "so"], a: 1 },
  
  // 92. Math
  { q: "Find the value: (3² + 4²) ÷ 5", o: ["5", "6", "7", "8"], a: 0 },
  
  // 93. Science
  { q: "Which planet has rings made of ice particles?", o: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 1 },
  
  // 94. Urdu
  { q: "ضرب المثل 'گھر کا بھیدی لنکا ڈھائے' کا مطلب ہے:", o: ["گھر والا گھر تباہ کرے", "گھر بنانا", "گھر کی حفاظت", "گھر میں رہنا"], a: 0 },
  
  // 95. Islamiat
  { q: "پیغمبر اسلام ﷺ کس عمر میں پیغمبر بنے؟", o: ["30 سال", "35 سال", "40 سال", "45 سال"], a: 2 },
  
  // 96. English
  { q: "Direct speech: 'I am happy,' she said.", o: ["She said she is happy.", "She said she was happy.", "She said I am happy.", "She said that she happy."], a: 1 },
  
  // 97. Math
  { q: "If 2/3 of a number is 24, what is the number?", o: ["32", "36", "40", "48"], a: 1 },
  
  // 98. Science
  { q: "What is the main gas in the Sun?", o: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"], a: 2 },
  
  // 99. Urdu
  { q: "جملے میں فعل بتائیں: 'وہ کتاب پڑھتا ہے۔'", o: ["وہ", "کتاب", "پڑھتا ہے", "ہے"], a: 2 },
  
  // 100. Islamiat
  { q: "پیغمبر اسلام ﷺ کی کتنی بیٹیاں تھیں؟", o: ["2", "3", "4", "5"], a: 2 }
];