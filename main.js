// --- utils
function fnZtyrAlertAndThrowEx(msg) {
  alert(msg);
  throw new Error(msg);
}

// ---
function ztyrGeneratorHandler(input) {
  const engName = zintGenerateEng();
  input.val(engName);
}

function ztyrSaveHandler(pNewName) {
  console.log('===> saveHandler()');

  // ---
  if (!zintNameVerify(pNewName)) {
    fnZtyrAlertAndThrowEx(`ERR*: invalid name; [${pNewName}]`);
  }

  // ---
  paemDropboxFileDownload(ZTYR_FILE_NAME)
    .then(function (fileContent) {
      // --- verify if name already exists
      if (zintNameContainsIs(fileContent, pNewName)) {
        fnZtyrAlertAndThrowEx(`PROHIBITED: name already exists; [${pNewName}]`);
      }
      // --- new file content
      const newValue = fileContent + pNewName + '\n';
      // --- update file
      ztyrFileUpload(ZTYR_FILE_NAME, newValue);
    })
    .catch(function (err) {
      console.log('!!-!!-!! dropbox download: err {200322081417}\n', err);
    })

}

function ztyrFileUpload(fileName, fileContent) {
  paemDropboxFileUploadReplace(fileName, fileContent)
    .then(function () {
      alert('SUCCESS');
    })
}

// --- dropbox

// function dropboxFileGet(fileName){
//     console.log('Dropbox', Dropbox);
//     const dropboxOj = new Dropbox.Dropbox({ accessToken: ztyrDropboxAccessToken, fetch: fetch });
//     console.log('dropboxOj', dropboxOj);
// }

// ---
