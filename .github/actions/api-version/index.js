const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

try {
  const configPath = core.getInput('path');
  const setupPy = fs.readFileSync(path.resolve(process.env.GITHUB_WORKSPACE, configPath, './setup.py')).toString();
  console.log(setupPy)
  const version = setupPy.match(/version\s*=\s*[\'"]([^\'"]*)[\'"]/);
  if (version.length) {
    core.setOutput('version', version[0])
    console.log(`The version: ${version[0]}`);
  }
} catch (error) {
  core.setFailed(error.message);
}
