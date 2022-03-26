import glob from 'fast-glob'

const cwd = process.cwd()
;[
  {
    pattern: 'node_modules/fast-glob/**/*.js',
    ignore: []
  },
  {
    pattern: 'node_modules/fast-glob/**/*.js',
    ignore: ['node_modules/fast-glob/**/node_modules/**']
  },
  {
    pattern: 'node_modules/fast-glob/**/*.js',
    ignore: ['**/node_modules/**']
  }
].forEach(({ pattern, ignore }) => {
  console.log('cwd: ' + cwd)
  console.log('pattern: ' + pattern)
  console.log('ignore: ' + JSON.stringify(ignore))
  const files = glob.sync(pattern, { cwd, ignore })
  console.log('files: ' + files.length)
  files.forEach((file) => {
    console.log('  ' + file)
  })
  console.log('')
})
