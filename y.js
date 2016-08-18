// Y combinator
function Y (f) {
  return ((function A (x) {
    return f(function B(v) {
      return x(x)(v)
    });
  })(function C (x) {
    return f(function D (v) {
      return x(x)(v)
    })
  }))
}

module.exports = Y