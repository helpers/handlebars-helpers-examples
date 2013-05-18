###! fs helpers ###

Handlebars = require('../helpers/helpers').Handlebars

Utils = require '../utils/utils'
grunt = require 'grunt'
path  = require 'path'
to    = require 'to'
_     = require 'lodash'


# NOTE: Most of these helpers are experimental. 
# Please do not use in production. 
# 

# Copy: copies src file from A to B. USE WITH CAUTION!!! Usage: {{copy [a] [b]}}
module.exports.copy = copy = (a, b) ->
  Utils.copyFile(a, b)

# Glob: reads in data from a markdown file, and uses the first heading
# as a section heading, and then copies the rest of the content inline.
# Usage: {{{ glob [file] }}
module.exports.glob = glob = (src, compare_fn) ->
  content = Utils.globFiles(src, compare_fn)
  Utils.safeString(content)

module.exports.chapter = chapter = (src) ->
  content = Utils.globFiles(src)
  Utils.safeString(content)

module.exports.extract = extract = (str) ->
  content = Utils.globFiles(str)
  Utils.safeString(content)

module.exports.dir = dir = (src) ->
  list = grunt.file.expandMapping(src)
  yml = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.dir = dirJSON = (src) ->
  list = grunt.file.expand(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)

module.exports.expMappingYAML = expMappingYAML = (src) ->
  list = grunt.file.expandMapping(src)
  yml  = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.expMappingJSON = expMappingJSON = (src) ->
  list = grunt.file.expandMapping(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)

# module.exports.toc = toc = (src) ->
#   content = grunt.file.expand(src)
#   .map(grunt.file.read)
#   .join(grunt.util.normalizelf(grunt.util.linefeed))

#   # headings = content.match(/(^#{1,}?)([ \t]+(.*))/gm).join('\n')
#   headings = content.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('\n')
#     .replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2]($2)\n')
#   Utils.safeString(headings)

module.exports.toc = toc = (src) ->
  content = grunt.file.expand(src)
  .map(grunt.file.read)
  .join(grunt.util.normalizelf(grunt.util.linefeed))
  headings = content.match(Utils.findHeadings).join('')
  output = headings.replace(Utils.findHeadings, '$1 [$2](#' + '$2' + ')\n')
  Utils.safeString(output)

module.exports.listHelpers = listHelpers = (src) ->
  sep = '# New DOCUMENT\n'
  helperLine = /(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g
  helperName = /(Handlebars.registerHelper ")(.*)(".*)/g
  # return an array of file paths
  content = grunt.file.expand(src)
  # read the contents of each file
  .map(grunt.file.read).join('')
  # .match(helperLine).sort().join('')
  # .replace(helperName, '* **$2**: ')
  Utils.safeString(content)


# module.exports.listHelpers = listHelpers = (src) ->
#   banner = '# New DOCUMENT\n'
#   content = banner + grunt.file.expand(src)
#   .map((filepath) ->
#     src = grunt.file.read(filepath)
#     src
#   ).join("\n# SLSLSLSLLLLLLLLSSSSSSSSSSSSSSS\n") + "# footer"

#   # helperLines = content.match(/(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g).join('')
#   # helperNames = helperLines.replace(/(Handlebars.registerHelper ")(.*)(".*)/g, '* $2')

#   Utils.safeString(content)

#   # ).join('\n# NEW FILE \n')
#   # finalOutput = Utils.safeString("# Start\n" + content)

# module.exports.path = path = (src) ->
#   banner = '# New DOCUMENT\n'
#   content = banner + grunt.file.expand(src)
#   .map(grunt.file.read)
#   .join(grunt.util.normalizelf(grunt.util.linefeed))
  
#   helperLines = content.match(/(Handlebars.registerHelper\s")(.*",\s)(.*\s)/g).join('')
#   helperNames = helperLines.replace(/(Handlebars.registerHelper ")(.*)(".*)/g, '* $2')

#   Utils.safeString(output)


# Define Section
module.exports.section = defineSection = (section, options) ->
  if Handlebars.sections
    Handlebars.sections[section] = options.fn(this)
  Utils.safeString ''

# Render Section
module.exports.section = renderSection = (section, options) ->
  if Handlebars.sections and Handlebars.sections[section]
    content = Handlebars.sections[section]
  else
    content = options.fn this
  Utils.safeString content

# Usage: {{ include [partial] }}
module.exports.include = include = (template, options) ->
  partial = Handlebars.partials[template]
  if (typeof partial is "string")
    partial = Handlebars.compile(partial)
    Handlebars.partials[template] = partial
  return Utils.safeString('Partial **' + template + '** not found.')  unless partial
  context = _.extend({}, this, options.hash)
  Utils.safeString partial(context)

# Adds support for passing arguments to partials. Arguments are merged with 
# the context for rendering only (non destructive). 
# 
# Use `:token` syntax to replace parts of the template path. 
# Tokens are replaced in order.
# 
# USAGE: {{partial 'path.to.partial' context=newContext foo='bar' }}
# USAGE: {{partial 'path.:1.:2' replaceOne replaceTwo foo='bar' }}
module.exports.partial = partial = (template) ->
  values = Array::slice.call(arguments, 1)
  opts = values.pop()
  until done
    value = values.pop()
    if value
      template = template.replace(/:[^\.]+/, value)
    else
      done = true
  partial = Handlebars.partials[template]
  if (typeof partial is "string")
    partial = Handlebars.compile(partial)
    Handlebars.partials[template] = partial
  return Utils.safeString('Partial **' + template + '** not found.')  unless partial
  context = _.extend({}, opts.context or this, _.omit(opts, "context", "fn", "inverse"))
  Utils.safeString partial(context)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "copy", copy
  Handlebars.registerHelper "dir", dir
  Handlebars.registerHelper "dirJSON", dirJSON
  Handlebars.registerHelper "expMappingYAML", expMappingYAML
  Handlebars.registerHelper "expMappingJSON", expMappingJSON
  Handlebars.registerHelper "glob", glob
  Handlebars.registerHelper "extract", extract
  Handlebars.registerHelper "chapter", chapter
  Handlebars.registerHelper "toc", toc
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection
  Handlebars.registerHelper "listHelpers", listHelpers

  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "partial", partial

  @