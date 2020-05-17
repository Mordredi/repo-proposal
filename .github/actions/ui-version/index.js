const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');

try {
  const configPath = core.getInput('path');
  const packageJSON = JSON.parse(fs.readFileSync(path.resolve(process.env.GITHUB_WORKSPACE, configPath, './package.json')));
  const version = packageJSON.version;
  core.setOutput('version', version)
  console.log(`The version: ${version}`);
} catch (error) {
  core.setFailed(error.message);
}
