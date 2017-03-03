'use strict';

var exec = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(name, script) {
    var args;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = argsPrefix.concat(script);
            _context.next = 3;
            return _alarmist2.default.execJob({
              name: name,
              command: command,
              args: args
            });

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function exec(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _alarmist = require('alarmist');

var _alarmist2 = _interopRequireDefault(_alarmist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var command = 'npm';
var argsPrefix = ['run', '-s'];

module.exports = {
  exec: exec
};