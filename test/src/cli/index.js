import cli from '../../../src/cli';
import alarmistNpm from '../../../src';

const name = 'name';
const script = 'script';

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
      cli([script]);
    });

    it('should execute the script', () => {
      alarmistNpm.exec.should.have.been.calledWith(
        script, script
      );
    });
  });

  describe('with a name', () => {
    before(() => {
      alarmistNpm.exec.reset();
      cli(['-n', name, script]);
    });

    it('should execute the script', () => {
      alarmistNpm.exec.should.have.been.calledWith(
        name, script
      );
    });
  });
});
