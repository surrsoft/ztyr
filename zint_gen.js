/*
Модуль для генерации [zint]-терминов
 */

//генерирует английский [zint]-термин
function zintGenerateEng() {
    const stAlphabet1 = "abcdefghijkmnoprstuvwxyz";
    const stAlphabet2 = "abcdefghijkmnoprtuvwxyz"; //без s
    //---
    const r_1 = zintRandomInt(0, stAlphabet1.length - 1);
    const r_2 = zintRandomInt(0, stAlphabet1.length - 1);
    const r_3 = zintRandomInt(0, stAlphabet1.length - 1);
    const r_4 = zintRandomInt(0, stAlphabet2.length - 1);
    return stAlphabet1.charAt(r_1) + stAlphabet1.charAt(r_2) + stAlphabet1.charAt(r_3) + stAlphabet2.charAt(r_4);
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

//---
exports.generateEng = generateEng;
exports.generateRu = generateRu;
