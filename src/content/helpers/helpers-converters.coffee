###! converter helpers ###

Handlebars = require('../helpers/helpers').Handlebars
Utils = require '../utils/utils'

fs    = require('fs')
grunt = require('grunt')


less     = require('less')
render   = less.render
parser   = new (less.Parser)


# module.exports.less = less = (src) ->
#   content = Utils.globFiles(src)
#   content = Utils.safeString(content)
#   less = String(content)
#   css = require('less').render(less)

module.exports.register = (Handlebars, options) ->

  # Handlebars.registerHelper "less", less

  @