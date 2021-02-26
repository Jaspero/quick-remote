#!/usr/bin/env node
const y = require('yargs');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

y
  .usage(`Usage: r <remote> -b <branch> -p <project>`)
  .command(
    'r <remote>',
    'Repository to create a remote for',
    argv =>
      argv.positional('remote', {
        describe: '',
        type: 'string'
      })
        .option(
          'n',
          {
            alias: 'name',
            describe: 'Name of the remote'
          }
        )
        .option(
          'b',
          {
            alias: 'branch',
            describe: 'Branch in the remote to merge',
            default: 'master'
          }
        )
        .option(
          'p',
          {
            alias: 'project',
            describe: 'Project to clone'
          }
        )
        .option(
          's',
          {
            alias: 'source',
            describe: 'Source version control repository',
            default: 'git@github.com:'
          }
        )
        .option(
          'f',
          {
            alias: 'force',
            describe: 'Appends --allow-unrelated-histories when merging remote',
            type: 'boolean',
            default: true
          }
        )
        .option(
          'c',
          {
            alias: 'clone',
            describe: 'Which type of cloning to use (HTTPS, SSH)',
            default: 'SSH'
          }
        )
      ,
    async values => {

      const {
        remote,
        branch,
        project,
        s,
        name,
        force,
        clone
      } = values;

      let source = s;
      let suffix = '';
      if (clone === 'HTTPS') {
          source = 'https://github.com/';
          suffix = '.git';
      }

      let cwd = process.cwd();

      if (project) {
        await exec(`git clone ${source}${project}`);
        cwd += '/' + project.split('/').pop();
      }

      const remoteName = name || remote.split('/').pop();

      await exec(`git remote add ${remoteName} ${source}${remote}${suffix}`, {cwd});
      await exec(`git fetch ${remoteName}`, {cwd});

      let merge = `git merge ${remoteName}/${branch}`;

      if (force) {
        merge += ` --allow-unrelated-histories`;
      }

      await exec(merge, {cwd})
    }
  )
  .argv;
