module.exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/examples',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/recipes'
  })
}
