const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

try {
  const configPath = core.getInput('path');
  const setupPy = fs.readFileSync(path.resolve(process.env.GITHUB_WORKSPACE, configPath, './setup.py')).toString();
  console.log(setupPy)
  const version = setupPy.search('version\s*=\s*[\'"]([^\'"]*)[\'"]');
  core.setOutput('version', version)
  console.log(`The version: ${version}`);
} catch (error) {
  core.setFailed(error.message);
}
