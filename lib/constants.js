'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WORKING_DIRECTORY_VAR = exports.WORKING_DIRECTORY_VAR = 'ALARMIST_WORKING_DIRECTORY';
var FORCE_COLOR_VAR = exports.FORCE_COLOR_VAR = 'FORCE_COLOR';
var SILENT_VAR = exports.SILENT_VAR = 'ALARMIST_NPM_SILENT';
var DEFAULT_WORKING_DIR = exports.DEFAULT_WORKING_DIR = '.alarmist';
var DEFAULT_COLOR_OPTION = exports.DEFAULT_COLOR_OPTION = true;
var DEFAULT_SILENT_OPTION = exports.DEFAULT_SILENT_OPTION = true;
var USAGE_TEXT = exports.USAGE_TEXT = '\nUsage: alarmist-npm [options] <script> [<arg>...]\n\nStart a job using an npm script name. The working directory\nshould match the working directory of the monitor and usually this will\nbe the default. If the job is started via a watcher started\nby the monitor then the \'ALARMIST_WORKING_DIRECTORY\' environment\nvariable will have already been set.\n\n<script>: The command to start the job\n<arg>: arguments for the command\n\nEnvironment Variables:\n\nFORCE_COLOR\nALARMIST_WORKING_DIRECTORY\nALARMIST_NPM_SILENT\n\nOptions:\n';
// eslint-disable-next-line max-len
var MULTIPLE_WORKING_DIRECTORIES_ERROR = exports.MULTIPLE_WORKING_DIRECTORIES_ERROR = 'Working directory specified multiple times';
var NO_SCRIPT_ERROR = exports.NO_SCRIPT_ERROR = 'Script not specified';