function toRomanLazy(num) {
  let output = ""
  const romanNumeralToArabic = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  for (let numeral of romanNumeralPriorityOrder) {
    let quantity = Math.floor(num / romanNumeralToArabic[numeral]);
    if (quantity > 0) {
      for (i = quantity; i > 0; i--) { 
        output += numeral;
        num -= romanNumeralToArabic[numeral]; 
      };
      if (num === 0) {
        return output;
      }; 
    };
  }
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
