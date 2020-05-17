const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const myToken = core.getInput('myToken');
    const octokit = new github.GitHub(myToken);
    const owner = github.context.payload.repository.owner.login;
    const pullNumber = github.context.payload.number;
    console.log(process.env.GITHUB_REPOSITORY);

    const { data: pullRequest } = await octokit.pulls.get({
        owner,
        repo: process.env.GITHUB_REPOSITORY,
        pull_number: pullNumber,
        mediaType: {
          format: 'diff'
        }
    });

    console.log(pullRequest);
}

run();