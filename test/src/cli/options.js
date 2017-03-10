import {
  help,
  parse,
} from '../../../src/cli/options';
import _ from 'lodash';
import {
  DEFAULT_WORKING_DIR,
  DEFAULT_COLOR_OPTION,
  DEFAULT_SERVICE_OPTION,
  DEFAULT_SILENT_OPTION,
  NO_SCRIPT_ERROR,
  MULTIPLE_WORKING_DIRECTORIES_ERROR,
  USAGE_TEXT,
} from '../../../src/constants';

const workingDir = 'working dir';
const name = 'name';
const script = 'script';
const arg1 = '--arg1';
const arg2 = '--arg2';

const noScript = [
];

const fullVersionOption = [
  '--version',
];

const shortVersionOption = [
  '-v',
];

const fullHelpOption = [
  '--help',
];

const shortHelpOption = [
  '-h',
];

const aliasHelpOption = [
  '-?',
];

const noOptions = [
  script,
  arg1,
  arg2,
];

const shortOptions = [
  '-n',
  name,
  '-c',
  '-s',
  '-q',
  '-w',
  workingDir,
  script,
  arg1,
  arg2,
];

const fullOptions = [
  '--name',
  name,
  '--force-color',
  '--service',
  '--silent',
  '--working-dir',
  workingDir,
  script,
  arg1,
  arg2,
];

const negatedOptions = [
  '--no-force-color',
  '--no-service',
  '--no-silent',
  script,
  arg1,
  arg2,
];

const workingDirectories = [
  '--working-dir',
  workingDir,
  '--working-dir',
  workingDir,
  script,
  arg1,
  arg2,
];

let options;

describe('cli', () => {
  describe('options', () => {
    describe('#help', () => {
      it('should return the help message', () => {
        help().should.match(
          new RegExp('^' + _.escapeRegExp(USAGE_TEXT))
        );
      });
    });

    describe('#parse', () => {
      _.forEach({
        'with no script': {
          argv: noScript,
          error: NO_SCRIPT_ERROR,
        },
        'with no multiple working directories specified': {
          argv: workingDirectories,
          error: MULTIPLE_WORKING_DIRECTORIES_ERROR,
        },
      }, (value, key) => {
        describe(key, () => {
          before(() => {
            options = parse(value.argv);
          });

          it('should set the error', () => {
            options.error.should.eql(value.error);
          });
        });
      });

      _.forEach({
        'with the full version option': fullVersionOption,
        'with the short version option': shortVersionOption,
      }, (value, key) => {
        describe(key, () => {
          before(() => {
            options = parse(value);
          });

          it('should set the version flag to true', () => {
            options.version.should.eql(true);
          });

          it('should not set the error', () => {
            expect(options.error).to.not.be.ok;
          });
        });
      });

      _.forEach({
        'with the full help option': fullHelpOption,
        'with the short help option': shortHelpOption,
        'with the alias help option': aliasHelpOption,
      }, (value, key) => {
        describe(key, () => {
          before(() => {
            options = parse(value);
          });

          it('should set the help flag to true', () => {
            options.help.should.eql(true);
          });

          it('should not set the error', () => {
            expect(options.error).to.not.be.ok;
          });
        });
      });

      _.forEach({
        'with no options': {
          argv: noOptions,
          name: script,
          service: DEFAULT_SERVICE_OPTION,
          color: DEFAULT_COLOR_OPTION,
          silent: DEFAULT_SILENT_OPTION,
          workingDir: DEFAULT_WORKING_DIR,
        },
        'with short options': {
          argv: shortOptions,
          name: name,
          service: true,
          color: true,
          silent: true,
          workingDir,
        },
        'with full options': {
          argv: fullOptions,
          name: name,
          service: true,
          color: true,
          silent: true,
          workingDir,
        },
        'with negated options': {
          argv: negatedOptions,
          name: script,
          service: false,
          color: false,
          silent: false,
          workingDir: DEFAULT_WORKING_DIR,
        },
      }, (value, key) => {
        describe(key, () => {
          before(() => {
            options = parse(value.argv);
          });

          it('should set the name', () => {
            options.name.should.eql(value.name);
          });

          it('should set the script', () => {
            options.script.should.eql(script);
          });

          it('should set the args', () => {
            options.args.should.eql([arg1, arg2]);
          });

          it('should set the service option', () => {
            options.service.should.eql(value.service);
          });

          it('should set the color option', () => {
            options.color.should.eql(value.color);
          });

          it('should set the silent option', () => {
            options.silent.should.eql(value.silent);
          });

          it('should set the working directory', () => {
            options.workingDir.should.eql(value.workingDir);
          });

          it('should set the help flag to false', () => {
            options.help.should.eql(false);
          });

          it('should set the version flag to false', () => {
            options.version.should.eql(false);
          });

          it('should not set the error', () => {
            expect(options.error).to.not.be.ok;
          });
        });
      });
    });
  });
});
