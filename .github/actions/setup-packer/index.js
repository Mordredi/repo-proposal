const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

async function run() {
  try {
    exec.exec('aws --version');
    const packerPath = await tc.downloadTool('https://releases.hashicorp.com/packer/1.3.5/packer_1.3.5_linux_amd64.zip');
    const packerPathExractedFolder = await tc.extractZip(packerPath);
    core.addPath(packerPathExractedFolder);
    console.log(packerPathExractedFolder);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()