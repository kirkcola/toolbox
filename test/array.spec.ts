import '../src/hacks/array';

describe('array', () => {
  it('Array.prototype.insert', () => {
    const foo = [];
    expect(foo.insert(0, [1, 2, 3])).toEqual([1, 2, 3]);
    expect(foo.insert(0, 0)).toEqual([0]);
    // Simulate `Array.prototype.unshift`
    expect(foo.insert(-Infinity, 0)).toEqual([0]);
    // Simulate `Array.prototype.push`
    expect(foo.insert(Infinity, 0)).toEqual([0]);
  })
  it('Array.prototype.remove', () => {
    const foo = [1, 2, 3];
    expect(foo.remove(0)).toEqual([2, 3]);
    expect(foo.remove(0, 2)).toEqual([3]);
    expect(foo.remove(0, Infinity)).toEqual([]);
    // Simulate `Array.prototype.shift`
    expect(foo.remove(-Infinity)).toEqual([2, 3]);
    // Simulate `Array.prototype.pop`
    expect(foo.remove(Infinity)).toEqual([1, 2]);
  })
})
