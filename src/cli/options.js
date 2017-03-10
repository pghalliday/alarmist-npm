import minimist from 'minimist';
import optionDefault from './utils/option-default';
import _ from 'lodash';
import cliclopts from 'cliclopts';
import {
  WORKING_DIRECTORY_VAR,
  SERVICE_VAR,
  FORCE_COLOR_VAR,
  SILENT_VAR,
  DEFAULT_WORKING_DIR,
  DEFAULT_SERVICE_OPTION,
  DEFAULT_COLOR_OPTION,
  DEFAULT_SILENT_OPTION,
  MULTIPLE_WORKING_DIRECTORIES_ERROR,
  NO_SCRIPT_ERROR,
  USAGE_TEXT,
} from '../constants';

// istanbul ignore next
const toBool = (value) => value === 'true';

const defaultService = optionDefault(
  SERVICE_VAR,
  DEFAULT_SERVICE_OPTION,
  toBool,
);

const defaultColor = optionDefault(
  FORCE_COLOR_VAR,
  DEFAULT_COLOR_OPTION,
  toBool,
);

const defaultSilent = optionDefault(
  SILENT_VAR,
  DEFAULT_SILENT_OPTION,
  toBool,
);

const defaultWorkingDirectory = optionDefault(
  WORKING_DIRECTORY_VAR,
  DEFAULT_WORKING_DIR,
);

const cliOpts = cliclopts([{
  name: 'name',
  abbr: 'n',
  help: 'The name to use for the job, defaults to the script name',
}, {
  name: 'working-dir',
  abbr: 'w',
  default: defaultWorkingDirectory,
  help: 'The directory in which to write logs, etc',
}, {
  name: 'service',
  abbr: 's',
  boolean: true,
  default: defaultService,
  help: 'Flag job as a service',
}, {
  name: 'force-color',
  abbr: 'c',
  boolean: true,
  default: defaultColor,
  help: 'Set the FORCE_COLOR environment variable for the job',
}, {
  name: 'silent',
  abbr: 'q',
  boolean: true,
  default: defaultSilent,
  help: 'Set the silent flag for npm run',
}, {
  name: 'help',
  abbr: 'h',
  alias: ['?'],
  boolean: true,
  help: 'Show help',
}, {
  name: 'version',
  abbr: 'v',
  boolean: true,
  help: 'Show version number',
}]);

export function help() {
  return USAGE_TEXT + cliOpts.usage() + '\n';
}

export function parse(argv) {
  const parsed = minimist(argv, Object.assign(cliOpts.options(), {
    stopEarly: true,
  }));
  const script = parsed._[0];
  if (parsed.version) {
    return {
      version: true,
    };
  }
  if (parsed.help) {
    return {
      help: true,
    };
  }
  if (parsed['working-dir'] instanceof Array) {
    return {
      error: MULTIPLE_WORKING_DIRECTORIES_ERROR,
    };
  }
  if (_.isUndefined(script)) {
    return {
      error: NO_SCRIPT_ERROR,
    };
  }
  const args = parsed._.slice(1);
  const name = parsed['name'] || script;
  const service = parsed['service'];
  const color = parsed['force-color'];
  const silent = parsed['silent'];
  const workingDir = parsed['working-dir'];
  return {
    name,
    script,
    args,
    service,
    color,
    silent,
    workingDir,
    help: false,
    version: false,
  };
};
