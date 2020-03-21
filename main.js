
var ztyrProjectName = 'ztyr-name-generator';
var ztyrDropboxAccessToken = '';

function generatorHandler(input){
    const engName = generateEng();
    input.val(engName);
}

function saveHandler(){
    console.log('===> saveHandler()');
    dropboxFileGet('tmp.txt');
}


// --- dropbox

function dropboxFileGet(fileName){
    console.log('Dropbox', Dropbox);
    const dropboxOj = new Dropbox.Dropbox({ accessToken: ztyrDropboxAccessToken, fetch: fetch });
    console.log('dropboxOj', dropboxOj);    

}


// ---

//генерирует английский [zint]-термин
function generateEng() {
    const stAlphabet1 = "abcdefghijkmnoprstuvwxyz";
    const stAlphabet2 = "abcdefghijkmnoprtuvwxyz"; //без s
    //---
    const r_1 = randomInt(0, stAlphabet1.length - 1);
    const r_2 = randomInt(0, stAlphabet1.length - 1);
    const r_3 = randomInt(0, stAlphabet1.length - 1);
    const r_4 = randomInt(0, stAlphabet2.length - 1);
    return stAlphabet1.charAt(r_1) + stAlphabet1.charAt(r_2) + stAlphabet1.charAt(r_3) + stAlphabet2.charAt(r_4);
}

//генерирует рандомное целое число в диапазоне [min] [max]
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---