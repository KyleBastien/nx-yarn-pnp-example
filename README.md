# Nx with Yarn PnP Example

This project is designed to show how to use Nx with Yarn PnP with Zero Installs.

This is currently not trivial and has some caveats because Nx takes a dependency on node_modules existing in a variety of scenarios.

I will do my best to update this example as new versions of Yarn and Nx are released.

Here are some things to consider, if you're going to embark on using Yarn PnP with Nx:

1. Nx Daemon doesn't work. I'm not currently sure why this is the case, but I haven't found any way to get the Nx daemon to work. The workaround for this is to add `"useDaemonProcess": false` to your `nx.json` file.

2. You need to unplug `tslib` if you are using the `@nrwl/js` executor (e.g., the `ts-lib` package in this repo). This is because Nx directly calls into [TS via the TS APIs](https://github.com/nrwl/nx/blob/5e3f1d47bfa725e19a6d06fe7c049dd41c41a077/packages/workspace/src/utilities/typescript/compilation.ts#L157), which means Yarn "PnP-ifyed" TS doesn't get invoked, and TS is unable to find tslib, because it's not in node_modules.

3. (Only if you want Zero Installs to work) You need to check in your `.yarn/unplugged` folder. Otherwise dependencies like `swc` that Yarn uses won't be able to be found, because the binaries won't have installed. `unplugged` is a operating system specific folder though, so this has the big disadvantage of making it basically impossible to have a repo be cross platform where some people work on Windows and some work on Linux (for example). If you're okay living without Zero Installs, then you can continue to `.gitignore` the `.yarn/unplugged` folder.

4. Upgrading Nx requires mare steps. Nx really wants the `node_modules` folder to exist during a `migrate latest` command. The way to do this is to do the following:

- Remove pnpMode: loose from .yarnrc.yml
- Add nodeLinker: node-modules to .yarnrc.yml
- Run yarn to install all packages in node_modules
- Run node ./node_modules/@nrwl/tao/index.js migrate latest
- Run yarn again to install any changed that the migrate script made to package.json
- Run node ./node_modules/@nrwl/tao/index.js migrate --run-migrations
- Remove the migrations.json file
- Remove nodeLinker: node-modules from .yarnrc.yml
- Add pnpMode: loose to .yarnrc.yml
- Run yarn again to remove the node_modules directory, and add back the .pnp.cjs file
