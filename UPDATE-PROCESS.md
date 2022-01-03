# Update process

-   Bump version number in package.json
-   Update all dependencies to latest version
    —> double check newly updated versions
-   Run `yarn` in the command line
-   Run `yarn generate-metadata`
-   Test figma plugin `yarn build:watch`
-   Run `yarn build`
-   Publish to figma
-   Run `yarn update-git`
