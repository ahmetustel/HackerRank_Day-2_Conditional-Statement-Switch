function getLetter() {
  let letter;
  let veri = document.getElementById("deger").value.toLowerCase();
  let ilkharf = veri.slice(0, 1);
  let veriLength = veri.length;
  if (veriLength > 100) {
    return (document.getElementById("demo").innerHTML =
      "Girilen Değer Çok Uzun!");
  }
  if (veriLength < 1) {
    return (document.getElementById("demo").innerHTML = "Değer Girilmedi!");
  }
  let dizi_A = ["a", "e", "i", "o", "u"];
  let dizi_B = ["b", "c", "d", "f", "g"];
  let dizi_C = ["h", "j", "k", "l", "m"];
  let dizi_D = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  for (const key in dizi_A) {
    if (dizi_A[key] == ilkharf) {
      letter = "A";
    }
  }

  for (const key in dizi_B) {
    if (dizi_B[key] == ilkharf) {
      letter = "B";
    }
  }

  for (const key in dizi_C) {
    if (dizi_C[key] == ilkharf) {
      letter = "C";
    }
  }

  for (const key in dizi_D) {
    if (dizi_D[key] == ilkharf) {
      letter = "D";
    }
  }

  document.getElementById("demo").innerHTML = letter;
}

// **************PROBLEMİN İSTEDİĞİ SWİTCH YAPISI İLE FONKSİYONUN MANTIĞI AŞAĞIDA ANLATILDI ********
// switch (letter) {
//     case "a":
//       letter = "A";
//       break;
//     case "e":
//       letter = "A";
//       //Bu şekilde case - letter - break yapısı ile tüm seçenekler yazılarak aynı fonksiyon elde edilebilir
//   }
