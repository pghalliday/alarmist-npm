'use strict';

var exec = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
    var name = _ref.name,
        script = _ref.script,
        args = _ref.args,
        workingDir = _ref.workingDir,
        service = _ref.service,
        metric = _ref.metric,
        color = _ref.color,
        silent = _ref.silent;
    var argsPrefix, fullArgs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            argsPrefix = silent ? silentArgsPrefix : noSilentArgsPrefix;
            fullArgs = argsPrefix.concat(script).concat(args);
            _context.next = 4;
            return _alarmist2.default.execJob({
              name: name,
              command: command,
              args: fullArgs,
              workingDir: workingDir,
              service: service,
              metric: metric,
              color: color
            });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function exec(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _alarmist = require('alarmist');

var _alarmist2 = _interopRequireDefault(_alarmist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var command = 'npm';
var silentArgsPrefix = ['run', '-s'];
var noSilentArgsPrefix = ['run'];

module.exports = {
  exec: exec
};