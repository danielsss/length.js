'use strict';


const { length } = require('../');
const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;
const describe = mocha.describe;
const it = mocha.it;

describe('# Length functional test', () => {
  it('> test length of null', () => {
    expect(length(null)).to.equal(0);
  });

  it('> test length of undefined', () => {
    expect(length(undefined)).to.equal(0);
  });

  it('> test length of String', () => {
    expect(length('string')).to.equal(6);
    expect(length('s')).to.equal(1);
    expect(length('!@#asASD@')).to.equal(9);
    expect(length('1234')).to.equal(4);
  });

  it('> test length of Number', () => {
    expect(length(1)).to.equal(0);
    expect(length(123)).to.equal(0);
    expect(length(123456)).to.equal(0);
  });

  it('> test length of Boolean', () => {
    expect(length(true)).to.equal(0);
    expect(length(false)).to.equal(0);
  });

  it('> test length of Object', () => {
    expect(length({})).to.equal(0);
    expect(length({a: 1})).to.equal(0);
  });

  it('> test length of Function', () => {
    expect(length(() => {})).to.equal(0);
  });

  it('> test length of Array', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const arr3 = [1];
    expect(length(arr1)).to.equal(3);
    expect(length(arr2)).to.equal(0);
    expect(length(arr3)).to.equal(1);
  });

  it('> test length of Buffer', () => {
    expect(length(Buffer.from([1, 2]))).to.equal(2);
    expect(length(Buffer.from([1]))).to.equal(1);
  });

  it('> test length of Map', () => {
    const map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    expect(length(map)).to.equal(2);
    map.delete('a');
    expect(length(map)).to.equal(1);
    map.clear();
    expect(length(map)).to.equal(0);
  });

  it('> test length of Set', () => {
    const set = new Set([1, 2, 3, 4]);
    expect(length(set)).to.equal(4);
  });
});