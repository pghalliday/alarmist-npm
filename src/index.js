import alarmist from 'alarmist';

const command = 'npm';
const argsPrefix = ['run', '-s'];

async function exec(name, script) {
  const args = argsPrefix.concat(script);
  await alarmist.execJob({
    name,
    command,
    args,
  });
}

module.exports = {
  exec: exec,
};
