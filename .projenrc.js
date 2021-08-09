const { ConstructLibraryCdktf } = require('projen');
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
  cdktfVersion: '0.5.0',
  codeCov: true,
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
project.synth();
