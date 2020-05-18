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
    let version = ''
    const options = {};
    options.listeners = {
      stdout: (data) => {
        myOutput += data.toString();
      },
      stderr: (data) => {
        myError += data.toString();
      }
    }
    const setupPy = path.resolve(process.env.GITHUB_WORKSPACE, configPath, './setup.py');
    await exec.exec(`pipenv run python ${setupPy} --version`, [], options);
    console.log(version);
    core.setOutput('version', version);
    console.log(`The version: ${version}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();