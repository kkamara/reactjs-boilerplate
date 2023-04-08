#!usr/bin/env node

const { spawn, exec, } = require('node:child_process')
const { log, } = require('node:console')
const cli = require('cli'), options = cli.parse({
  commitMessage: [ 'm', 'Commit message', 'string', 'New commit', false],
})

const run = async () => {
  await new Promise((resolve, reject) => {
    exec(
      `yarn build`, 
      (err, stdout, stderr) => {
      if (err) return reject(err)
      log(stdout)
      resolve()
    })
  })
  await new Promise((resolve, reject) => {
    exec(
      `git add .`, 
      (err, stdout, stderr) => {
      if (err) return reject(err)
      log(stdout)
      resolve()
    })
  })
  await new Promise((resolve, reject) => {
    exec(
      `git commit -m '${options.commitMessage}'`, 
      (err, stdout, stderr) => {
      if (err) return reject(err)
      log(stdout)
      resolve()
    })
  })
  await new Promise((resolve, reject) => {
    exec(
      `git push`, 
      (err, stdout, stderr) => {
      if (err) return reject(err)
      log(stdout)
      resolve()
    })
  })
  await new Promise((resolve, reject) => {
    exec(
      `yarn deploy`, 
      (err, stdout, stderr) => {
      if (err) return reject(err)
      log(stdout)
      resolve()
    })
  })
}

run()