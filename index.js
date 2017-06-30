var path = require('path');
var fs = require('fs');
var posthtml = require('posthtml');
var posthtmlCssModules = require('posthtml-css-modules');

function HtmlReplaceCssModulePlugin(options) {

    this.options = options;
}

HtmlReplaceCssModulePlugin.prototype.apply = function(compiler) {

    var _self = this;
    compiler.plugin('compilation', function(compilation) {

        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {

            posthtml([posthtmlCssModules(_self.options.translate)])
            .process(htmlPluginData.html)
            .then(function (result) {
                htmlPluginData.html = result.html;
                callback(null, htmlPluginData);
            });
        });
    });

}

module.exports = HtmlReplaceCssModulePlugin;
