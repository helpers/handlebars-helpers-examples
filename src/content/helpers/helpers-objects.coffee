###! object helpers ###

Utils = require '../utils/utils'
grunt = require 'grunt'
_     = require 'lodash'

pkg = grunt.file.readJSON('package.json')


module.exports.obj = obj = (prop) ->
  readObj = grunt.file.readJSON('package.json')
  _(readObj).pluck(prop).join('')
  # keys = Object.keys(readObj)
  # keys = Object.getOwnPropertyNames(readObj)
  # grunt.file.match(keys, 'n*')

module.exports.json = json = (context) ->
  context = Utils.readJSON(context)
  Utils.safeString(JSON.stringify(context, null, 2))


module.exports.listprops = listprops = (obj) ->
  obj = Utils.readJSON(obj)
  # keys = Object.getOwnPropertyNames(file)
  # objectToInspect = undefined
  # result = []
  # objectToInspect = Utils.readJSON(obj)
  # while objectToInspect isnt null
  #   result = result.concat(Object.getOwnPropertyNames(objectToInspect))
  #   objectToInspect = Object.getPrototypeOf(objectToInspect)
  # result
  result = ""
  for i of obj
    result += i + ": " + obj[i] + "\n"  if obj.hasOwnProperty(i)
  result

# Value: extracts a value from a specific property
module.exports.value = value = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  prop = _.pluck(prop)
  Utils.safeString(prop)

# Property: extracts a specific property
module.exports.prop = prop = (file, prop) ->
  file = Utils.readJSON(file)
  prop = _.pick(file, prop)
  Utils.safeString("\n" + JSON.stringify(prop, null, 2))

# Stringify: stringifies to JSON
module.exports.stringify = stringify = (file, props) ->
  file = Utils.readJSON(file)
  Utils.safeString(JSON.stringify(file, null, 2))


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper 'json', json
  Handlebars.registerHelper "obj", obj
  Handlebars.registerHelper 'stringify', stringify
  Handlebars.registerHelper 'value', value
  Handlebars.registerHelper 'prop', prop
  Handlebars.registerHelper "listprops", listprops

  @