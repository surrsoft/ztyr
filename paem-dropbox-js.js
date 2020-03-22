/*
DESCRIPTION: wrapper upon https://github.com/JamesMaroney/dropbox-js
DEPENDENCIES:
- https://github.com/JamesMaroney/dropbox-js
 */

/**
 *
 * @param pClientId -- api key, example 'wcxza76xbwxv0aj'
 * @param pRedirectUri -- example 'https://yyy.github.io/xxx/'
 * @returns {Promise<>}
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
        resp.text()
          .then(function (text) {
            resolve(text);
          })
          .catch(function (err) {
            console.log('!!-!!-!! err {200322081619}\n', err); // del
            reject(err);
          })
      },
    });
  });
}

/**
 * Returns content of file (1)
 *
 * @param filePath {String} - example '/file.txt'
 * @param fileContent {String} -
 * @returns {Promise<String>}
 */
function paemDropboxFileUploadReplace(filePath, fileContent) {
  return new Promise((resolve, reject) => {
    dropbox(
      'files/upload',
      {
        path: filePath,
        mode: { '.tag': 'overwrite' }
      },
      fileContent
    )
      .then(function (result) {
        console.log('!!-!!-!! ** upload: result {200322080248}\n', result); // del
      })
      .catch(function (err) {
        console.log('!!-!!-!! ** upload: err {200322080329}\n', err); // del
      });
  });
}
