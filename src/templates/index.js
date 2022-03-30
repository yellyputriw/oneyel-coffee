const Config = require('../config');

//eslint-disable-next-line func-names
module.exports = function (templateParams) {
  const html = /* HTML */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateParams.htmlWebpackPlugin.options.title}</title>
        <meta name="description" content="${Config.DESCRIPTION}" />
        <link rel="shortcut icon" href="/icon/logo.svg" />
        <noscript>You need to enable JavaScript!</noscript>
      </head>
      <body>
        <oc-navbar></oc-navbar>
        <oc-hero></oc-hero>
        <oc-story></oc-story>
        <oc-menu></oc-menu>
        <oc-locations></oc-locations>
        <oc-contact></oc-contact>
        <oc-footer></oc-footer>
      </body>
    </html>
  `;

  return html;
};
