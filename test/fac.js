var Y = require('../y.js')
var l = console.log.bind(console)

var factorial = Y(function (fac) {
  return function (n) {
    return (n == 0 ? 1 : n * fac(n - 1))
  }
})

l("3! = 6: " + (factorial(3) == 6))
l("5! = 120: " + (factorial(5) == 120))
l("10! = 3628800: " + (factorial(10) == 3628800))