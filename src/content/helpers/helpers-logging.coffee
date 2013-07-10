###! logging helpers ###

Utils = require '../utils/utils'
grunt = require 'grunt'
util  = require 'util'
to    = require 'to'


# Helper missing
module.exports.helperMissing = helperMissing = (arg) ->
  if arguments.length is 2
    `undefined`
  else
    throw new Error("Could not find helper '" + arg + "'.")

# Block helper missing
toString = Object::toString
functionType = "[object Function]"
module.exports.blockHelperMissing = blockHelperMissing = (context, options) ->
  inverse = options.inverse or ->
  fn = options.fn
  ret = ""
  type = toString.call(context)
  context = context.call(this)  if type is functionType
  if context is true
    fn this
  else if context is false or not context?
    inverse this
  else if type is "[object Array]"
    if context.length > 0
      i = 0
      j = context.length

      while i < j
        ret = ret + fn(context[i])
        i++
    else
      ret = inverse(this)
    ret
  else
    fn context

# Log
module.exports.log = log = (value) ->
  console.log value

# Debug
module.exports.debug = debug = (value) ->
  console.log 'Context: ', @
  console.log('Value: ', value) unless Utils.isUndefined value
  console.log '-----------------------------------------------'

module.exports.expandMapping = expandMapping = (src) ->
  list = Utils.expandMapping(src)
  yml = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.expandYAML = expandYAML = (src) ->
  list = grunt.file.expand(src)
  yml = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.expandJSON = expandJSON = (src) ->
  list = grunt.file.expand(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "helperMissing", helperMissing
  Handlebars.registerHelper "blockHelperMissing", blockHelperMissing
  Handlebars.registerHelper "expandMapping", expandMapping
  Handlebars.registerHelper "expandYAML", expandYAML
  Handlebars.registerHelper "expandJSON", expandJSON
  Handlebars.registerHelper "log", log
  Handlebars.registerHelper "debug", debug

  # {{inspect}}
  Handlebars.registerHelper "inspect", (obj, ext) ->
    if Utils.isUndefined(options.ext)
      ext = ".html"
    else
      ext = options.ext
    md = "``` " + "json" + "\n" + (util.inspect(obj, true, null)) + "\n```"
    html = '<pre class="json">' + '\n' + (util.inspect(obj, true, null)) + '\n</pre>'
    result = Utils.switchOutput(ext, md, html)
    Utils.safeString result
  

  @