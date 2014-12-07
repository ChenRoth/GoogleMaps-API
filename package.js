Package.describe({
  summary: 'a FORKED revision of Google maps for meteor, originally by ServiceLocale',
  version: '0.9.6',
  name: 'chenroth:googlemaps-api',
  git: 'https://github.com/ChenRoth/GoogleMaps-API'
});

Npm.depends({'chenroth-googlemaps':'0.1.22'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'server');
  api.export('GoogleMaps', 'server');
  api.addFiles('google-maps-server.js', 'server');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('servicelocale:googlemaps-api');
  api.addFiles('google-maps-server-test.js', 'server');
});
