import cli from '../../../src/cli';
import alarmistNpm from '../../../src';
import {
  DEFAULT_WORKING_DIR,
  DEFAULT_COLOR_OPTION,
  DEFAULT_SILENT_OPTION,
} from '../../../src/constants';

const script = 'script';
const args = ['arg1', 'arg2'];
const argv = [script].concat(args);

describe('cli', () => {
  before(() => {
    sinon.stub(alarmistNpm, 'exec', () => Promise.resolve());
  });
  after(() => {
    alarmistNpm.exec.restore();
  });

  describe('without name', () => {
    before(() => {
      alarmistNpm.exec.reset();
      cli(argv);
    });

    it('should execute the script', () => {
      alarmistNpm.exec.should.have.been.calledWithMatch({
        name: script,
        script,
        args,
        workingDir: DEFAULT_WORKING_DIR,
        color: DEFAULT_COLOR_OPTION,
        silent: DEFAULT_SILENT_OPTION,
      });
    });
  });
});
