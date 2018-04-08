const path = require('path');

const SRC = path.join(__dirname, '../../src');

const resolve = {
  alias: {
    components: path.join(SRC, 'components'),
    containers: path.join(SRC, 'containers'),
    styles: path.join(SRC, 'styles')
  }
};

module.exports = resolve;
