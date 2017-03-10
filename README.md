# alarmist-npm

[![Build Status](https://travis-ci.org/pghalliday/alarmist-npm.svg?branch=master)](https://travis-ci.org/pghalliday/alarmist-npm)
[![Build status](https://ci.appveyor.com/api/projects/status/1ruvtqou6d8lwt6i/branch/master?svg=true)](https://ci.appveyor.com/project/pghalliday/alarmist-npm/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/alarmist-npm/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/alarmist-npm?branch=master)

Wrap npm scripts in alarmist jobs

## Usage

It is expected that your project already has [`alarmist`](https://www.npmjs.com/package/alarmist) installed

```
npm install --save-dev alarmist alarmist-npm
```

You can then add something like the following to your `package.json` scripts (using `mocha` for tests and `chokidar` to watch for changes)

```javascript
{
  ...
  "scripts": {
    ...
    "cmd:test": "mocha",
    "alarmist:test": "chokidar \"+(src|test)/**/*\" -c \"alarmist-npm cmd:test\"",
    ...
  },
  ...
}
```

The job name will default to the script name.

```
Usage: alarmist-npm [options] <script> [<arg>...]

Start a job using an npm script name. The working directory
should match the working directory of the monitor and usually this will
be the default. If the job is started via a watcher started
by the monitor then the 'ALARMIST_WORKING_DIRECTORY' environment
variable will have already been set.

<script>: The command to start the job
<arg>: arguments for the command

Environment Variables:

FORCE_COLOR
ALARMIST_WORKING_DIRECTORY
ALARMIST_SERVICE
ALARMIST_NPM_SILENT

Options:
    --name, -n            The name to use for the job, defaults to the script name
    --working-dir, -w     The directory in which to write logs, etc (default: ".alarmist")
    --service, -s         Flag the job as a service (default: false)
    --force-color, -c     Set the FORCE_COLOR environment variable for the job (default: true)
    --silent, -q          Set the silent flag for npm run (default: true)
    --help, -h            Show help
    --version, -v         Show version number
```

## Contributing

Run lint, tests, build, etc before pushing/submitting PRs

- `npm test` - lint and test
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
- `npm start` - watch for changes and build, lint, test, etc in parallel with alarmist
