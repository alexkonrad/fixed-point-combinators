// Y combinator
var Y = function Y (f) {
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

module.exports = Y(function (fac) {
  return function (n) {
    return (n == 0 ? 1 : n * fac(n - 1))
  }
})
