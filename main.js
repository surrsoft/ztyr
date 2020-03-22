
// ---
function generatorHandler(input) {
  const engName = zintGenerateEng();
  input.val(engName);
}

function saveHandler(pValue) {
  console.log('===> saveHandler()');

  // ---
  paemDropboxFileDownload(ZTYR_FILE_NAME)
    .then(function (fileContent) {
      console.log('!!-!!-!! fileContent {200322074518}\n', fileContent); // del+
      // ---
      const newValue = fileContent + '\n'+pValue;
      console.log('!!-!!-!! newValue {200322074554}\n', newValue); // del
      // --- update file
      ztyrFileUpload(ZTYR_FILE_NAME, newValue);
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
