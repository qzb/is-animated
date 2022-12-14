import { readdirSync, readFileSync } from 'fs'
import { extname } from 'path'
import test from 'tape'
import isAnimated from '../lib/index.js'

var types = ['gif', 'png', 'webp']

types.forEach(function (type) {
  test('Test animated ' + type.toUpperCase() + ' images', function (t) {
    var images = readdirSync('./test/animated').filter(function (name) {
      return extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = readFileSync('./test/animated/' + imgName)
      t.true(isAnimated(buffer), imgName)
    })
  })

  test('Test static ' + type.toUpperCase() + ' images', function (t) {
    var images = readdirSync('./test/static').filter(function (name) {
      return extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = readFileSync('./test/static/' + imgName)
      t.false(isAnimated(buffer), imgName)
    })
  })

  test('Test invalid ' + type.toUpperCase() + ' images', function (t) {
    var images = readdirSync('./test/invalid').filter(function (name) {
      return extname(name).slice(1) === type
    })

    t.plan(images.length)

    images.forEach(function (imgName) {
      var buffer = readFileSync('./test/invalid/' + imgName)
      t.false(isAnimated(buffer), imgName)
    })
  })
})
