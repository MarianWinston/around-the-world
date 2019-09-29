# ⚡️ Lol - Flows 💛 

## Pre-reqs
* Node.js ^10.x.x
* Yarn ^1.17.x

**A note about yarn:** Yarn is a package manager for node. It uses the same registry as npm, but it's quicker and more secure. Yarn is recommended for use over npm.
To learn more about Yarn, [visit the docs](https://yarnpkg.com/en/docs/install)

## Project Start

1. Add your git repo
```zsh
~/$projectname $ rm -rf .git
~/$projectname $ git remote add origin $yourrepourl
```
2. Install dependencies
```zsh
~/$projectname $ yarn
```
3. Develop!
```zsh
~/$projectname $ yarn dev
```

## Configuration
All configuration should be managed via `.env` per the 12 factor app. a `.env-sample` file is included.

## Continuous Integration
This package comes with CI by default. The config for Azure Pipelines can be found under `.ci/`. The following processes for branches is described:

#### `master`, `feature/*`, `cleanup/*` and `fix/*`
* Lint code (according to the Airbnb style guide)
* Test code (according to unit tests defined in `test/`)
* Audit packages (via `yarn audit`)
* Perform static source code analysis. Find all vulnerabilities within the codebase
* Check for any committed keys

#### `develop` and `staging`
* Lint code
* Test code
