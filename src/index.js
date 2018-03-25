import alarmist from 'alarmist';

const command = 'npm';
const silentArgsPrefix = ['run', '-s'];
const noSilentArgsPrefix = ['run'];

async function exec({
  name,
  script,
  args,
  workingDir,
  service,
  metric,
  color,
  silent,
}) {
  const argsPrefix = silent ? silentArgsPrefix : noSilentArgsPrefix;
  const fullArgs = argsPrefix.concat(script).concat(args);
  await alarmist.execJob({
    name,
    command,
    args: fullArgs,
    workingDir,
    service,
    metric,
    color,
  });
}

module.exports = {
  exec: exec,
};
