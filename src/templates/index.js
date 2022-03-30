const Config = require('../config');

// eslint-disable-next-line func-names
module.exports = function (templateParams) {
  const html = /* html */ `
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateParams.htmlWebpackPlugin.options.title}</title>
        <meta name="description" content="${Config.DESCRIPTION}" />
        <link rel="apple-touch-icon" href="/icon/logo.svg" />
        <noscript>You need to enable JavaScript!</noscript>
      </head>
      <body>
        <div id="__coffee">
          <coffee-navbar></coffee-navbar>
          <coffee-hero></coffee-hero>
          <coffee-story></coffee-story>
          <coffee-menu></coffee-menu>
          <coffee-location></coffee-location>
          <coffee-contact></coffee-contact>
          <coffee-footer></coffee-footer>
        </div>
      </body>
    </html>
  `;

  return html;
};
