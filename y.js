var l = console.log

// Y combinator
var Y = function Y (f) {
  l(Y, f)
  return ((function A (x) {
    l(A, x)
    return f(function B(v) {
      l(B, x(x)(v))
      return x(x)(v)
    });
  })(function C (x) {
    l(C, x)
    return f(function D (v) {
      l(D, v, x(x)(v))
      return x(x)(v)
    })
  }))
}

module.exports = Y(function (fac) {
  return function (n) {
    return (n == 0 ? 1 : n * fac(n - 1))
  }
})
