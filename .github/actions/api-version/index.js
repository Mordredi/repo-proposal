const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const fs = require('fs');
const exec = require('@actions/exec');

async function run () {
  try {
    const configPath = core.getInput('path');
    exec.exec('pipenv --version');
    exec.exec('ansible --version');
    const setupPy = path.resolve(process.env.GITHUB_WORKSPACE, configPath, './setup.py');
    const version = await exec.exec(`pipenv run python ${setupPy} --version`);
    console.log(version);
    core.setOutput('version', version);
    console.log(`The version: ${version}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();