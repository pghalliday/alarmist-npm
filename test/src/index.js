import alarmistNpm from '../../src';
import alarmist from 'alarmist';

const name = 'name';
const script = 'script';
const args = ['arg1', 'arg2'];
const service = true;
const color = false;
const silent = true;
const noSilent = false;
const workingDir = 'working dir';
const command = 'npm';
const noSilentArgs = ['run', script].concat(args);
const silentArgs = ['run', '-s', script].concat(args);

describe('alarmistNpm', () => {
  describe('#exec', () => {
    describe('with silent on', () => {
      before(async () => {
        await alarmistNpm.exec({
          name,
          script,
          args,
          service,
          color,
          silent,
          workingDir,
        });
      });

      it('should execute the npm script', () => {
        alarmist.execJob.should.have.been.calledWith({
          name,
          command,
          args: silentArgs,
          service,
          color,
          workingDir,
        });
      });
    });

    describe('with silent off', () => {
      before(async () => {
        await alarmistNpm.exec({
          name,
          script,
          args,
          service,
          color,
          silent: noSilent,
          workingDir,
        });
      });

      it('should execute the npm script', () => {
        alarmist.execJob.should.have.been.calledWith({
          name,
          command,
          args: noSilentArgs,
          service,
          color,
          workingDir,
        });
      });
    });
  });
});
