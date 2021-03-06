/**
 * Dependencies
 */

var fs       = require('fs')
var test     = require('tape')
var markdown = require('../')

/**
 * Tests
 */

test('markdown(preset, options)', function(assert) {
  var input   = fs.createReadStream('test/fixtures/input.md')
  var output  = fs.readFileSync('test/fixtures/output.html', 'utf8')
  var results = input.pipe(markdown('full', {
    typographer: true
  }))

  results.on('data', function(data) {
    assert.equal(data.toString().trim(), output.trim())
  })

  results.on('end', function() {
    assert.end()
  })
})
