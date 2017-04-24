module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LayoutComponent',
      externals: {
        react: 'React'
      }
    }
  }
}
