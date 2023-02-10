/* eslint-disable semi */

const res = require("express/lib/response")

function random(n) {
  return Math.floor(Math.random() * n)
}

function randomD(n) {
  return random(n) + 1
}

function randomRolls(n, s) {
  const results = []
  for (let i = 0; i < n; i += 1) {
    results.push(randomD(s))
  }
  return results
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
