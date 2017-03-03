// polyfills
import 'babel-polyfill';

// assertions
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
chai.should();
global.expect = chai.expect;
global.sinon = sinon;

// stub alarmist methods
import './alarmist';
