# alarmist-npm

[![Build Status](https://travis-ci.org/pghalliday/alarmist-npm.svg?branch=master)](https://travis-ci.org/pghalliday/alarmist-npm)
[![Build status](https://ci.appveyor.com/api/projects/status/1ruvtqou6d8lwt6i/branch/master?svg=true)](https://ci.appveyor.com/project/pghalliday/alarmist-npm/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/alarmist-npm/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/alarmist-npm?branch=master)

Wrap npm scripts in alarmist jobs

## Usage

It is expected that your project already has `alarmist` installed

```
npm install alarmist alarmist-npm
```

You can then add something like the following to your `package.json` scripts

```javascript
{
  ...
  "scripts": {
    ...
    "my-script": "do something",
    "alarmist:my-script": "alarmist-npm -n job-name my-script",
    ...
  },
  ...
}
```

The job name is optional and will default to the script name.

**NB. The script will be run with the silent flag to suppress the npm header, etc**

## Contributing

Run lint, tests, build, etc before pushing/submitting PRs

- `npm test` - lint and test
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
- `npm start` - watch for changes and build, lint, test, etc in parallel with alarmist
