# Installation
Avizva UI Framework depends on `avizva-cli` npm module to work. Framework can run without CLI but CLI makes our life easier, you will see how. Since, its use it limited to Avizva, it's not hosted publicly. Rather, it lives on **local npm registry** hosted on office network. Hence, there are few unusual things we need to take care of first to get started.

### /etc/hosts file
```bash
sudo sh -c "echo '{lan-ip} npm.avizva.com' >> /etc/hosts"
```

### install CLI tool
```bash
npm install --global avizva-cli --registry=http://npm.avizva.com
```

***

Though, CLI is not necessary to use this framework, it's mandatory at Avizva to use CLI tool. If you had to use framework without CLI, we recommended you to clone latest release branch and use `npm run start` and `npm run build` command to run and build project.

Below are environment variable to consider
- `WDS_EXTRACT_CSS` :  Extract CSS to external stylesheet. Default value is `false`, use `true` to enable it. Use => `WDS_EXTRACT_CSS=true npm run build`
- `WDS_OPEN` : Open browser window for webpack development server. Default value `false`, use `true` to enable it. Use => `WDS_OPEN=true npm run start`