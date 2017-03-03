import alarmist from 'alarmist';
import sinon from 'sinon';

sinon.stub(alarmist, 'execJob', async () => Promise.resolve());
