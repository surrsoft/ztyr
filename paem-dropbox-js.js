/*
DEPENDENCIES:
- https://github.com/JamesMaroney/dropbox-js
 */

/**
 *
 * @param pClientId -- api key, example 'wcxza76xbwxv0aj'
 * @param pRedirectUri -- example 'https://yyy.github.io/xxx/'
 * @returns {Promise<any>}
 */
function paemDropboxAuth(pClientId, pRedirectUri) {
  return new Promise((resolve, reject) => {
    try {
      dropbox.authenticate({ client_id: pClientId, redirect_uri: pRedirectUri, },
        function () {
          resolve();
        });
    } catch (e) {
      reject(e);
    }
  })
}

/**
 * Returns content of file (1)
 *
 * @param filePath {String} - example '/file.txt'
 * @returns {Promise<String>}
 */
function paemDropboxFileDownload(filePath) {
  return new Promise((resolve, reject) => {
    dropbox('files/download', { path: filePath }, {
      onComplete: function (result, resp) {
        console.log('!!-!!-!! -> onComplete() {200322061108}'); // del+
        console.log('!!-!!-!! result {200322060448}\n', result); // del+
        console.log('!!-!!-!! resp {200322063834}\n', resp); // del+
        resp.text()
          .then(function (text) {
            console.log('!!-!!-!! text {200322064020}\n', text); // del
            resolve(text);
          })
          .catch(function (err) {
            console.log('!!-!!-!! err {200322064035}\n', err); // del
            reject(err);
          })
      },
    });
  });
}
