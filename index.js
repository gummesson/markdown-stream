/**
 * Dependencies
 */

var Remarkable = require('remarkable')
var through    = require('through2')

/**
 * Tranform a stream of Markdown into HTML.
 *
 * @param  {string} [preset]
 * @param  {object} [options]
 * @return {function}
 *
 * @api public
 */

function markdown(preset, options) {
  var stream = through(transform, flush)
  var parser = new Remarkable(preset, options)
  var buffer = []

  function transform(chunk, encoding, done) {
    buffer.push(chunk)
    done()
  }

  function flush(done) {
    this.push(parser.render(buffer.join('\n')))
    done()
  }

  return stream
}

/**
 * Exports
 */

module.exports = markdown
