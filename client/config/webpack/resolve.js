const path = require('path');

const RELATIVE_PATH = path.join(__dirname, '../../');

const resolve = {
  alias: {
    Containers: path.resolve(path.join(RELATIVE_PATH, 'src/containers')),
    Components: path.resolve(path.join(RELATIVE_PATH, 'src/components/')),
    Styles: path.resolve(path.join(RELATIVE_PATH, 'src/styles/'))
  }
};

module.exports = resolve;
