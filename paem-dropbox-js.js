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
function paemAuth(pClientId, pRedirectUri) {
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
