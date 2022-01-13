'use strict'

var fs = require('fs')
var path = require('path')
var test = require('tape')
var isAnimated = require('../lib')

var types = ['gif', 'png', 'webp']

types.forEach(function (type) {
  test('Test animated ' + type.toUpperCase() + ' images', function (t) {
    var images = fs.readdirSync('./test/animated').filter(function (name) {
      return path.extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = fs.readFileSync('./test/animated/' + imgName)
      t.true(isAnimated(buffer), imgName)
    })
  })

  test('Test static ' + type.toUpperCase() + ' images', function (t) {
    var images = fs.readdirSync('./test/static').filter(function (name) {
      return path.extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = fs.readFileSync('./test/static/' + imgName)
      t.false(isAnimated(buffer), imgName)
    })
  })

  test('Test invalid ' + type.toUpperCase() + ' images', function (t) {
    var images = fs.readdirSync('./test/invalid').filter(function (name) {
      return path.extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = fs.readFileSync('./test/invalid/' + imgName)
      t.false(isAnimated(buffer), imgName)
    })
  })
})
