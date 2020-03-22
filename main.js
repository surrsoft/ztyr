
// ---
function generatorHandler(input) {
  const engName = zintGenerateEng();
  input.val(engName);
}

function saveHandler() {
  console.log('===> saveHandler()');

  // ---
  paemDropboxFileDownload(ZTYR_FILE_NAME)
    .then(function (textResp) {
      console.log('!!-!!-!! textResp {200322074518}\n', textResp); // del+
      // ---
      const t2 = textResp + '+';
      console.log('!!-!!-!! t2 {200322074554}\n', t2); // del
      ztyrFileUpload(ZTYR_FILE_NAME, t2);
    })
    .catch(function (err) {
      console.log('!!-!!-!! dropbox download: err {200322081417}\n', err); // del
    })

}

function ztyrFileUpload(fileName, fileContent) {
  paemDropboxFileUploadReplace(fileName, fileContent);
}

// --- dropbox

// function dropboxFileGet(fileName){
//     console.log('Dropbox', Dropbox);
//     const dropboxOj = new Dropbox.Dropbox({ accessToken: ztyrDropboxAccessToken, fetch: fetch });
//     console.log('dropboxOj', dropboxOj);
// }

// ---
