/**
 * Dependencies
 */

var fs       = require('fs')
var test     = require('tape')
var markdown = require('../')

/**
 * Tests
 */

test('markdown()', function(assert) {
  var input   = fs.createReadStream('test/fixtures/input.md')
  var output  = fs.readFileSync('test/fixtures/output.html', 'utf8')
  var results = input.pipe(markdown())

  results.on('data', function(data) {
    assert.equal(data.toString().trim(), output.trim())
  })

  results.on('end', function() {
    assert.end()
  })
})
