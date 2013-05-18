// Assemble Engine Loader
var EngineLoader = options.EngineLoader = assemble.EngineLoader(options);
var engine = null;
EngineLoader.getEngine(function(err, results) {
  if(err) {
    console.log(err);
    return;
  }
  engine = options.engine = results;
});

Handlebars.registerHelper "copy", copy

  Handlebars.registerHelper "dir", dir
  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "expMappingYAML", expMappingYAML
  Handlebars.registerHelper "expMappingJSON", expMappingJSON
  Handlebars.registerHelper "glob", glob
  Handlebars.registerHelper "extract", extract
  Handlebars.registerHelper "chapter", chapter
     Handlebars.registerHelper "toc", toc
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection
  Handlebars.registerHelper "listHelpers", listHelpers
  Handlebars.registerHelper "partial", partial