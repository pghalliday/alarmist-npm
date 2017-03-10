export const WORKING_DIRECTORY_VAR = 'ALARMIST_WORKING_DIRECTORY';
export const FORCE_COLOR_VAR = 'FORCE_COLOR';
export const SERVICE_VAR = 'ALARMIST_SERVICE';
export const SILENT_VAR = 'ALARMIST_NPM_SILENT';
export const DEFAULT_WORKING_DIR = '.alarmist';
export const DEFAULT_COLOR_OPTION = true;
export const DEFAULT_SILENT_OPTION = true;
export const DEFAULT_SERVICE_OPTION = false;
export const USAGE_TEXT = `
Usage: alarmist-npm [options] <script> [<arg>...]

Start a job using an npm script name. The working directory
should match the working directory of the monitor and usually this will
be the default. If the job is started via a watcher started
by the monitor then the 'ALARMIST_WORKING_DIRECTORY' environment
variable will have already been set.

<script>: The command to start the job
<arg>: arguments for the command

Environment Variables:

${FORCE_COLOR_VAR}
${WORKING_DIRECTORY_VAR}
${SERVICE_VAR}
${SILENT_VAR}

Options:
`;
// eslint-disable-next-line max-len
export const MULTIPLE_WORKING_DIRECTORIES_ERROR = 'Working directory specified multiple times';
export const NO_SCRIPT_ERROR = 'Script not specified';
