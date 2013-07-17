grunt = require("grunt")

(->
  module.exports.register = (Handlebars, options) ->

  # Experimental helper to build a Table of Contents. Currently
  # builds a list from the headers found in markdown files.
  module.exports.toc = toc = (src) ->
    content = grunt.file.expand(src)
    .map(grunt.file.read).join('')
    .match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('')
    .replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2](#' + '$2' + ')\n')
    return new Handlebars.SafeString(content)

).call this