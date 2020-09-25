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
