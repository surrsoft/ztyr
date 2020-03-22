// --- consts
// app key
var ZTYR_CLIENT_ID = 'wcxza76xbwxv0aj';
var ZTYR_REDIRECT_URI = 'https://surrsoft.github.io/ztyr/';
var ZTYR_FILE_NAME = '/tmp.txt';

// ---
function generatorHandler(input) {
  const engName = generateEng();
  input.val(engName);
}

function saveHandler() {
  console.log('===> saveHandler()');

  // ---
  dropbox.authenticate({
      client_id: ZTYR_CLIENT_ID,
      redirect_uri: ZTYR_REDIRECT_URI,
    },
    function () {
      console.log('INFO*', 'successfully authenticated'); // del+
      dropbox('files/download', { path: ZTYR_FILE_NAME }, {
        onComplete: function (result, resp) {
          console.log('!!-!!-!! -> onComplete() {200322061108}'); // del+
          console.log('!!-!!-!! result {200322060448}\n', result); // del+
          console.log('!!-!!-!! resp {200322063834}\n', resp); // del+
          resp.text()
            .then(function (text) {
              console.log('!!-!!-!! text {200322064020}\n', text); // del
            })
            .catch(function (err) {
              console.log('!!-!!-!! err {200322064035}\n', err); // del
            })
        },
      });
    });

}


// --- dropbox

// function dropboxFileGet(fileName){
//     console.log('Dropbox', Dropbox);
//     const dropboxOj = new Dropbox.Dropbox({ accessToken: ztyrDropboxAccessToken, fetch: fetch });
//     console.log('dropboxOj', dropboxOj);
// }

// ---
