var _ = require('lodash');
var path = require('path');
var fs = require('fs');

function HtmlReplaceCssModulePlugin (options) {
  // Default options
  this.options = _.extend({
    template: path.join(__dirname, 'default_index.ejs')
  }, options);
}

HtmlReplaceCssModulePlugin.prototype.apply = function (compiler) {

    compiler.plugin('emit', function(compilation, callback){
        var source = fs.readFileAsync(this.options.template);

        return callback();

    })
}

module.exports = HtmlReplaceCssModulePlugin;
