#!/bin/sh

# Create the application
npx create-react-app react-training

# Set up git repo
cd react-training
git init

# Install some deps for the application, plus for development to make your
# life easier
npm i --save bootstrap reactstrap

npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier \
    prettier prettier-eslint react-app-rewire-hot-loader react-app-rewired \
    react-hot-loader

# Replace react-scripts with react-app-rewired to enable hot module
# reloading (aka HMR)
sed -i '' 's/: "react-scripts/: "react-app-rewired/' package.json

# react-app-rewired also requires config-overrides.js
cat > config-overrides.js << EOF
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
EOF

# And finally a modified index.js to support HMR
cat > src/index.js << EOF
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

registerServiceWorker()

// Render once
render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
EOF

# And a little reminder to commit these upgrades
echo "Don't forget to commit your changes! You can use:"
echo "git add .gitignore README.md package.json public/ src/ yarn.lock config-overrides.js"
echo "git commit -a -m 'project created'"
