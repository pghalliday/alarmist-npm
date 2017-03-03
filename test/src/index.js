import alarmistNpm from '../../src';
import alarmist from 'alarmist';

const name = 'name';
const script = 'script';
const command = 'npm';
const args = ['run', '-s', script];

describe('alarmistNpm', () => {
  describe('#exec', () => {
    before(async () => {
      await alarmistNpm.exec(name, script);
    });

    it('should execute the npm script', () => {
      alarmist.execJob.should.have.been.calledWith({
        name,
        command,
        args,
      });
    });
  });
});
