/**
 * Executes each js file in ./tests individually in series
 * Forwards the stdout and stderr of each
 * Fails (non-zero exit code) if any of the child processes fail
 */

const fs = require('fs')
const {spawnSync} = require('child_process')

const testFiles = fs.readdirSync('tests')
const exitCodes = testFiles.map(testFile => {
    console.log(`---${testFile}---`)
    const results = spawnSync('node', [`./tests/${testFile}`])
    if (results.error) {
        throw results.error
    }
    logResults(results)
    console.log(`----------\n`)
    return results.status
})
const exitCode = exitCodes.some(code => code !== 0) ? 1 : 0
process.exit(exitCode)

// ---

function logResults({stdout, stderr, status}) {
    console.log(`\
stdout:
${indent(stdout)}
stderr:
${indent(stderr)}
status:
${indent(status)}`)
}

function indent(x) {
    return String(x).split('\n').map(line => `  ${line}`).join('\n')
}