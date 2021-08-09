const { ConstructLibraryCdktf, JsonFile } = require('projen');

const snowflakeTFProviderVersion = '0.25.15';
const cdktfVersion = '0.5.0';
const CDKTF_JSON_FILE = 'cdktf.json';

const project = new ConstructLibraryCdktf({
  name: 'cdktf-snowflake',
  authorName: 'Bryan Galvin',
  authorEmail: 'bcgalvin@gmail.com',
  repository: 'git@github.com:bcgalvin/cdktf-snowflake.git',
  description: 'High level cdktf construct to provision snowflake resources',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/bcgalvin/cdktf-snowflake.git',
  license: 'Apache-2.0',
  defaultReleaseBranch: 'main',
  cdktfVersion: cdktfVersion,
  bundledDeps: [`cdktf-cli@^${cdktfVersion}`],
  codeCov: true,
  minNodeVersion: '12.13.0',
  releaseEveryCommit: true,
  releaseToNpm: true,
  python: {
    distName: 'cdktf-snowflake',
    module: 'cdktf_snowflake',
  },
  eslint: false,
  gitignore: [
    '.DS_Store',
    '**/*.js',
    '**/*.d.ts',
    'package-lock.json',
    'yarn.lock',
    '/test/__snapshots__/',
    '.gen'
  ],
});

project.tasks.tryFind('build').prependExec('rm -rf ./src/* && cdktf get && cp -R .gen/providers/snowflake/* ./src/');
project.tasks.tryFind('build').prependExec('yarn global add cdktf-cli')
project.tasks.tryFind('build').exec('rm README.md && cat API.md >> README.md')

new JsonFile(project, CDKTF_JSON_FILE, {
  obj: {
    language: 'typescript',
    app: 'echo noop',
    terraformProviders: [
      `chanzuckerberg/snowflake@~> ${snowflakeTFProviderVersion}`
    ],
  },
});

project.synth();
