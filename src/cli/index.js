import alarmistNpm from '../';
import minimist from 'minimist';

export default function cli(argv) {
  const args = minimist(argv, {
    string: ['name'],
    alias: {
      name: 'n',
    },
    stopEarly: true,
  });
  const script = args._[0];
  const name = args.name || script;
  alarmistNpm.exec(name, script);
}
