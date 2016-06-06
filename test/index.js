'use strict'

var fs = require('fs')
var test = require('tape')
var isAnimated = require('../index')

test('Test animated GIFs', function (t) {
  var images = fs.readdirSync('./test/animated')

  t.plan(images.length)

  images.forEach(function (imgName) {
    var buffer = fs.readFileSync('./test/animated/' + imgName)
    t.true(isAnimated(buffer), imgName)
  })
})

test('Test static GIFs', function (t) {
  var images = fs.readdirSync('./test/static')

  t.plan(images.length)

  images.forEach(function (imgName) {
    var buffer = fs.readFileSync('./test/static/' + imgName)
    t.false(isAnimated(buffer), imgName)
  })
})

test('Test invalid GIFs', function (t) {
  var images = fs.readdirSync('./test/invalid')

  t.plan(images.length)

  images.forEach(function (imgName) {
    var buffer = fs.readFileSync('./test/invalid/' + imgName)
    t.false(isAnimated(buffer), imgName)
  })
})
