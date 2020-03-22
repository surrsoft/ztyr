/*
Модуль для генерации [zint]-терминов
 */

const zintAlphabet1 = "abcdefghijkmnoprstuvwxyz";
const zintAlphabet2 = "abcdefghijkmnoprtuvwxyz"; //без s

//генерирует английский [zint]-термин
function zintGenerateEng() {
  const r_1 = zintRandomInt(0, zintAlphabet1.length - 1);
  const r_2 = zintRandomInt(0, zintAlphabet1.length - 1);
  const r_3 = zintRandomInt(0, zintAlphabet1.length - 1);
  const r_4 = zintRandomInt(0, zintAlphabet2.length - 1);
  return zintAlphabet1.charAt(r_1) + zintAlphabet1.charAt(r_2) + zintAlphabet1.charAt(r_3) + zintAlphabet2.charAt(r_4);
}

//генерирует кирилический [zint]-термин
function zintGenerateRu() {
  const st1 = "абвгдезиклмнопрстуфхюя";
  const st2 = "абвгдезиклмнопрстуфхюя";
  //---
  const r_1 = zintRandomInt(0, st1.length - 1);
  const r_2 = zintRandomInt(0, st1.length - 1);
  const r_3 = zintRandomInt(0, st1.length - 1);
  const r_4 = zintRandomInt(0, st2.length - 1);
  const genSt = st1.charAt(r_1) + st1.charAt(r_2) + st1.charAt(r_3) + st2.charAt(r_4);
}

//генерирует рандомное целое число в диапазоне [min] [max]
function zintRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zintVerifyName(name) {
  console.log('!!-!!-!! -> zintVerifyName() {200322085051}'); // del+
  if (name && name.length === 4) {
    return name.split('').every((el, index) => {
      if (index < 3) {
        return zintAlphabet1.includes(el)
      } else {
        return zintAlphabet2.includes(el)
      }
    });
  }
  return false;
}
