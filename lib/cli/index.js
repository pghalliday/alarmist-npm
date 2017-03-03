'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cli;

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cli(argv) {
  var args = (0, _minimist2.default)(argv, {
    string: ['name'],
    alias: {
      name: 'n'
    },
    stopEarly: true
  });
  var script = args._[0];
  var name = args.name || script;
  _2.default.exec(name, script);
}