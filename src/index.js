/**
 * @file Generate iconfonts from stylesheets - entry point
 */
const postcss   = require('postcss');
const rulesets  = require('./rulesets');

// default options
const defaultOptions = {

  basePath: './',
  outputPath: './',
  publishPath: '',
  stylesheetPath: './',
  cachePath: '.fontcache.json',
  startUnicode: 0xEA01,
  formats: ['eot', 'woff', 'ttf'],
  verticalAlign: 'middle',
  classNamePrefix: 'iconfont',
  classNameBeforePrefix: 'iconfont-before',
  classNameAfterPrefix: 'iconfont-after',
  classNameFontSeparator: '-',
  classNameGlyphSeparator: '-',
};

module.exports = postcss.plugin('postcss-webfont', (options) => {

  const usingOptions = Object.assign({}, defaultOptions, options);

  return (root) => {

    return rulesets(root, usingOptions);

  };

});
