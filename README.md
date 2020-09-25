[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/quick-remote.svg)](https://www.npmjs.com/package/@jaspero/quick-remote)

# Quick Remote

Quickly clone a project and add a remote to it, pulling in source from a selected branch of the remote.
This is most useful for starting new projects. 

## Install

```
npm i -g @jaspero/quick-remote
```

## Example

```
qr r Jaspero/jms -p example
```

## Options

| Param | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| p/project | Project to clone | string | - |
| n/name | Name for the created remote | string | defaults to repo url |
| b/branch | Branch from the remote to use | string | master |
| f/force | Adds --allow-unrelated-histories when merging remote | boolean | true | 
