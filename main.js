// --- consts
var ZTYR_FILE_NAME = '/tmp.txt';

// ---
function generatorHandler(input) {
  const engName = zintGenerateEng();
  input.val(engName);
}

function saveHandler() {
  console.log('===> saveHandler()');

  // ---
  paemDropboxFileDownload(ZTYR_FILE_NAME);

}

// --- dropbox

// function dropboxFileGet(fileName){
//     console.log('Dropbox', Dropbox);
//     const dropboxOj = new Dropbox.Dropbox({ accessToken: ztyrDropboxAccessToken, fetch: fetch });
//     console.log('dropboxOj', dropboxOj);
// }

// ---
