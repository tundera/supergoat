const inflection = require('inflection')
const path = require('path')
const findWorkspaceRoot = require('find-yarn-workspace-root')

const workspaceRoot = findWorkspaceRoot(process.cwd()) ?? process.cwd()
const camelizePath = (name, lower = true) => inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeProp = (name) => inflection.pluralize(name)

const camelizeQuery = (name, lower = false) => inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeQuery = (name) => inflection.pluralize(name)

// Specify paths for projects
const componentsPath = path.join(workspaceRoot, 'packages', 'components')
const modelsPath = path.join(workspaceRoot, 'services', 'graphql')
const pagesPath = path.join(workspaceRoot, 'apps', 'next-app', 'pages')
const apiPath = path.join(pagesPath, 'api')

module.exports = {
  templates: `${__dirname}/internal/templates`,
  helpers: {
    camelizedPathName: (name, lower = true) => camelizePath(name, lower),
    camelizedBaseName: (name, lower = false) => path.parse(camelizePath(name, lower)).base,
    baseName: (name) => path.parse(name).base,
    dirName: (name) => path.parse(name).dir,
    pluralizePageProp: (name) => pluralizeProp(name),
    camelizedQueryHook: (name, plural) => {
      const query = plural ? pluralizeQuery(name) : name
      const camelizedQuery = camelizeQuery(query)

      return `use${camelized}Query`
    },
    workspaceRoot,
    pagesPath,
    apiPath,
    componentsPath,
    modelsPath,
    createPagePath: (name) => path.join(pagesPath, name),
    createApiPath: (name) => path.join(apiPath, name),
    createComponentPath: (name) => path.join(componentsPath, name),
    createModelPath: (name) => path.join(modelsPath, name),
    prependComponentsPath: (location) => path.join(componentsPath, location),
    prependModelsPath: (location) => path.join(modelsPath, location),
  },
}
