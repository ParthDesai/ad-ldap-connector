if (process.platform !== 'win32') return;

var certs = require('windows-certs');

var https = require('https');

var cas = https.globalAgent.options.ca =
    https.globalAgent.options.ca || [];

certs.get({
  storeLocation: 'LocalMachine',
  storeName: ['TrustedPeople', 'CertificateAuthority', 'Root']
}).forEach(function (cert) {
  cas.push(cert.pem);
});