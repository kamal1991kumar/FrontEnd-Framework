This framework can be operated by Avizva CLI tool and we recommend to initialize a project with Avizva CLI. Using Avizva CLI, you can create controllers components, services, actions, reducers and more with standard boilerplate. Using CLI, you can develop and deploy multi-platform projects with ease.

[To download and install, click here.](https://gitlab.com/thatisuday/cli-avizva/wikis/home)

***

Though, CLI is not necessary to use this framework, it's mandatory at Avizva to use CLI tool. If you had to use framework without CLI, we recommended you to clone latest release branch and use `npm run start` and `npm run build` command to run and build project.

Below are environment variable to consider
- `WDS_EXTRACT_CSS` :  Extract CSS to external stylesheet. Default value is `false`, use `true` to enable it. Use => `WDS_EXTRACT_CSS=true npm run build`
- `WDS_OPEN` : Open browser window for webpack development server. Default value `false`, use `true` to enable it. Use => `WDS_OPEN=true npm run start`